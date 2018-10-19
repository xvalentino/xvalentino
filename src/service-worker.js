self.addEventListener('install', function(e) {});

const getRequestHash = request => {
  console.log('request', request);
  const splitUrl = request.url.split('.');
  splitUrl.splice(-2, 1);
  return splitUrl.join('.');
};

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('mysite-dynamic').then(function(cache) {
      return cache.match(event.request).then(function(response) {
        return (
          response ||
          fetch(event.request).then(function(response) {
            cache.put(event.request, response.clone());
            cache.keys().then(function(cacheNames) {
              return Promise.all(
                cacheNames
                  .filter(function(cacheName) {
                    getRequestHash(event.request) === getRequestHash(cacheName);
                  })
                  .map(function(cacheName) {
                    return caches.delete(cacheName);
                  }),
              );
            });
            return response;
          })
        );
      });
    }),
  );
});
