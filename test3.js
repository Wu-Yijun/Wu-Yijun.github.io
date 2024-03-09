import hljs from '/Include-Outer/highlight.js/es/core.js';
import javascript from '/Include-Outer/highlight.js/es/languages/javascript.js';

window.onload = () => {
    // Using require
    // const hljs = require('highlight.js/lib/core');

    // Load any languages you need
    hljs.registerLanguage('javascript', javascript);

    hljs.highlightAll();
}