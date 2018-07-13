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
