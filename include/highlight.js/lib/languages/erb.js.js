function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/erb" instead of "highlight.js/lib/languages/erb.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./erb.js'); */
export default require('./erb.js');