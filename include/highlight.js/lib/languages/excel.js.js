function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/excel" instead of "highlight.js/lib/languages/excel.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./excel.js'); */
export default require('./excel.js');