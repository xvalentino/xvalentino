const removeSourceMapString = request => {
  const splitUrl = request.url.split('.');
  splitUrl.splice(-2, 1);
  return splitUrl.join('.');
};

const cleanStaleCache = (cache, event) => {
  cache.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames
        .filter(
          cacheName =>
            removeSourceMapString(event.request) ===
            removeSourceMapString(cacheName),
        )
        .map(cacheName => cache.delete(cacheName)),
    );
  });
};

const respondWithCache = (cache, event) =>
  cache.match(event.request).then(cacheResponse => {
    return cacheResponse;
  });

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open('xvalentino').then(cache => {
      return fetch(event.request)
        .then(response => {
          cache.put(event.request, response.clone());
          cleanStaleCache(cache, event);
          return response;
        })
        .catch(() => respondWithCache(cache, event));
    }),
  );
});
