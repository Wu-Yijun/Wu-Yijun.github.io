function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/q" instead of "highlight.js/lib/languages/q.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./q.js'); */
export default require('./q.js');