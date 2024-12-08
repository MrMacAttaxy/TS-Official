importScripts('/os/browser/uv/uv.bundle.js');
importScripts('/os/browser/uv/uv.config.js');
importScripts('/os/browser/uv/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
