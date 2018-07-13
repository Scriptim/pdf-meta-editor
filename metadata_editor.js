const nodeExiftool = require('node-exiftool')
const exiftool = new nodeExiftool.ExiftoolProcess(require('dist-exiftool'))
const readlineSync = require('readline-sync')
const chalk = require('chalk')

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
  process.stdout.write(`Editing file ${chalk.bold(filename)}\n`)
  exiftool
    .open()
    .then(() => filename)
    .then(readMetadata)
    .then(requestMetadata)
    .then(writeMetadata)
    .then(() => exiftool.close())
    .catch(err => {
      process.stderr.write(chalk.red.bold(err.message, '\n'))
      process.exit(1)
    })
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
      question = tag + ' ' + chalk.dim(`[${metadata[tag]}]`) + ': '
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
