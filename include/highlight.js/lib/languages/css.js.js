function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/css" instead of "highlight.js/lib/languages/css.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./css.js'); */
export default require('./css.js');