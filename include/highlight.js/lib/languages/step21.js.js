function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/step21" instead of "highlight.js/lib/languages/step21.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./step21.js'); */
export default require('./step21.js');