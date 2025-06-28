import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Download, 
  Bell, 
  WifiOff, 
  RefreshCw, 
  Share, 
  Home, 
  Zap,
  CheckCircle,
  XCircle,
  Info
} from 'lucide-react';
import { enhancedPWAManager } from '../utils/pwa';

interface PWAFeaturesProps {
  isOpen: boolean;
  onClose: () => void;
}

const PWAFeatures: React.FC<PWAFeaturesProps> = ({ isOpen, onClose }) => {
  const [pwaStatus, setPwaStatus] = useState({
    isInstalled: false,
    canInstall: false,
    isOnline: navigator.onLine,
    notificationsEnabled: false,
    backgroundSyncSupported: false,
    offlineCapable: false
  });

  useEffect(() => {
    if (isOpen) {
      checkPWACapabilities();
    }
  }, [isOpen]);

  const checkPWACapabilities = async () => {
    const status = {
      isInstalled: enhancedPWAManager.isAppInstalled(),
      canInstall: enhancedPWAManager.canInstall(),
      isOnline: navigator.onLine,
      notificationsEnabled: Notification.permission === 'granted',
      backgroundSyncSupported: 'serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype,
      offlineCapable: 'serviceWorker' in navigator
    };
    
    setPwaStatus(status);
  };

  const handleInstallApp = async () => {
    await enhancedPWAManager.installWithPrompt();
    await checkPWACapabilities();
  };

  const handleEnableNotifications = async () => {
    const enabled = await enhancedPWAManager.enableAdvancedNotifications();
    setPwaStatus(prev => ({ ...prev, notificationsEnabled: enabled }));
  };

  const handleTestOffline = async () => {
    await enhancedPWAManager.scheduleOfflineAction('test_action', { 
      message: 'This is a test offline action',
      timestamp: new Date().toISOString()
    });
  };

  const handleShare = async () => {
    await enhancedPWAManager.shareContent({
      title: 'Indian Railways Innovation Hub',
      text: 'Experience the future of railway travel with AI-powered features!',
      url: window.location.href
    });
  };

  const pwaFeatures = [
    {
      icon: Download,
      title: 'App Installation',
      description: 'Install as a native app on your device',
      status: pwaStatus.isInstalled,
      action: pwaStatus.canInstall ? 'Install Now' : pwaStatus.isInstalled ? 'Installed' : 'Not Available',
      onClick: pwaStatus.canInstall ? handleInstallApp : undefined
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Get real-time updates about your journeys',
      status: pwaStatus.notificationsEnabled,
      action: pwaStatus.notificationsEnabled ? 'Enabled' : 'Enable',
      onClick: !pwaStatus.notificationsEnabled ? handleEnableNotifications : undefined
    },
    {
      icon: WifiOff,
      title: 'Offline Functionality',
      description: 'Works even when you\'re offline',
      status: pwaStatus.offlineCapable,
      action: 'Test Offline',
      onClick: handleTestOffline
    },
    {
      icon: RefreshCw,
      title: 'Background Sync',
      description: 'Sync data automatically in the background',
      status: pwaStatus.backgroundSyncSupported,
      action: pwaStatus.backgroundSyncSupported ? 'Supported' : 'Not Supported'
    },
    {
      icon: Share,
      title: 'Native Sharing',
      description: 'Share content using device\'s native share',
      status: 'share' in navigator,
      action: 'Test Share',
      onClick: handleShare
    },
    {
      icon: Home,
      title: 'Home Screen',
      description: 'Quick access from home screen',
      status: pwaStatus.isInstalled,
      action: pwaStatus.isInstalled ? 'Available' : 'Install Required'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
              <Smartphone className="h-6 w-6 text-blue-600" />
              <span>Progressive Web App Features</span>
            </h2>
            <p className="text-gray-600 mt-1">Transform your experience with native app capabilities</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <XCircle className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* PWA Status Overview */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">PWA Status Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${pwaStatus.isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-sm font-medium">
                {pwaStatus.isOnline ? 'Online' : 'Offline'}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${pwaStatus.isInstalled ? 'bg-green-500' : 'bg-yellow-500'}`} />
              <span className="text-sm font-medium">
                {pwaStatus.isInstalled ? 'App Installed' : 'Web Version'}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${pwaStatus.notificationsEnabled ? 'bg-green-500' : 'bg-gray-400'}`} />
              <span className="text-sm font-medium">
                {pwaStatus.notificationsEnabled ? 'Notifications On' : 'Notifications Off'}
              </span>
            </div>
          </div>
        </div>

        {/* PWA Features Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pwaFeatures.map((feature, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {feature.status === true && <CheckCircle className="h-5 w-5 text-green-500" />}
                    {feature.status === false && <XCircle className="h-5 w-5 text-red-500" />}
                    {typeof feature.status === 'string' && (
                      <Info className="h-5 w-5 text-blue-500" />
                    )}
                  </div>
                </div>
                
                {feature.onClick && (
                  <button
                    onClick={feature.onClick}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    {feature.action}
                  </button>
                )}
                
                {!feature.onClick && (
                  <div className={`w-full text-center py-2 px-4 rounded-lg font-medium ${
                    feature.status === true ? 'bg-green-100 text-green-800' :
                    feature.status === false ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {feature.action}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* PWA Benefits */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Use PWA Features?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <Zap className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">Lightning Fast</h4>
                <p className="text-sm text-gray-600">Instant loading with cached resources</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <WifiOff className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">Offline Ready</h4>
                <p className="text-sm text-gray-600">Access key features without internet</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Bell className="h-5 w-5 text-purple-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">Smart Alerts</h4>
                <p className="text-sm text-gray-600">Real-time notifications for important updates</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Home className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">Native Feel</h4>
                <p className="text-sm text-gray-600">App-like experience on any device</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAFeatures;
