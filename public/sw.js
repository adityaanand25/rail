const CACHE_NAME = 'railway-innovation-hub-v2';
const STATIC_CACHE = 'railway-static-v2';
const DYNAMIC_CACHE = 'railway-dynamic-v2';

const urlsToCache = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/index.css',
  '/src/components/Header.tsx',
  '/src/components/PassengerExperience.tsx',
  '/src/components/SmartPassengerExperience.tsx',
  '/src/components/SideChatbot.tsx',
  '/src/components/QuickActions.tsx',
  '/src/components/RealTimeTracking.tsx',
  '/src/components/EnergyMonitor.tsx',
  '/src/components/Sustainability.tsx',
  '/src/components/RailwayAIChatbot.tsx',
  '/src/components/PWAInstall.tsx',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Network-first strategy for API calls
const networkFirstPaths = [
  '/api/',
  'generativelanguage.googleapis.com'
];

// Cache-first strategy for static assets
const cacheFirstPaths = [
  '/icons/',
  '/images/',
  '.css',
  '.js',
  '.png',
  '.jpg',
  '.svg'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Enhanced fetch event with smart caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Network-first for API calls
  if (networkFirstPaths.some(path => request.url.includes(path))) {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Cache successful responses
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE)
              .then(cache => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // Fallback to cache
          return caches.match(request);
        })
    );
    return;
  }

  // Cache-first for static assets
  if (cacheFirstPaths.some(path => request.url.includes(path))) {
    event.respondWith(
      caches.match(request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(request)
            .then(response => {
              const responseClone = response.clone();
              caches.open(STATIC_CACHE)
                .then(cache => cache.put(request, responseClone));
              return response;
            });
        })
    );
    return;
  }

  // Stale-while-revalidate for everything else
  event.respondWith(
    caches.match(request)
      .then(response => {
        const fetchPromise = fetch(request)
          .then(networkResponse => {
            caches.open(DYNAMIC_CACHE)
              .then(cache => cache.put(request, networkResponse.clone()));
            return networkResponse;
          });
        
        return response || fetchPromise;
      })
  );
});

// Activate event - clean up old caches and take control
self.addEventListener('activate', (event) => {
  const currentCaches = [STATIC_CACHE, DYNAMIC_CACHE];
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (!currentCaches.includes(cacheName)) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Push notifications
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Railway notification',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      {
        action: 'explore',
        title: 'View Details',
        icon: '/icons/checkmark.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/xmark.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Indian Railways', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
  
  if (event.tag === 'train-status-sync') {
    event.waitUntil(syncTrainStatus());
  }
});

// Periodic background sync for train updates
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'train-updates') {
    event.waitUntil(updateTrainStatus());
  }
});

// Background sync functions
async function doBackgroundSync() {
  try {
    // Sync any pending actions stored in IndexedDB
    const pendingActions = await getPendingActions();
    
    for (const action of pendingActions) {
      try {
        await processAction(action);
        await removePendingAction(action.id);
      } catch (error) {
        console.error('Failed to process action:', error);
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

async function syncTrainStatus() {
  try {
    // Fetch latest train status and update cache
    const trainData = await fetch('/api/trains/status').then(r => r.json());
    
    // Update cache with latest data
    const cache = await caches.open(DYNAMIC_CACHE);
    await cache.put('/api/trains/status', new Response(JSON.stringify(trainData)));
    
    // Send notification if there are important updates
    const importantUpdates = trainData.filter(train => train.hasImportantUpdate);
    if (importantUpdates.length > 0) {
      await showTrainUpdateNotification(importantUpdates);
    }
  } catch (error) {
    console.error('Train status sync failed:', error);
  }
}

async function updateTrainStatus() {
  // Periodic sync for real-time updates
  await syncTrainStatus();
}

// IndexedDB helpers for background sync
async function getPendingActions() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('RailwayApp', 1);
    
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(['pendingActions'], 'readonly');
      const store = transaction.objectStore('pendingActions');
      const getAllRequest = store.getAll();
      
      getAllRequest.onsuccess = () => {
        resolve(getAllRequest.result);
      };
    };
    
    request.onerror = () => reject(request.error);
  });
}

async function processAction(action) {
  // Process different types of actions
  switch (action.type) {
    case 'book_ticket':
      return await fetch('/api/tickets/book', {
        method: 'POST',
        body: JSON.stringify(action.data)
      });
    case 'track_train':
      return await fetch(`/api/trains/track/${action.data.trainNumber}`);
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

async function removePendingAction(actionId) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('RailwayApp', 1);
    
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(['pendingActions'], 'readwrite');
      const store = transaction.objectStore('pendingActions');
      const deleteRequest = store.delete(actionId);
      
      deleteRequest.onsuccess = () => resolve();
    };
    
    request.onerror = () => reject(request.error);
  });
}

// Enhanced notification system
async function showTrainUpdateNotification(updates) {
  const options = {
    body: `${updates.length} train(s) have important updates`,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [200, 100, 200],
    tag: 'train-updates',
    requireInteraction: true,
    data: {
      updates: updates,
      url: '/?view=updates'
    },
    actions: [
      {
        action: 'view',
        title: 'View Updates',
        icon: '/icons/view.png'
      },
      {
        action: 'dismiss',
        title: 'Dismiss',
        icon: '/icons/dismiss.png'
      }
    ]
  };

  await self.registration.showNotification('Train Updates', options);
}
