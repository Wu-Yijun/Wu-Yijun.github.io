function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/roboconf" instead of "highlight.js/lib/languages/roboconf.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./roboconf.js'); */
export default require('./roboconf.js');