module.exports = {
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