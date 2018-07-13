// Copyright 2018 Scriptim (see LICENSE.md)

const nodeExiftool = require('node-exiftool')
const exiftool = new nodeExiftool.ExiftoolProcess(require('dist-exiftool'))
const chalk = require('chalk')

const metatags = [
  [
    'FileType',
    'FileSize',
    'FileModifyDate',
    'FileAccessDate',
    'FilePermissions',
    'PDFVersion',
    'Linearized'
  ],
  [
    'Title',
    'Author',
    'Subject',
    'CreateDate',
    'FileModifyDate',
    'Creator',
    'Producer',
    'Keywords'
  ]
]

const useFile = filename => {
  process.stdout.write(`Printing metadata of file ${chalk.bold(filename)}\n`)
  exiftool
    .open()
    .then(() => filename)
    .then(readMetadata)
    .then(printMetadata)
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

const printMetadata = metadata => {
  for (let tagGroup of metatags) {
    process.stdout.write('\n')
    for (let tag of tagGroup) {
      process.stdout.write(`${tag}: ${chalk.blue(metadata[tag])}\n`)
    }
  }
}

module.exports = { useFile }
