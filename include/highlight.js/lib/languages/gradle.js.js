function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/gradle" instead of "highlight.js/lib/languages/gradle.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./gradle.js'); */
export default require('./gradle.js');