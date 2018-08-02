#!/usr/bin/env node
// Copyright 2018 Scriptim (see LICENSE.md)

const metadataEditor = require('./metadata_editor.js')
const metadataPrinter = require('./metadata_printer.js')

const argv = require('minimist')(process.argv.slice(2))

const helpPage = `pdf-meta-editor

Usage: pdf-meta-editor FILENAME [-p|-o]
       pdf-meta-editor (-h|-v)

options
  -h --help      Show this help page.
  -v --version   Print the currently installed version.
  -p --print     Print the metadata instead of editing it.
  -o --overwrite Overwrite the original file.
`

if (argv.h === true || argv.help === true) {
  process.stdout.write(helpPage)
  process.exit(0)
}

if (argv.v === true || argv.version === true) {
  const {version} = require('./package.json')
  process.stdout.write(`${version}\n`)
  process.exit(0)
}

if (argv._.length !== 1) {
  process.stdout.write(helpPage)
  process.exit(1)
}

const filename = argv._[0]
if (argv.p === true || argv.print === true) {
  metadataPrinter.useFile(filename)
} else {
  let options = []
  if (argv.o === true || argv.overwrite === true) {
    options.push('overwrite_original')
  }
  metadataEditor.useFile(filename, options)
}

