const removeSourceMapString = request => {
  const splitUrl = request.url.split('.');
  splitUrl.splice(-2, 1);
  return splitUrl.join('.');
};

const cleanStaleCache = event => {
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

const updateCache = (event, response) =>
  cache.put(event.request, response.clone());

const respondWithCache = () =>
  caches.open('xvalentino').then(cache => {
    cache.match(event.request).then(cacheResponse => cacheResponse);
  });

self.addEventListener('fetch', function(event) {
  event.respondWith(
    Promise.all(() => {
      fetch(event.request)
        .then(response => {
          updateCache(event, response);
          cleanStaleCache(event);
          console.log('response', response);
          return response;
        })
        .catch(respondWithCache);
    }),
  );
});
