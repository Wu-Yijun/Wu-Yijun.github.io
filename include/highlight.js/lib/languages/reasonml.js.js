function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/reasonml" instead of "highlight.js/lib/languages/reasonml.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./reasonml.js'); */
export default require('./reasonml.js');