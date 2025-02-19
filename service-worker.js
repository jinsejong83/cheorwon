self.addEventListener("install", (event) => {
  console.log("📲 Service Worker 설치 완료!");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("✅ Service Worker 활성화됨!");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
