function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/matlab" instead of "highlight.js/lib/languages/matlab.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./matlab.js'); */
export default require('./matlab.js');