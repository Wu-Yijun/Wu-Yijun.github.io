function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/kotlin" instead of "highlight.js/lib/languages/kotlin.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./kotlin.js'); */
export default require('./kotlin.js');