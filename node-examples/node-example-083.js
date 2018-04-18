const gulp =require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('dev-mode', () => {
    nodemon({script: './app/index.js'})
});

gulp.task('default', ['dev-mode']);

