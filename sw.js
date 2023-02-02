self.addEventListener("install", e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(['./', './src/main.css', './images/logo2.jpg'])
        })
    )
})

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request)
        })
    )
    
})