let cacheData = 'appv1';
this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/react-tester/static/js/bundle.js',
                '/index.html',
                '/react-tester',
                '/favicon.ico',
                '/react-tester/manifest.json',
                '/',
            ])
        })
    )
})

this.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((resp) => {
            if (resp) {
                return resp;
            }
        })
    )
})