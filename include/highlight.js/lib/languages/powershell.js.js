function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/powershell" instead of "highlight.js/lib/languages/powershell.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./powershell.js'); */
export default require('./powershell.js');