# Gulp with SCSS Starter Kit

## Usage

1. Install Dev Depedencies
```sh
node > 14
```
2. Install Dev Depedencies
```sh
npm install // or yarn install
```
3. To start development and server for live preview
```sh
npm run dev // or yarn dev
```
4. To generate minifed files for production server
```sh
npm run prod // or yarn prod
```

# Configuration

To change the path of files and destination/build folder, edit options in **config.js** file
```sh
{
  config: {
      ...
      port: 9050 // browser preview port
  },
  	paths: {
		root: "./",
		src: {
			base: "./src",
			scss: "./src/scss",
			js: "./src/js",
			img: "./src/images",
			fonts: "./src/fonts"
		},
		dist: {
			base: "./dist",
			css: "./dist/css",
			js: "./dist/js",
			img: "./dist/images",
			fonts: "./dist/fonts"
		},
		build: {
			base: "./build",
			css: "./build/dist/css",
			js: "./build/dist/js",
			img: "./build/dist/images",
			fonts: "./build/dist/fonts"
		}
	}
  ...
}
```
