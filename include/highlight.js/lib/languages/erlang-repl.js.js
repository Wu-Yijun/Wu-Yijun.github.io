function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/erlang-repl" instead of "highlight.js/lib/languages/erlang-repl.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./erlang-repl.js'); */
export default require('./erlang-repl.js');