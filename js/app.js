

if ('serviceWorker' in navigator) {
	//console.log('serviceWorker is supported!');
	navigator.serviceWorker.register('sw.js').then(function(registration){
		//console.log('sw registed');
		//registration.update();
	}, function(status){
		console.log('Failed to register:', status);
	});
} else {
	console.log('serviceWorker is not supported by your browser!');
}