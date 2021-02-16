# Gulp with SCSS Starter Kit

Gulp with SCSS Starter Kit - A repo which makes your development easier with predefined gulp tasks that help you to use with simple npm commands 

## Usage

1. Install Dev Depedencies
```sh
npm install
```
2. To start development and server for live preview
```sh
gulp watch
```
3. To generate minifed files for production server
```sh
gulp build 
```

# Configuration


To change the path of files and destination/build folder, edit options in **config.js** file
```sh
{
  config: {
		port: 9050
	},
	paths: {
		root: "./",
		src: {
			base: "assets/src/",
			scss: "assets/src/styles/**/*.scss",
			scripts: "assets/src/scripts",
			img: "assets/src/images/"
		},
		dist: {
			base: "assets/dist/",
			css: "assets/dist/styles/",
			scripts: "assets/dist/scripts/",
			img: "assets/dist/images/"
		},
		build: {
			base: "assets/build",
			css: "assets/build/styles/",
			scripts: "assets/build/scripts/",
			img: "assets/build/images/"
		}
	}
}
```
