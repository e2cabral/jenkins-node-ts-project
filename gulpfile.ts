import gulp from 'gulp';
import gulpConcat from 'gulp-concat';
import uglify from 'gulp-uglify';
import gulpTs from 'gulp-typescript';
import del from 'del';

const tsProject = gulpTs.createProject('tsconfig.json');
const outputFolder = 'dist';

gulp.task('clean', () => {
  return del([outputFolder]);
});

gulp.task('compile', () => {
  return gulp
    .src('src/**/*.ts')
    .pipe(tsProject())
    .js.pipe(uglify())
    .pipe(gulp.dest(outputFolder));
});

gulp.task('copyContent', () => {
  return gulp
    .src('src/')
    .pipe(gulp.dest(outputFolder));
});

gulp.task('default', gulp.series('clean', 'compile', 'copyContent'));
