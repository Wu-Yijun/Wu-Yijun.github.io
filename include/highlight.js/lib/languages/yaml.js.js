function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/yaml" instead of "highlight.js/lib/languages/yaml.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./yaml.js'); */
export default require('./yaml.js');