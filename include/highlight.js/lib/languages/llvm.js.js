function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/llvm" instead of "highlight.js/lib/languages/llvm.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./llvm.js'); */
export default require('./llvm.js');