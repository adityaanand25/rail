import React, { useState, useEffect } from 'react';
import { Download, X, WifiOff, RefreshCw, Bell, Smartphone, Zap } from 'lucide-react';
import { enhancedPWAManager } from '../utils/pwa';

const PWAInstall: React.FC = () => {
  const [canInstall, setCanInstall] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showUpdatePrompt, setShowUpdatePrompt] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    setCanInstall(enhancedPWAManager.canInstall());
    setIsInstalled(enhancedPWAManager.isAppInstalled());

    // Listen for PWA events
    const handleInstallAvailable = () => {
      setCanInstall(true);
      setShowInstallPrompt(true);
    };

    const handleInstallHide = () => {
      setCanInstall(false);
      setShowInstallPrompt(false);
    };

    const handleInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setCanInstall(false);
    };

    const handleUpdateAvailable = () => {
      setShowUpdatePrompt(true);
    };

    window.addEventListener('pwa-install-available', handleInstallAvailable);
    window.addEventListener('pwa-install-hide', handleInstallHide);
    window.addEventListener('pwa-installed', handleInstalled);
    window.addEventListener('pwa-update-available', handleUpdateAvailable);

    // Network status listener
    const cleanupNetworkListener = enhancedPWAManager.addNetworkListener(setIsOnline);

    return () => {
      window.removeEventListener('pwa-install-available', handleInstallAvailable);
      window.removeEventListener('pwa-install-hide', handleInstallHide);
      window.removeEventListener('pwa-installed', handleInstalled);
      window.removeEventListener('pwa-update-available', handleUpdateAvailable);
      cleanupNetworkListener();
    };
  }, []);

  const handleInstall = async () => {
    await enhancedPWAManager.installWithPrompt();
    setShowInstallPrompt(false);
  };

  const handleUpdateApp = () => {
    window.location.reload();
  };

  const handleShare = async () => {
    await enhancedPWAManager.shareContent({
      title: 'Indian Railways Innovation Hub',
      text: 'Check out this amazing railway dashboard with AI-powered features!',
      url: window.location.href
    });
  };

  const handleEnableNotifications = async () => {
    const enabled = await enhancedPWAManager.enableAdvancedNotifications();
    setNotificationsEnabled(enabled);
  };

  return (
    <>
      {/* Persistent Install Prompt */}
      {showInstallPrompt && canInstall && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-3 shadow-lg">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Download className="h-6 w-6 flex-shrink-0" />
              <div>
                <p className="font-bold text-base">Install Railway Hub</p>
                <p className="text-sm text-blue-100 hidden md:block">Get quick access, offline features, and a better experience.</p>
              </div>
            </div>
            <button
              onClick={handleInstall}
              className="bg-white text-blue-600 px-5 py-2 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors flex-shrink-0 shadow-md"
            >
              Install
            </button>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 z-50">
        {/* Network Status */}
        <div className={`transition-all duration-300 ${!isOnline ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="bg-red-500 text-white px-4 py-2 flex items-center justify-center space-x-2">
            <WifiOff className="h-4 w-4" />
            <span className="text-sm font-medium">You're offline. Some features may be limited.</span>
          </div>
        </div>

        {/* Update Prompt */}
        {showUpdatePrompt && (
          <div className="bg-green-600 text-white p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <RefreshCw className="h-5 w-5" />
                <div>
                  <p className="font-medium">Update Available</p>
                  <p className="text-sm text-green-100">A new version is ready to install</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleUpdateApp}
                  className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors"
                >
                  Update
                </button>
                <button
                  onClick={() => setShowUpdatePrompt(false)}
                  className="text-green-100 hover:text-white p-1"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PWA Features for installed app */}
        {isInstalled && (
          <div className="fixed bottom-4 right-4 space-y-3">
            {/* Enable Notifications Button */}
            {!notificationsEnabled && (
              <button
                onClick={handleEnableNotifications}
                className="bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
                title="Enable Smart Notifications"
              >
                <Bell className="h-5 w-5" />
              </button>
            )}
            
            {/* Share App Button */}
            <button
              onClick={handleShare}
              className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
              title="Share App"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
            
            {/* PWA Status Indicator */}
            <div className="bg-green-600 text-white p-2 rounded-full shadow-lg flex items-center space-x-1">
              <Smartphone className="h-4 w-4" />
              <Zap className="h-3 w-3" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PWAInstall;
