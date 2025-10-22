self.addEventListener('install', e=>{
  e.waitUntil(caches.open('omega-lite-plus-v1').then(c=>c.addAll([
    './omega-lite-plus.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'
  ])));
});
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
});
