function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/rib" instead of "highlight.js/lib/languages/rib.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./rib.js'); */
export default require('./rib.js');