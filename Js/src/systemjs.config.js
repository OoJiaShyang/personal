System.config({
  paths: {
    // paths serve as alias
    'npm:': 'node_modules/'
  },
  map: {
    app: 'app',
    '@angular/core'   : 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common' : 'npm:@angular/common/bundles/common.umd.js',
    'ng2-go-top-button': 'npm:ng2-go-top-button',
    '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
    '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
    '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
    'ng2-page-scroll': 'npm:ng2-page-scroll/bundles/ng2-page-scroll.umd.js',
    rxjs: 'npm:rxjs',
  },
  packages: {
    app : {defaultExtension: 'js', main: './main.js'},
    rxjs: {defaultExtension: 'js'},
    'ng2-go-top-button': {
       defaultExtension: 'js',
       main: './index.js'
    }
  }
})