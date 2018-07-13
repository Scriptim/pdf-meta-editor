#!/usr/bin/env node
// Copyright 2018 Scriptim (see LICENSE.md)

const metadataEditor = require('./metadata_editor.js')

if (process.argv.length !== 3) {
  process.stderr.write('Usage: pdf-meta-editor FILENAME\n')
  process.exit(1)
}

const filename = process.argv[2]
metadataEditor.useFile(filename)
