import hljs from '../node_modules/highlight.js/es/core.js';
import javascript from '../node_modules/highlight.js/es/languages/javascript.js';

hljs.registerLanguage('javascript', javascript);

function renderCode() {
    // Using require
    // const hljs = require('highlight.js/lib/core');

    // Load any languages you need
    hljs.registerLanguage('javascript', javascript);

    hljs.highlightAll();
}
window.onload = renderCode();