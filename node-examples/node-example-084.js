const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('eslint', () => {
    return gulp.src(['app/**/*.js', 'tests/**/*.s'])
        .pipe(eslint('eslint.config.json'))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['eslint']);
