const nodeExiftool = require('node-exiftool')
const exiftool = new nodeExiftool.ExiftoolProcess(require('dist-exiftool'))
const readlineSync = require('readline-sync')

const metatags = [
  'FileType',
  'Title',
  'Author',
  'Subject',
  'CreateDate',
  'FileModifyDate',
  'Creator',
  'Producer',
  'Keywords'
]

const useFile = filename => {
  exiftool
    .open()
    .then(console.log)
    .then(() => filename)
    .then(readMetadata)
    .then(requestMetadata)
    .then(writeMetadata)
    .then(() => exiftool.close())
    .catch(console.error)
}

const readMetadata = filename => {
  return metadata = exiftool.readMetadata(filename, metatags)
    .then(metadata => {
      if (metadata.error !== null) {
        throw new Error(metadata.error)
      }
      if (metadata.data[0].FileType !== 'PDF') {
        throw new Error(`File is not a pdf file: ${filename}`)
      }
      return metadata.data[0]
    })
}

const requestMetadata = metadata => {
  const newMetadata = {
    OutputFile: metadata.SourceFile
  }
  for (let tag of metatags) {
    if (tag === 'FileType') {
      continue
    }

    const options = {}
    let question = `${tag}: `
    if (metadata[tag]) {
      options.defaultInput = metadata[tag]
      question = `${tag} [${metadata[tag]}]: `
    }
    const answer = readlineSync.question(question, options)
    newMetadata[tag] = answer
  }

  return newMetadata
}

const writeMetadata = data => {
  const metadata = {}
  for (let tag of metatags) {
    if (tag === 'FileType') {
      continue
    }
    metadata[tag] = data[tag]
  }
  return exiftool.writeMetadata(data.OutputFile, metadata)
}

module.exports = { useFile }
