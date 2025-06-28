// PWA utility functions
export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export class PWAManager {
  private deferredPrompt: BeforeInstallPromptEvent | null = null;
  private isInstalled = false;
  private isStandalone = false;

  constructor() {
    this.init();
  }

  private init() {
    // Check if app is running in standalone mode
    this.isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                       (window.navigator as any).standalone === true;

    // Listen for beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e as BeforeInstallPromptEvent;
      this.showInstallButton();
    });

    // Listen for app installed event
    window.addEventListener('appinstalled', () => {
      this.isInstalled = true;
      this.hideInstallButton();
      this.showInstalledMessage();
    });

    // Register service worker
    this.registerServiceWorker();

    // Request notification permission
    this.requestNotificationPermission();
  }

  private async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('SW registered: ', registration);
        
        // Listen for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                this.showUpdateAvailable();
              }
            });
          }
        });
      } catch (registrationError) {
        console.log('SW registration failed: ', registrationError);
      }
    }
  }

  private async requestNotificationPermission() {
    if ('Notification' in window && 'serviceWorker' in navigator) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('Notification permission granted');
        // Subscribe to push notifications
        this.subscribeToPushNotifications();
      }
    }
  }

  private async subscribeToPushNotifications() {
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: this.urlBase64ToUint8Array('YOUR_VAPID_PUBLIC_KEY_HERE') // Replace with actual VAPID key
      });
      
      // Send subscription to server
      await this.sendSubscriptionToServer(subscription);
    } catch (error) {
      console.error('Failed to subscribe to push notifications:', error);
    }
  }

  private urlBase64ToUint8Array(base64String: string): Uint8Array {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  private async sendSubscriptionToServer(subscription: PushSubscription) {
    // This would send the subscription to your backend server
    console.log('Push subscription:', subscription);
  }

  public async installApp() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      const { outcome } = await this.deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      
      this.deferredPrompt = null;
    }
  }

  public canInstall(): boolean {
    return !!this.deferredPrompt && !this.isInstalled && !this.isStandalone;
  }

  public isAppInstalled(): boolean {
    return this.isInstalled || this.isStandalone;
  }

  private showInstallButton() {
    const event = new CustomEvent('pwa-install-available');
    window.dispatchEvent(event);
  }

  private hideInstallButton() {
    const event = new CustomEvent('pwa-install-hide');
    window.dispatchEvent(event);
  }

  private showInstalledMessage() {
    const event = new CustomEvent('pwa-installed');
    window.dispatchEvent(event);
  }

  private showUpdateAvailable() {
    const event = new CustomEvent('pwa-update-available');
    window.dispatchEvent(event);
  }

  public async sendNotification(title: string, options: NotificationOptions = {}) {
    if ('serviceWorker' in navigator && 'Notification' in window) {
      const registration = await navigator.serviceWorker.ready;
      
      registration.showNotification(title, {
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-72x72.png',
        ...options
      });
    }
  }

  public async shareContent(data: ShareData) {
    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch (error) {
        console.log('Error sharing:', error);
        // Fallback to copy to clipboard
        if (navigator.clipboard && data.url) {
          await navigator.clipboard.writeText(data.url);
        }
      }
    }
  }

  public isOnline(): boolean {
    return navigator.onLine;
  }

  public addNetworkListener(callback: (isOnline: boolean) => void) {
    const updateOnlineStatus = () => callback(navigator.onLine);
    
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    // Return cleanup function
    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }
}

export const pwaManager = new PWAManager();

// Enhanced offline storage and sync capabilities
export class OfflineManager {
  private dbName = 'RailwayAppDB';
  private dbVersion = 1;
  private db: IDBDatabase | null = null;

  async init() {
    return new Promise<void>((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };
      
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        
        // Create stores for offline data
        if (!db.objectStoreNames.contains('pendingActions')) {
          const actionStore = db.createObjectStore('pendingActions', { keyPath: 'id' });
          actionStore.createIndex('type', 'type', { unique: false });
        }
        
        if (!db.objectStoreNames.contains('offlineData')) {
          const dataStore = db.createObjectStore('offlineData', { keyPath: 'key' });
          dataStore.createIndex('timestamp', 'timestamp', { unique: false });
        }
        
        if (!db.objectStoreNames.contains('userPreferences')) {
          db.createObjectStore('userPreferences', { keyPath: 'key' });
        }
      };
    });
  }

  async addPendingAction(action: any) {
    if (!this.db) await this.init();
    
    const transaction = this.db!.transaction(['pendingActions'], 'readwrite');
    const store = transaction.objectStore('pendingActions');
    
    const actionWithId = {
      ...action,
      id: Date.now().toString(),
      timestamp: new Date().toISOString()
    };
    
    await store.add(actionWithId);
    
    // Register background sync if supported
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.ready;
        if ('sync' in registration) {
          await (registration as any).sync.register('background-sync');
        }
      } catch (error) {
        console.log('Background sync not supported:', error);
      }
    }
  }

  async storeOfflineData(key: string, data: any) {
    if (!this.db) await this.init();
    
    const transaction = this.db!.transaction(['offlineData'], 'readwrite');
    const store = transaction.objectStore('offlineData');
    
    await store.put({
      key,
      data,
      timestamp: new Date().toISOString()
    });
  }

  async getOfflineData(key: string) {
    if (!this.db) await this.init();
    
    const transaction = this.db!.transaction(['offlineData'], 'readonly');
    const store = transaction.objectStore('offlineData');
    
    return new Promise((resolve, reject) => {
      const request = store.get(key);
      request.onsuccess = () => resolve(request.result?.data);
      request.onerror = () => reject(request.error);
    });
  }

  async saveUserPreference(key: string, value: any) {
    if (!this.db) await this.init();
    
    const transaction = this.db!.transaction(['userPreferences'], 'readwrite');
    const store = transaction.objectStore('userPreferences');
    
    await store.put({ key, value });
  }

  async getUserPreference(key: string) {
    if (!this.db) await this.init();
    
    const transaction = this.db!.transaction(['userPreferences'], 'readonly');
    const store = transaction.objectStore('userPreferences');
    
    return new Promise((resolve, reject) => {
      const request = store.get(key);
      request.onsuccess = () => resolve(request.result?.value);
      request.onerror = () => reject(request.error);
    });
  }
}

