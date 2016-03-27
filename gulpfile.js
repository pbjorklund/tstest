var gulp = require("gulp"),
    print = require('gulp-print'),
    src = require("vinyl-source-stream"),
    mocha = require("gulp-mocha"),
    ts = require("gulp-typescript"),
    browserSync = require('browser-sync').create(),
    webpack = require('gulp-webpack');

// TEST
gulp.task('build', function() {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true
        }))
        .pipe(gulp.dest('build'));
});

gulp.task("watch", function(){
    gulp.watch(["./src/**/*.ts"], ["build", "test"]);
});

gulp.task("test", ["build"], function () {
    return gulp.src("build/**/*.spec.js")
        .pipe(mocha({ui: 'bdd', reporter: 'dot'}));
});

// LOCAL DEV
//Webpack just for reference
gulp.task('bundle-webpack', function() {
    return gulp.src(['src/**/*.ts', '!src/**/*.spec.ts'])
        .pipe(ts({
            noImplicitAny: true
        }))
        .pipe(webpack( require('./webpack.config.js')))
        .pipe(gulp.dest('server'));
});

gulp.task('bundle', function() {
    var tsConfig = ts.createProject("tsconfig-browser.json");

    return gulp.src(['src/**/*.ts', '!src/**/*.spec.ts'])
        .pipe(ts(tsConfig, {
            noImplicitAny: true
        }))
        .pipe(gulp.dest('server/scripts'));
});

// NOTE: Wrap browserSync.reload in an anon func for it to
//       not stop after the first trigger
gulp.task('js-watch', ['bundle'], function() { browserSync.reload() });

gulp.task('sync', ['bundle'], function () {
    browserSync.init({
        server: {
            baseDir: "./server",
            routes: {
                "/server/scripts": "/scripts",
                "/bower_components": "bower_components"
            }
        }
    });

    gulp.watch(["./src/**/*.ts"], ["js-watch"]);
});