function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/twig" instead of "highlight.js/lib/languages/twig.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./twig.js'); */
export default require('./twig.js');