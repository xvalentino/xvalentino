import '/cache-polyfill.js';

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('mysite').then(function(cache) {
      return cache.addAll(['./', './index.html']);
    }),
  );
});
self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
});
