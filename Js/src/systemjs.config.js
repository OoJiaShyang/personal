System.config({
  paths: {
    // paths serve as alias
    'npm:': 'node_modules/'
  },
  map: {
    'ng2-go-top-button': 'npm:ng2-go-top-button',
    '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
    '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
    '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
  },
  packages: {
    'ng2-go-top-button': {
       defaultExtension: 'js',
       main: './index.js'
    }
  }
})