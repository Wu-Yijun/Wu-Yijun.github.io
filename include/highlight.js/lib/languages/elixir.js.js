function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/elixir" instead of "highlight.js/lib/languages/elixir.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./elixir.js'); */
export default require('./elixir.js');