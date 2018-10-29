self.addEventListener('install', function(e) {});

const removeSourceMapString = request => {
  const splitUrl = request.url.split('.');
  splitUrl.splice(-2, 1);
  return splitUrl.join('.');
};

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('mysite-dynamic').then(function(cache) {
      return cache.match(event.request).then(function(cacheResponse) {
        return fetch(event.request)
          .then(function(response) {
            cache.put(event.request, response.clone());
            cache.keys().then(function(cacheNames) {
              return Promise.all(
                cacheNames
                  .filter(function(cacheName) {
                    removeSourceMapString(event.request) ===
                      removeSourceMapString(cacheName);
                  })
                  .map(function(cacheName) {
                    return cache.delete(cacheName);
                  }),
              );
            });
            return response;
          })
          .catch(() => cacheResponse);
      });
    }),
  );
});
