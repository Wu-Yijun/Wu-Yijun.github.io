function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/sml" instead of "highlight.js/lib/languages/sml.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./sml.js'); */
export default require('./sml.js');