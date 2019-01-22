# Webonfire JS

Would you like to make your **web application** installable?

**Webonfire JS** is a framework of service worker developed in application management context in which will allow you to *install*, *update* and *uninstall* web application in the browser.


## Installation

1. First create a script in the root of your project **sw.js**

2. In your own **JavaScript** file, initialize service worker:

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

Inside of your **sw.js** file:
``` Javascript
  wof = new Webonfire({
    appname : "myappname",
    version : "1.1.2",
    mode : "offline-first",
  });
  
  wof.install(["./css/styles.css", "./js/app.js", "./index.html"]);
```
if you would like to make your application first try online requestes then cached files (if the online requestes fail)

``` Javascript
  wof = new Webonfire({
    appname : "myappname",
    version : "1.1.2",
    mode : "online-first",
  });
  
  wof.install(["./css/styles.css", "./js/app.js", "./index.html"]);
```

##### Uninstalling application

``` Javascript
  Webonfire.uninstall("zenbox");
```

##### Other functions


``` Javascript
  wof = new Webonfire({
    appname : "myappname",
    version : "1.1.2",
    mode : "online-first",
  });
  
  // Installs the web application on the browser
  wof.install(["./css/styles.css", "./js/app.js", "./index.html"]);
  
  // Returns the Application name and the version
  wof.app();
  
  // Returns the Application version
  wof.getVersion();
  
  // Returns the Application name
  wof.getAppname();
  
  // Looks for the installed application and returns the application version
  Webonfire.getVersion("myappname").then(function(version){
    console.log(version);
  });
  
```

##### Configuration

Parameters | Description
------------ | -------------
**appname** | Set the application name
**version** | Set the application version
**mode** | Set the application requests priority: *online-first* or *offline-first*
**cacheAllRequests** | Values: *true* or *false*, if true it will cache all requests sent by the browser
**debug** | Values: *true* or *false*

