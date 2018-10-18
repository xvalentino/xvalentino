self.addEventListener('install', function(e) {
  e.waitUntil(
    caches
      .open('mysite')
      .then(function(cache) {
        return cache.addAll(['.', './index.html', './images']);
      })
      .catch(),
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
      .catch(),
  );
});
