function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/abnf" instead of "highlight.js/lib/languages/abnf.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./abnf.js'); */
export default require('./abnf.js');