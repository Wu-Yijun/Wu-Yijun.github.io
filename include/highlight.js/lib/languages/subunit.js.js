function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/subunit" instead of "highlight.js/lib/languages/subunit.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./subunit.js'); */
export default require('./subunit.js');