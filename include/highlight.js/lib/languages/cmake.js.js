function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/cmake" instead of "highlight.js/lib/languages/cmake.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./cmake.js'); */
export default require('./cmake.js');