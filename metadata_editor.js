const nodeExiftool = require('node-exiftool')
const exiftool = new nodeExiftool.ExiftoolProcess(require('dist-exiftool'))

const filename = 'test.pdf'

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

exiftool
  .open()
  .then(console.log)
  .then(() => readMetadata(filename))
  .then(console.log)
  .then(() => writeMetadata({
    SourceFile: 'test.pdf',
    Title: 'Test Title',
    Author: 'Test Author',
    Subject: 'Test Subject',
    Producer: 'Test Producer'
  }))
  .then(() => exiftool.close())
  .catch(console.error)

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

const writeMetadata = data => {
  const metadata = {}
  for (let tag of metatags) {
    if (tag === 'FileType') {
      continue
    }
    metadata[tag] = data[tag]
  }
  return exiftool.writeMetadata(data.SourceFile, metadata)
}
