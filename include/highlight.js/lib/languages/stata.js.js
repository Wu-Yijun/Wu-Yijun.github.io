function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/stata" instead of "highlight.js/lib/languages/stata.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./stata.js'); */
export default require('./stata.js');