function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/moonscript" instead of "highlight.js/lib/languages/moonscript.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./moonscript.js'); */
export default require('./moonscript.js');