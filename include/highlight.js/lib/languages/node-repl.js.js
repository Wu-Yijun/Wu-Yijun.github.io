function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/node-repl" instead of "highlight.js/lib/languages/node-repl.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./node-repl.js'); */
export default require('./node-repl.js');