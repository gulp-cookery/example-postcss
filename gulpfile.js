'use strict';

var gulp = require('gulp');
var chef = require('gulp-chef');

var meals = chef({
    src: 'app/',
    dest: 'dist/',
    postcss: {
        src: '**/*.css',
        processors: {
            cssnext: '',
            precss: '',
            autoprefixer: {
                browsers: ['last 2 version']
            },
            cssnano: {
                safe: true
            }
        },
        flatten: true,
        sourcemaps: '.'
    },
    default: 'postcss'
});

gulp.registry(meals);
