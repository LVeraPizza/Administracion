self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/dashboard.html',
          '/principal.html',
          '/splash.js',
          '/service-worker.js',
          '/img/logo_vp.png',
          '/img/LOGO_INSTALACION.png',
  
          // Agrega otros archivos que necesites en el caché
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  });