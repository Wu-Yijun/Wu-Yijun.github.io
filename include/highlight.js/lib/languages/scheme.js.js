function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/scheme" instead of "highlight.js/lib/languages/scheme.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./scheme.js'); */
export default require('./scheme.js');