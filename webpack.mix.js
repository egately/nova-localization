let mix = require('laravel-mix')

require('./mix')

mix.js('resources/js/tool.js', 'dist/js')
  .nova('egately/Novalocalization');
