var gulp = require("gulp"),
    print = require('gulp-print'),
    src = require("vinyl-source-stream"),
    mocha = require("gulp-mocha"),
    ts = require("gulp-typescript"),
    browserSync = require('browser-sync').create();

gulp.task('build', function() {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true
        }))
        .pipe(gulp.dest('build'));
});

gulp.task("test", ["build"], function () {
    return gulp.src("build/**/*.spec.js")
        .pipe(mocha({ui: 'bdd', reporter: 'dot'}));
});

gulp.task("watch", function(){
    gulp.watch(["./src/**/*.ts"], ["build", "test"]);
});

// NOTE: Wrap browserSync.reload in an anon func for it to
//       not stop after the first trigger
gulp.task('js-watch', ['build'], function() { browserSync.reload() });

gulp.task('sync', ['build'], function () {
    browserSync.init({
        server: {
            baseDir: "./server",
            routes: {
                "/build": "build"
            }
        }
    });

    gulp.watch(["./src/**/*.ts"], ["js-watch"]);
});