

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('SM map app').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
	   '/about/About.html',
	   '/about/g1.jpg',
	   '/about/g2.jpg',
	   '/about/style.css',
	   'styles/style_mobile.css',
	   '/appfx.js',
	   '/icon1.png',
	   '/icon2.png',
	   '/icon3.png',
	   '/manifest.json'
     ]);
   })
 );
 
});

 self.addEventListener('fetch', function(event) {
	console.log(event.request.url);
	  event.respondWith(
		caches.match(event.request).then(function(response) {
		  return response || fetch(event.request);
		})
  );
 })