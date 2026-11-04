/* Service worker de "Notas de entrega e inventario".
   - Archivos del sitio: primero la red (para ver siempre la versión nueva) y, sin conexión, la copia guardada.
   - Librerías y fuentes externas: se guardan la primera vez y se reutilizan.
   - GitHub (api.github.com) y todo lo que no sea GET: nunca se guarda, siempre va a la red.
   Al cambiar archivos del sitio no hace falta tocar este archivo; cambia VERSION solo si quieres borrar las copias viejas. */
const VERSION = 'v2';
const CACHE = 'notas-' + VERSION;
const BASICOS = ['./', './index.html', './styles.css', './logo.png', './favicon.png', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(BASICOS.map(u => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('notas-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname === 'api.github.com') return;

  if (url.origin === self.location.origin) {
    // Primero la red; si no hay conexión, la copia guardada.
    e.respondWith(
      fetch(req).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => caches.match(req).then(r => r || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())))
    );
    return;
  }

  if (['cdnjs.cloudflare.com', 'fonts.googleapis.com', 'fonts.gstatic.com'].includes(url.hostname)) {
    // Librerías y fuentes: la copia guardada si existe; si no, la red.
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      }))
    );
  }
});
