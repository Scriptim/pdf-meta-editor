const nodeExiftool = require('node-exiftool')
const exiftool = new nodeExiftool.ExiftoolProcess(require('dist-exiftool'))

exiftool
  .open()
  .then(console.log)
  .then(() => exiftool.close())
  .catch(console.error)
