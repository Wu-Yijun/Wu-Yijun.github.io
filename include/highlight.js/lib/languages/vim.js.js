function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/vim" instead of "highlight.js/lib/languages/vim.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./vim.js'); */
export default require('./vim.js');