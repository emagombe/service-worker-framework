function Webonfire (conf = {
	appname : "app",
	version : "1.0.0",
	debug : true
}) {
	var root = this;

	this.getAppname = function(){
		return conf.appname;
	};
	this.getVersion = function(){
		return conf.version;
	};
	this.app = function(){
		return conf.appname + '__v' + conf.version;
	};
	this.instalationStatus = function(){
		
	};
	this.install = function(resources){
		self.addEventListener("install", function(event){
			if(conf.debug){
				console.log('installing', root.app() + "...");
			}
			if(typeof resources != "undefined"){
				if(typeof resources == "object" && resources != null){
					event.waitUntil(
						caches.open(root.app()).then(function(this_cache){
							return this_cache.addAll(resources);
						}, function(ex){
							if (conf.debug) {
								console.error('Failed to cache files: ', ex);
							}
						})
					);
				}
			}
		});
		self.addEventListener("fetch", function(event){
			event.respondWith(
				caches.match(event.request).then(function(response){
					return response || fetch(event.request);
				}).catch(function(ex){
					if(conf.debug){
						console.log('Failed to fetch installed files: ', ex);
					}
				})
			);
		});
	};
}

function splitApp(app, index = "appname"){
	details = app.split("__");
	if(index == "appname"){
		return details[0];
	}
	if(index == "version"){
		return details[1];
	}
}

Webonfire.getVersion = function(appname){
	return caches.keys().then(function(cacheNames){
		for (var i = cacheNames.length - 1; i >= 0; i--) {
			if(appname === splitApp(cacheNames[i], "appname")){
				return splitApp(cacheNames[i], "version");
			}
		}
	});
};

Webonfire.uninstall = function(appname){
	caches.keys().then(function(cacheNames){
		for (var i = cacheNames.length - 1; i >= 0; i--) {
			if (appname === splitApp(cacheNames[i]), "name") { return cacheNames[i]; }
		}
		return "none";
	}).then(function(name){
		if (name == "none") { if(conf.debug){ console.log("Application not found"); } } 
		else 
		{
			return caches.delete(name);
		}
	});
};