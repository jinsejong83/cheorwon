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

 self.addEventListener("message", (event) => {
  event.waitUntil(
    new Promise((resolve, reject) => {
       fetch("https://api.example.com/data")
        .then((response) => response.json())
        .then((data) => {
          event.source.postMessage(data);  
          resolve();
        })
        .catch((error) => {
          console.error("오류 발생:", error);
          reject(error);
        });
    })
  );
});
