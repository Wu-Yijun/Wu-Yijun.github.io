function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/dust" instead of "highlight.js/lib/languages/dust.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./dust.js'); */
export default require('./dust.js');