function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/sas" instead of "highlight.js/lib/languages/sas.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./sas.js'); */
export default require('./sas.js');