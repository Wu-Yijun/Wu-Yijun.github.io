function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/ruby" instead of "highlight.js/lib/languages/ruby.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./ruby.js'); */
export default require('./ruby.js');