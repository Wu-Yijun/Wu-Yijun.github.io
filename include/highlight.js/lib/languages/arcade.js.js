function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/arcade" instead of "highlight.js/lib/languages/arcade.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./arcade.js'); */
export default require('./arcade.js');