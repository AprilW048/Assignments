module.exports = function (grunt) {
  // Congifuration our tasks
  grunt.initConfig({
    // pkg: grunt.file.readJSON("package.json"),

    jshint: {
      files: ["test/main.js"],
      options: {
        reporter: require("jshint-html-reporter"),
        reporterOutput: "jshint-report.html",
      },
    },
    // watch: {
    //   files: ["src/main.js"],
    //   tasks: ["default"],
    // },
  });

  // Load the plugins
  grunt.loadNpmTasks("grunt-contrib-jshint");
  // grunt.loadNpmTasks("grunt-contrib-watch");

  //   register Tasks
  grunt.registerTask("default", ["jshint"]);
};
