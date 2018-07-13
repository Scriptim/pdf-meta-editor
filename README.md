# pdf-meta-editor

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

##### Example

    pdf-meta-editor

    Usage: pdf-meta-editor FILENAME
        pdf-meta-editor (-h|-v)
        pdf-meta-editor -p FILENAME

    options
    -h --help     Show this help page.
    -v --version  Print the currently installed version.
    -p --print    Print the metadata instead of editing it.

#### `-v/--version`

Print the currently installed version.

#### `-p/--print`

Print the metadata instead of editing it.

##### Example

    $ pdf-meta-editor --print Demo.pdf
    Printing metadata of file Demo.pdf

    FileType: PDF
    FileSize: 5.7 kB
    FileModifyDate: 2018:07:13 00:00:00+02:00
    FileAccessDate: 2018:07:13 23:16:38+02:00
    FilePermissions: rw-r--r--
    PDFVersion: 1.3
    Linearized: No

    Title: Demo Title
    Author: Demo Author
    Subject: Demo Subject
    CreateDate: 2018:07:13 00:00:00
    FileModifyDate: 2018:07:13 00:00:00+02:00
    Creator: Demo Creator
    Producer: Demo Producer
    Keywords: demo,pdf,file
