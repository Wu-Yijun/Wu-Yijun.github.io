function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/asciidoc" instead of "highlight.js/lib/languages/asciidoc.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./asciidoc.js'); */
export default require('./asciidoc.js');