function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/stylus" instead of "highlight.js/lib/languages/stylus.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./stylus.js'); */
export default require('./stylus.js');