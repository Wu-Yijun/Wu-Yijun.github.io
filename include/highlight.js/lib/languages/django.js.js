function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/django" instead of "highlight.js/lib/languages/django.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./django.js'); */
export default require('./django.js');