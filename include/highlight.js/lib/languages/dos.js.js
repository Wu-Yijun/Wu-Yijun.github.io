function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/dos" instead of "highlight.js/lib/languages/dos.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./dos.js'); */
export default require('./dos.js');