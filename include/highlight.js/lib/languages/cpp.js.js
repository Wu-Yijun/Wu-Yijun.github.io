function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/cpp" instead of "highlight.js/lib/languages/cpp.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./cpp.js'); */
export default require('./cpp.js');