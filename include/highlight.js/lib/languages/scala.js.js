function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/scala" instead of "highlight.js/lib/languages/scala.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./scala.js'); */
export default require('./scala.js');