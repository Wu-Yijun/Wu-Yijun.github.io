function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/axapta" instead of "highlight.js/lib/languages/axapta.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./axapta.js'); */
export default require('./axapta.js');