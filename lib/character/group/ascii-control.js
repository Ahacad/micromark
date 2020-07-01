var characters = require('../../util/characters')

module.exports = asciiControl

function asciiControl(code) {
  return (
    // Special whitespace codes (which have negative codes) or `nil` (including)…
    code <= characters.us || code === characters.del
  )
}
