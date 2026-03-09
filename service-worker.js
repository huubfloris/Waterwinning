
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('waterwinning-cache').then(cache => cache.addAll([
      '/',
      '/Waterwinning/',
      '/Waterwinning/waterwinning_kaart.html',
      '/Waterwinning/manifest.json',
      '/Waterwinning/service-worker.js',
      '/Waterwinning/icons/icon-180.png',
      '/Waterwinning/icons/icon-192.png',
      '/Waterwinning/icons/icon-512.png'
    ]))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
