module.exports = function(config){
  config.set({

    basePath : '../',

    port : 8000,

    files : [
      'dist/js/libs.min.js',
      'dist/js/app.min.js',
      'tests/unit/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome', 'Firefox'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
