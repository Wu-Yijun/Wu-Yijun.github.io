function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/haxe" instead of "highlight.js/lib/languages/haxe.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./haxe.js'); */
export default require('./haxe.js');