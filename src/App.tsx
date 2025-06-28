import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import InnovationCard from './components/InnovationCard';
import QuickActions from './components/QuickActions';
import LiveFeed from './components/LiveFeed';
import PerformanceChart from './components/PerformanceChart';
import RailwayAIChatbot from './components/RailwayAIChatbot';
import SideChatbot from './components/SideChatbot';
import PWAInstall from './components/PWAInstall';
import PWAFeatures from './components/PWAFeatures';
import { 
  Users, 
  Train, 
  Shield, 
  Leaf, 
  Smartphone, 
  Brain, 
  MapPin, 
  Trash2,
  Building2,
  Heart
} from 'lucide-react';
import TicketingCrowdManagement from "./components/TicketingCrowdManagement";
import PassengerExperience from "./components/PassengerExperience";
import SafetyAndSecurity from "./components/SafetyAndSecurity";
import RealTimeTracking from "./components/RealTimeTracking";
import CleanlinessAndWasteManagement from "./components/CleanlinessAndWasteManagement";
import StationModernization from "./components/StationModernization";
import EnergyEfficiencySustainability from "./components/EnergyEfficiencySustainability";
import AutomationAIOperations from "./components/AutomationAIOperations";
import RuralRailConnectivity from "./components/RuralRailConnectivity";
import HeritageTechnologyFusion from "./components/HeritageTechnologyFusion";

function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isSideChatbotOpen, setIsSideChatbotOpen] = useState(false);
  const [isPWAFeaturesOpen, setIsPWAFeaturesOpen] = useState(false);
  const [isInstallPromptVisible, setIsInstallPromptVisible] = useState(false);

  const handleAction = (action: string) => {
    if (action === 'track_train') {
      setActiveView('track_train');
    } else if (action === 'dashboard') {
      setActiveView('dashboard');
    }
  };

  useEffect(() => {
    const handleInstallAvailable = () => setIsInstallPromptVisible(true);
    const handleInstalled = () => setIsInstallPromptVisible(false);

    window.addEventListener('pwa-install-available', handleInstallAvailable);
    window.addEventListener('pwa-installed', handleInstalled);

    // Check initial state
    const pwaManager = (window as any).enhancedPWAManager;
    if (pwaManager && pwaManager.canInstall() && !pwaManager.isAppInstalled()) {
      setIsInstallPromptVisible(true);
    }

    return () => {
      window.removeEventListener('pwa-install-available', handleInstallAvailable);
      window.removeEventListener('pwa-installed', handleInstalled);
    };
  }, []);

  const stats = [
    { title: 'Daily Passengers', value: '23.4M', change: '+12.3%', changeType: 'positive' as const, icon: Users, color: 'bg-blue-500' },
    { title: 'On-Time Performance', value: '94.2%', change: '+2.1%', changeType: 'positive' as const, icon: Train, color: 'bg-green-500' },
    { title: 'Safety Score', value: '99.1%', change: '-0.2%', changeType: 'negative' as const, icon: Shield, color: 'bg-red-500' },
    { title: 'Energy Saved', value: '8.7 GWh', change: '+18.5%', changeType: 'positive' as const, icon: Leaf, color: 'bg-emerald-500' }
  ];

  const innovations = [
    {
      title: 'Smart Passenger Experience',
      description: 'AI-powered personalized journey planning with real-time updates, seat preferences, and seamless digital ticketing.',
      icon: Smartphone,
      color: 'bg-blue-500',
      status: 'Active' as const,
      impact: '23M+ users'
    },
    {
      title: 'Predictive Safety Analytics',
      description: 'Machine learning algorithms that predict and prevent safety incidents through continuous monitoring and analysis.',
      icon: Shield,
      color: 'bg-red-500',
      status: 'Active' as const,
      impact: '99.1% safety score'
    },
    {
      title: 'Real-Time Train Tracking',
      description: 'GPS-enabled precise location tracking with crowd density analysis and dynamic route optimization.',
      icon: MapPin,
      color: 'bg-green-500',
      status: 'Active' as const,
      impact: '94.2% on-time'
    },
    {
      title: 'AI Operations Management',
      description: 'Intelligent automation for scheduling, maintenance prediction, and resource optimization across the network.',
      icon: Brain,
      color: 'bg-purple-500',
      status: 'In Development' as const,
      impact: '30% efficiency gain'
    },
    {
      title: 'Smart Waste Management',
      description: 'IoT-enabled waste tracking and automated cleaning systems for maintaining station cleanliness.',
      icon: Trash2,
      color: 'bg-orange-500',
      status: 'In Development' as const,
      impact: '67 major stations'
    },
    {
      title: 'Heritage Tech Integration',
      description: 'Blending traditional railway heritage with modern technology for cultural preservation and tourism.',
      icon: Heart,
      color: 'bg-pink-500',
      status: 'Planned' as const,
      impact: '15 heritage routes'
    }
  ];

  return (
    <div className={`min-h-screen bg-gray-50 transition-all duration-300 ${isInstallPromptVisible ? 'pt-16' : ''}`}>
      <Header onPWAFeaturesClick={() => setIsPWAFeaturesOpen(true)} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeView === 'dashboard' ? (
          <>
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Indian Railways Innovation Hub
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transforming India's railway network through cutting-edge technology, sustainable practices, 
                and innovative solutions for a better passenger experience.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mb-8">
              <QuickActions onAction={handleAction} />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2">
                <LiveFeed />
              </div>
              <div>
                <PerformanceChart />
              </div>
            </div>

            {/* Innovation Solutions */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Innovation Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {innovations.map((innovation, index) => (
                  <InnovationCard key={index} {...innovation} />
                ))}
              </div>
            </div>
          </>
        ) : activeView === 'track_train' ? (
          <div>
            <button 
              onClick={() => handleAction('dashboard')} 
              className="mb-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              &larr; Back to Dashboard
            </button>
            <RealTimeTracking />
          </div>
        ) : null}

        {/* Footer */}
        <footer className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Train className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-900">Indian Railways Innovation</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Building the future of Indian Railways through technology, sustainability, and innovation.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <span>© 2024 Indian Railways</span>
            <span>•</span>
            <span>Ministry of Railways, Government of India</span>
          </div>
        </footer>
      </main>
      
      {/* Railway AI Chatbot */}
      <RailwayAIChatbot 
        isOpen={isChatbotOpen} 
        onToggle={() => setIsChatbotOpen(!isChatbotOpen)} 
      />
      
      {/* Side Chatbot with Gemini AI */}
      <SideChatbot 
        isOpen={isSideChatbotOpen} 
        onToggle={() => setIsSideChatbotOpen(!isSideChatbotOpen)} 
      />
      
      {/* PWA Install and Management */}
      <PWAInstall />
      
      {/* PWA Features Modal */}
      <PWAFeatures 
        isOpen={isPWAFeaturesOpen} 
        onClose={() => setIsPWAFeaturesOpen(false)} 
      />
    </div>
  );
}

export default App;