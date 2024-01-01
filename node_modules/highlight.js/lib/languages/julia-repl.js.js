function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/julia-repl" instead of "highlight.js/lib/languages/julia-repl.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./julia-repl.js'); */
export default require('./julia-repl.js');