const CACHE_NAME = 'sw-cache-sicovid19';
const toCache = [
  '/',
  '/home',
  '/login',
  '/signin',
  '/forum',
  '/assets/icons/covid19-virus-1.svg',
  '/assets/icons/messageIcon.svg',
  '/assets/images/My-answer-cuate-1.png',
  '/assets/images/forum 1.svg',
  '/assets/images/72 - Edit.svg',
  '/assets/images/conversation 1.svg',
  '/assets/images/user (1) 1.svg',
  '/assets/icons/virus-lab-research-magnifier-2.svg',
  '/assets/images/hero_image.png',
  '/assets/icons/vaccine-protection-shield.svg',
  '/assets/images/maskman.png',
  '/assets/images/washinghand.png',
  '/assets/images/market.png',
  '/assets/images/coughing.jpg',
  '/assets/icons/Date_range_duotone_line.svg',
  '/assets/icons/Computer login-pana.svg',
  '/assets/icons/Fill out-pana (1).svg',
  '/assets/icons/android-icon-36x36.png',
  '/assets/icons/android-icon-48x48.png',
  '/assets/icons/android-icon-96x96.png',
  '/assets/icons/android-icon-144x144.png',
  '/assets/icons/android-icon-192x192.png',
  '/assets/icons/android-icon-384x384.png',
  '/assets/icons/android-icon-512x512.png',
  '/css/custom.css',
  '/css/responsive.css',
  '/css/signinLogin.css',
  '/scripts/data/sourceAPI.js',
  '/scripts/template/template.js',
  '/bootstrap.css',
  '/jquery.js',
  '/scripts/ajax.js',
  '/scripts/endpointAPI.js',
  '/bootstrap.bundle.min.js',
  '/js/pwa.js',
  '/manifest.json',
  '/favicon.png',
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(toCache);
      })
      .then(self.skipWaiting())
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request);
      });
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches
      .keys()
      .then((keyList) => {
        return Promise.all(
          keyList.map((key) => {
            if (key !== CACHE_NAME) {
              console.log('[ServiceWorker] Removing old cache', key);
              return caches.delete(key);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});
