function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/crmsh" instead of "highlight.js/lib/languages/crmsh.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./crmsh.js'); */
export default require('./crmsh.js');