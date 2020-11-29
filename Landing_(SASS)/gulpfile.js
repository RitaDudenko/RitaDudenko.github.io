const {src, dest, series, parallel, watch} = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const del = require('del');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const minifyCSS = require('gulp-minify-css');

function clearDist(){
    return del('./dest');
}

function copyIndex(){
    return src('./src/index.html')
        .pipe(dest('./dest'))
        .pipe(browserSync.reload({ stream: true }));
}

function sassCss(){
    return src('./src/css/main.sass')
        .pipe(sass().on('error', sass.logError))
       /* .pipe(cleanCSS({ level: 2,
            format: 'keep-breaks'}))
        .pipe(minifyCSS({
            keepBreaks: true
        })) */
        .pipe(dest('./dest/css'))
        .pipe(browserSync.reload({ stream: true }));

}

function clearAssets() {
    return del('./dest/assets/**');

}

function copyAssets() {
    return src('./src/assets/**')
        .pipe(dest('./dest/assets'))
        .pipe(browserSync.reload({ stream: true }));


}

const changeAssets = series(clearAssets,copyAssets,copyIndex);


function serve(){
    browserSync.init({
        server: "./dest"
    });

    watch('./src/assets/**/*.png', changeAssets);
    watch('./src/css/*.sass', sassCss);
    watch('./src/index.html',copyIndex);


}


const build = series(clearDist,parallel(copyAssets,copyIndex),sassCss);
exports.build = build;
exports.dev = series(build, serve);