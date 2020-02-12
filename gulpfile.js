const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const csso = require('gulp-csso');
const maps = require('gulp-sourcemaps');
const purge = require('gulp-purgecss');


function css(){
    return src('./css/all.scss')
    .pipe(maps.init())
    .pipe(sass({
        outputStyle:'expanded'
    }))
    .pipe(purge({
        content:['*.html']
    }))
    .pipe(maps.write('./'))
    .pipe(dest('./css/'));
}

function css_m(){
    return src('./css/all.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(purge({
        content:['*.html']
    }))
    .pipe(csso())
    .pipe(rename(function(path){
        path.basename += '.min';
        path.extname = '.css';
    }))
    .pipe(maps.write('./'))
    .pipe(dest('./css/'))
}

exports.css = css;
exports.css_m = css_m;
exports.default = parallel(css, css_m); 