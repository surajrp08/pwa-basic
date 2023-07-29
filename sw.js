self.addEventListener("install", event => {
    //Call only once
    event.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./style.css",
                "./images/android-icon-144x144.png",
                "./script.js"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

