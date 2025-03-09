const CACHE_NAME = 'sakhasampark-v1';
const urlsToCache = [
  '/SakhaSampark_v.1.0.1/',
  '/SakhaSampark_v.1.0.1/index.html',
  '/SakhaSampark_v.1.0.1/login.html',
  '/SakhaSampark_v.1.0.1/signup.html',
  '/SakhaSampark_v.1.0.1/styles/main.css',
  '/SakhaSampark_v.1.0.1/js/app.js',
  '/SakhaSampark_v.1.0.1/js/login.js',
  '/SakhaSampark_v.1.0.1/js/signup.js',
  '/SakhaSampark_v.1.0.1/js/modules/auth.js',
  '/SakhaSampark_v.1.0.1/js/modules/chat.js',
  '/SakhaSampark_v.1.0.1/js/modules/peer.js',
  '/SakhaSampark_v.1.0.1/js/modules/ui.js',
  '/SakhaSampark_v.1.0.1/js/modules/user.js',
  '/SakhaSampark_v.1.0.1/assets/icons/icon-72x72.png',
  '/SakhaSampark_v.1.0.1/assets/icons/icon-96x96.png',
  '/SakhaSampark_v.1.0.1/assets/icons/icon-128x128.png',
  '/SakhaSampark_v.1.0.1/assets/icons/icon-144x144.png',
  '/SakhaSampark_v.1.0.1/assets/icons/icon-152x152.png',
  '/SakhaSampark_v.1.0.1/assets/icons/icon-192x192.png',
  '/SakhaSampark_v.1.0.1/assets/icons/icon-384x384.png',
  '/SakhaSampark_v.1.0.1/assets/icons/icon-512x512.png',
  '/SakhaSampark_v.1.0.1/assets/background.jpg'
];

// Install service worker and cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          response => {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
      .catch(() => {
        // If both cache and network fail, show a generic fallback:
        return caches.match('/SakhaSampark_v.1.0.1/login.html');
      })
    );
});

// Clean up old caches when a new service worker takes over
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});