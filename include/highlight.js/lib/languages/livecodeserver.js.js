function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/livecodeserver" instead of "highlight.js/lib/languages/livecodeserver.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./livecodeserver.js'); */
export default require('./livecodeserver.js');