self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('assets').then(cache => 
        {
          return cache.addAll([
            'index.html',
            'icons-512.png',
            'icons-192.png',
            'favicon.ico',
            'manifest.json'
          ])
        })
    );
  });
  
  self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request).then(response => {
        return response || fetch(e.request);
      })
    );
  });
  