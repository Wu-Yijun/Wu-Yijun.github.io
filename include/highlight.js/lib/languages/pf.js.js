function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/pf" instead of "highlight.js/lib/languages/pf.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./pf.js'); */
export default require('./pf.js');