// Karma configuration
// Generated on Sat Nov 11 2017 11:34:30 GMT+1100 (AEDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'app/angular/angular.min.js',
      'app/angular/angular-mocks.js',
      'app/angular/angular-resource.min.js',
      /*'css/js/jquery-3.0.0.min.js',
      'css/js/bootstrap.min.js',
      'css/js/ui-bootstrap-tpls-2.5.0.min.js',
      'app/angular/angular-route.min.js',
      'app/angular/angular-animate.js',
      'app/angular/angular-sanitize.js',*/
      //'app/service.js',
      //'/app/config/sharedData.js',
      
      
      //'app/angular/*.js',
      'app/*.js',
      'app/config/*.js',
      'app/controllers/*.js',
      'app/meal/*.js',
      'app/plan/*.js',
      'test/spec/constantsSpec.js',
      'test/spec/sharedDataSpec.js',
      'test/spec/dataServiceSpec.js',
      'test/spec/typeServiceSpec.js',
      'test/spec/autoFillControllerSpec.js',
      'test/spec/addMealControllerSpec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['Chrome'],
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
