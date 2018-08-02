# pdf-meta-editor

[![version (npm)](https://img.shields.io/npm/v/pdf-meta-editor.svg?style=flat-square)](https://www.npmjs.com/package/pdf-meta-editor)
[![license (GitHub)](https://img.shields.io/github/license/Scriptim/pdf-meta-editor.svg?longCache=true&style=flat-square)](https://github.com/Scriptim/pdf-meta-editor/blob/master/LICENSE.md)
[![downloads (npm)](https://img.shields.io/npm/dt/pdf-meta-editor.svg?style=flat-square)](https://www.npmjs.com/package/pdf-meta-editor)
[![dependencies (libraries.io)](https://img.shields.io/librariesio/release/npm/pdf-meta-editor.svg?style=flat-square)](https://libraries.io/npm/pdf-meta-editor)

Interactive cli for changing metadata of pdf files.

![Demo](demo.gif "Demo")

<https://www.npmjs.com/package/pdf-meta-editor>

## Installation

    sudo npm install -g pdf-meta-editor

## Usage

    pdf-meta-editor FILENAME

### Command Line Arguments

#### `-h/--help`

Show this help page.

    $ pdf-meta-editor --help
    pdf-meta-editor

    Usage: pdf-meta-editor FILENAME [-p]
           pdf-meta-editor (-h|-v)

    options
      -h --help      Show this help page.
      -v --version   Print the currently installed version.
      -p --print     Print the metadata instead of editing it.
      -o --overwrite Overwrite the original file.

#### `-v/--version`

Print the currently installed version.

#### `-p/--print`

Print the metadata instead of editing it.

##### Example

    $ pdf-meta-editor Demo.pdf --print
    Printing metadata of file Demo.pdf

    FileType: PDF
    FileSize: 5.7 kB
    FileModifyDate: 2018:07:13 00:00:00+02:00
    FileAccessDate: 2018:07:13 23:16:38+02:00
    FilePermissions: rw-r--r--
    PDFVersion: 1.3
    PageCount: 1
    Linearized: No

    Title: Demo Title
    Author: Demo Author
    Subject: Demo Subject
    CreateDate: 2018:07:13 00:00:00
    FileModifyDate: 2018:07:13 00:00:00+02:00
    Creator: Demo Creator
    Producer: Demo Producer
    Keywords: demo,pdf,file

#### `-o/--overwrite`

Overwrite the original file.

If not specified, the original file is retained by default.
