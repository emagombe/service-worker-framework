

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js').then(function(registration){
		console.log('Service worker registed!!!');
	}, function(status){
		console.log('Failed to register:', status);
	});
} else {
	console.log('serviceWorker is not supported by your browser!');
}