// Enhanced PWA Manager with better features
export class EnhancedPWAManager extends PWAManager {
  private offlineManager = new OfflineManager();
  private updateCheckInterval: number | null = null;

  constructor() {
    super();
    this.initEnhanced();
  }

  private async initEnhanced() {
    await this.offlineManager.init();
    this.setupPeriodicUpdateCheck();
    this.setupAdvancedNotifications();
  }

  private setupPeriodicUpdateCheck() {
    // Check for updates every 30 minutes
    this.updateCheckInterval = setInterval(async () => {
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          registration.update();
        }
      }
    }, 30 * 60 * 1000);
  }

  private async setupAdvancedNotifications() {
    // Setup periodic background sync for notifications
    if ('serviceWorker' in navigator && 'periodicSync' in window) {
      try {
        const registration = await navigator.serviceWorker.ready;
        await (registration as any).periodicSync.register('train-updates', {
          minInterval: 15 * 60 * 1000 // 15 minutes
        });
      } catch (error) {
        console.log('Periodic background sync not supported:', error);
      }
    }
  }

  async scheduleOfflineAction(type: string, data: any) {
    await this.offlineManager.addPendingAction({ type, data });
    
    if (!navigator.onLine) {
      await this.sendNotification('Action Scheduled', {
        body: 'Your action will be processed when you\'re back online',
        tag: 'offline-action'
      });
    }
  }

  private convertVapidKey(base64String: string): Uint8Array {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  async enableAdvancedNotifications() {
    if ('Notification' in window && 'serviceWorker' in navigator) {
      const permission = await Notification.requestPermission();
      
      if (permission === 'granted') {
        // Request permission for persistent notifications
        const registration = await navigator.serviceWorker.ready;
        
        // Setup push subscription with enhanced features
        try {
          const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: this.convertVapidKey('BEl62iUYgUivxIkv69yViEuiBIa40HI8ThvdJm-7dO4xkWF7MDe9-kCqWCZu_LvZOJT9vL8X8YGOuThrfLt-k8U')
          });
          
          await this.offlineManager.storeOfflineData('pushSubscription', subscription);
          return true;
        } catch (error) {
          console.error('Failed to subscribe to push notifications:', error);
          return false;
        }
      }
    }
    return false;
  }

  async checkTrainUpdates(trainNumber: string) {
    try {
      const response = await fetch(`/api/trains/${trainNumber}/status`);
      const data = await response.json();
      
      // Store for offline access
      await this.offlineManager.storeOfflineData(`train_${trainNumber}`, data);
      
      return data;
    } catch (error) {
      // Return cached data if offline
      const cachedData = await this.offlineManager.getOfflineData(`train_${trainNumber}`);
      if (cachedData) {
        return cachedData;
      }
      throw error;
    }
  }

  async saveJourneyPreferences(preferences: any) {
    await this.offlineManager.saveUserPreference('journeyPreferences', preferences);
  }

  async getJourneyPreferences() {
    return await this.offlineManager.getUserPreference('journeyPreferences');
  }

  async installWithPrompt() {
    await this.installApp();
    
    await this.sendNotification('App Installed!', {
      body: 'Railway Hub is now installed. Access it anytime from your home screen.',
      tag: 'app-installed'
    });
  }

  destroy() {
    if (this.updateCheckInterval) {
      clearInterval(this.updateCheckInterval);
    }
  }
}

export const enhancedPWAManager = new EnhancedPWAManager();

// PWA enhancement notification
window.addEventListener('DOMContentLoaded', () => {
  // Show PWA capabilities notification after a short delay
  setTimeout(() => {
    if ('serviceWorker' in navigator) {
      enhancedPWAManager.sendNotification('Railway Hub Enhanced!', {
        body: 'Your Railway Hub now has advanced PWA capabilities. Click the smartphone icon in the header to explore.',
        tag: 'pwa-enhanced',
        icon: '/icons/icon-192x192.png',
        requireInteraction: true
      });
    }
  }, 3000);
});
