# Webonfire JS

Would you like to make your **web application** installable?

**Webonfire JS** is an framework of service worker developed in the application management context in which will allow you to *install*, *update* and *uninstall* web application in the browser.


## Installation

1. First create a script in the root of your project **sw.js**

2. On your own **JavaScript** file, initialize service worker:

``` Javascript
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(function(registration){
      console.log('Service worker registed!!!');
    });
  } else {
    console.log('serviceWorker is not supported by your browser!');
  }
```

3. Inside of the **sw.js** file import the **Webonfire** script:


``` Javascript

  // Importing webonfire script
  importScripts('https://cdn.jsdelivr.net/gh/emagombe/webonfire/js/webonfire.min.js');

```

## Usage

##### Installing your web application

Inside of you **sw.js** file:
``` Javascript
  wof = new Webonfire({
    appname : "myappname",
    version : "1.1.2",
    mode : "offline-first",
  });
  
  wof..install(["./css/styles.css", "./js/app.js", "./index.html"]);
```
