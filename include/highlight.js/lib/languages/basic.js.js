function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/basic" instead of "highlight.js/lib/languages/basic.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./basic.js'); */
export default require('./basic.js');