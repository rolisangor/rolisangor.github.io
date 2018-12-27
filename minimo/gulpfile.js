"use strict";

const gulp         = require('gulp');
const	sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS     = require('gulp-clean-css');
const uglify       = require('gulp-uglify');
const babel        = require('gulp-babel');
const del          = require('del');
const browserSync  = require('browser-sync').create();
const tinypng      = require('gulp-tinypng');
const imagemin     = require('imagemin');
const imageminJpeg = require('imagemin-jpeg-recompress');
const gcmq         = require('gulp-group-css-media-queries');
const sourcemaps   = require('gulp-sourcemaps');
const smartgrid    = require('smart-grid');


/* It's principal settings in smart grid project */
let settings = {
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1061px', /* max-width оn very large screen */
        fields: '0' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px',
            // fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '560px'
        }
        /* 
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};
smartgrid('./app/src/scss', settings);




let imageminJpg = () => {
	return imagemin(['./app/src/img/**/*.jpg'], './app/dist/img', {
    plugins: [
        imageminJpeg()
    	]
		}).then(() => {
    console.log('Images optimized');
	});
};




let imagePng = () => {
	return gulp.src('./app/src/img/**/*.png')
	.pipe(tinypng('p1r33mBW2mP27J9ROxCusKxGCTtO1ecL'))
	.pipe(gulp.dest('./app/dist/img'));
};



let imageBuild = () => {
	return gulp.src('./app/src/img/**/*.{svg,gif,jpeg,ico}')
	 					.pipe(gulp.dest('./app/dist/img'));

};



let style = () => {
	return gulp.src('./app/src/scss/main.scss')
						.pipe(sass())
						.pipe(autoprefixer({
	            browsers: ['last 2 version'],
	            cascade: false
	        		}))
						.pipe(gulp.dest('./app/src/css'))
						.pipe(browserSync.stream());
};




let styleBuild = () => {
	return gulp.src('./app/src/css/*.css')
					  .pipe(sourcemaps.init())
						.pipe(gcmq())
						.pipe(cleanCSS({
							level: 2
						}))
					  .pipe(sourcemaps.write())	
						.pipe(gulp.dest('./app/dist/css'));
};




let scriptBuild = () => {
	return gulp.src('./app/src/**/*.js')
						.pipe(sourcemaps.init())
				    .pipe(babel({
				      presets: ['env']
				    }))
				    .pipe(uglify())
				    .pipe(sourcemaps.write())
				    .pipe(gulp.dest('./app/dist'));
};




let fontsBuild = () => {
	return gulp.src('./app/src/fonts/**/*.*')
						.pipe(gulp.dest('./app/dist/fonts'));
};




let pluginBuild = () => {
	return gulp.src('./app/src/lib/**/*.*')
						.pipe(gulp.dest('./app/dist/lib'));
};




let fileApp = () => {
	return gulp.src('./app/src/*.*')
						.pipe(gulp.dest('./app/dist'));
};




let watch = () => {
	 browserSync.init({
        server: {
            baseDir: "./app/src"
        },
        tunnel: true
    });
	gulp.watch('./app/src/scss/**/*.scss', style);
	gulp.watch('./app/src/js/**/*.js').on('change', browserSync.reload);
	gulp.watch("./app/src/*.html").on('change', browserSync.reload);
};




let clean = () => {
	return del(['./app/dist/*']);		 
};

let cleanTinyPng = () => {
	return del(['.gulp']);
};





gulp.task('build', gulp.series(clean, imagePng, scriptBuild, styleBuild, fontsBuild, pluginBuild, fileApp, imageminJpg, imageBuild, cleanTinyPng));

gulp.task('default', gulp.series(style, watch));