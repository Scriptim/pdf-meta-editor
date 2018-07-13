const metadataEditor = require('./metadata_editor.js')

if (process.argv.length !== 3) {
  console.log('Usage: pdf-meta-editor FILENAME')
  process.exit(1)
}

const filename = process.argv[2]
