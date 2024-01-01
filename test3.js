import hljs from './include/highlight.js/es/core.js';
import javascript from './include/highlight.js/es/languages/javascript.js';

window.onload = () => {
    // Using require
    // const hljs = require('highlight.js/lib/core');

    // Load any languages you need
    hljs.registerLanguage('javascript', javascript);

    hljs.highlightAll();
}