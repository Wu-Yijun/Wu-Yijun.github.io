function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/dart" instead of "highlight.js/lib/languages/dart.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./dart.js'); */
export default require('./dart.js');