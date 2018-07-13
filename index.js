#!/usr/bin/env node
// Copyright 2018 Scriptim (see LICENSE.md)

const metadataEditor = require('./metadata_editor.js')
const metadataPrinter = require('./metadata_printer.js')

const argv = require('minimist')(process.argv.slice(2))

if (argv._.length !== 1) {
  process.stderr.write('Usage: pdf-meta-editor [options] FILENAME\n')
  process.exit(1)
}

const filename = argv._[0]
if (argv.p === true || argv.print === true) {
  metadataPrinter.useFile(filename)
} else {
  metadataEditor.useFile(filename)
}
