function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/scilab" instead of "highlight.js/lib/languages/scilab.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./scilab.js'); */
export default require('./scilab.js');