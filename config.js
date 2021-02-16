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
		dest: {
			base: "assets/dest/",
			css: "assets/dest/styles/",
			scripts: "assets/dest/scripts/",
			img: "assets/dest/images/"
		},
		build: {
			base: "assets/build",
			css: "assets/build/styles/",
			scripts: "assets/build/scripts/",
			img: "assets/build/images/"
		}
	}
}