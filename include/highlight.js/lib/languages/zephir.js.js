function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/zephir" instead of "highlight.js/lib/languages/zephir.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./zephir.js'); */
export default require('./zephir.js');