function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/rsl" instead of "highlight.js/lib/languages/rsl.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./rsl.js'); */
export default require('./rsl.js');