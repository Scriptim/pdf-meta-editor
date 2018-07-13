#!/usr/bin/env node
// Copyright 2018 Scriptim (see LICENSE.md)

const metadataEditor = require('./metadata_editor.js')

const argv = require('minimist')(process.argv.slice(2))

if (argv._.length !== 1) {
  process.stderr.write('Usage: pdf-meta-editor FILENAME\n')
  process.exit(1)
}

const filename = argv._[0]
metadataEditor.useFile(filename)
