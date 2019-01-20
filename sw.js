importScripts('./js/webonfire.js');


wof = new Webonfire({
	appname : "zenbox",
	version : "1.1.2",
	debug : true
});

// Install application
wof.install(["./css/styles.css", "./js/app.js", "./index.html"]);

// Webonfire.getVersion("zenbox").then(function(version){
// 	//console.log(version);
// });

// Uninstall application
//Webonfire.uninstall("zenbox");

// Print the Application name and version
// console.log(wof.app());

