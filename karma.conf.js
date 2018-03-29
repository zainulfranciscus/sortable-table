var unitTestReportOutputDir = 'unit-test-report';

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        reporters: ['progress', 'html'],
        port: 9876,
        colors: false,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        autoWatchBatchDelay: 300,
        exclude: ['./test/data/*.js'],
        files: [
            './test/**/*.js', 'http://code.jquery.com/jquery-3.1.1.min.js'],

        preprocessors: {
            './test/**/*.js': ['babel', 'webpack']
        },
        webpack: require('./webpack.config.js'),

        webpackMiddleware: {
            noInfo: true
        },
        htmlReporter: {
            outputDir: unitTestReportOutputDir, // where to put the reports
            focusOnFailures: true, // reports show failures on start
            namedFiles: true, // name files instead of creating sub-directories
            pageTitle: 'Unit Test Report', // page title for reports; browser info by default
            urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
            reportName: 'test-summary', // report summary filename; browser info by default
            // experimental
            preserveDescribeNesting: false, // folded suites stay folded
            foldAll: false, // reports start folded (only with preserveDescribeNesting)
        }
    });
}