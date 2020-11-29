const{src, dest, series, parallel, watch} = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const minify = require('gulp-minify');
const minifyCSS = require('gulp-minify-css');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

const pngquant    = require('imagemin-pngquant');







function indexCopy() {
    return src('./src/*.html')
        .pipe(dest('./dist'))
      .pipe(reload({stream:true}));
}

function imagesCopy() {
    return src('./src/assets/images/*')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(dest('./dist/assets/images'));


}

function distClear(){
    return del('./dist');


}



sass.compiler = require('node-sass');

function cssOptimization(){
    return src('./src/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat('styles.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 20 versions']

        }))
        .pipe(cleanCSS({ level: 2,
            format: 'keep-breaks'}))
        .pipe(minifyCSS({
            keepBreaks: true
        }))
        .pipe(dest('./dist/css'))
       .pipe(reload({stream:true}));
}


function jsOptimization(){
    return src('src/js/*.js')
        .pipe( concat('scripts.js'))
        .pipe(minify({noSource: true}))
        .pipe(dest('./dist/js'))
        .pipe(reload({stream:true}));

}





function sync() {
    browserSync({
        server: {
            baseDir: "./dist"
        },
        port: 8080,
        open: true,
        notify: false

    });

    watch('./src/*.html',indexCopy);
    watch('./src/**/*.scss',cssOptimization);
    watch('src/**/*.js', jsOptimization);
}


const build = series(distClear,parallel(indexCopy,imagesCopy),cssOptimization,jsOptimization);

exports.build = build;
exports.dev = series(build,sync);






