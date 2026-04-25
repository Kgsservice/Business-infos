// BizPro Service Worker v3 - clears old cache
const V = 'bizpro-v3';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  // ลบ cache เก่าทั้งหมด
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// ไม่ cache อะไรเลย - ดึงจาก network ตลอด
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
