import gulp from 'gulp';
import uglify from 'gulp-uglify';
import gulpTs from 'gulp-typescript';
import del from 'del';

const tsProject = gulpTs.createProject('tsconfig.json');
const outputFolder = 'dist';

gulp.task('clean', () => del([outputFolder]));

gulp.task('compile', () => gulp
  .src('src/**/*.ts')
  .pipe(tsProject())
  .js.pipe(uglify())
  .pipe(gulp.dest(outputFolder)));

gulp.task('copyContent', () => gulp
  .src('src/')
  .pipe(gulp.dest(outputFolder)));

gulp.task('default', gulp.series('clean', 'compile', 'copyContent'));
