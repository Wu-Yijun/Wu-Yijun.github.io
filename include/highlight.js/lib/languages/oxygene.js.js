function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/oxygene" instead of "highlight.js/lib/languages/oxygene.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./oxygene.js'); */
export default require('./oxygene.js');