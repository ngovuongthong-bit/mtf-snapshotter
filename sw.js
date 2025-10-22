self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('mtf-shell-v1').then(cache => cache.addAll(['./index.html','./manifest.webmanifest']))
  );
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  // Pass-through network for APIs; cache-first for same-origin shell
  if(url.origin === location.origin){
    e.respondWith(
      caches.match(e.request).then(resp => resp || fetch(e.request))
    );
  }
});
