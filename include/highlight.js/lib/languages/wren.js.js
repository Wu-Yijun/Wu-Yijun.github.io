function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/wren" instead of "highlight.js/lib/languages/wren.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./wren.js'); */
export default require('./wren.js');