var gulp = require("gulp"),
    print = require('gulp-print'),
    src = require("vinyl-source-stream"),
    mocha = require("gulp-mocha"),
    ts = require("gulp-typescript");

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