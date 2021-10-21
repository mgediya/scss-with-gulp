# Gulp with SCSS Starter Kit

## Usage

1. Install Dev Depedencies
```sh
node v14 and upper
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
		root: ".",
		src: {
			base: "./assets/src",
			scss: "./assets/src/scss",
			js: "./assets/src/js",
			img: "./assets/src/images",
			fonts: "./assets/src/fonts",
		},
		dest: {
			base: "./assets/dest",
			css: "./assets/dest/css",
			js: "./assets/dest/js",
			img: "./assets/dest/images",
			fonts: "./assets/dest/fonts",
		}
	}
  ...
}
```
