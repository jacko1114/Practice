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

function cssm2(){
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
exports.cssm2 = cssm2;
exports.default = parallel(css, cssm2); 