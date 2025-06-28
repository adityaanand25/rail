import { Smartphone, Wifi, CreditCard, Clock, Star, MessageSquare, Users, Map, ThumbsUp, BatteryCharging, AreaChart, Accessibility, Download, Zap } from 'lucide-react';
import { useState } from 'react';
import SmartPassengerExperience from './SmartPassengerExperience';

const PassengerExperience = () => {
  const [showSmartExperience, setShowSmartExperience] = useState(false);

  const features = [
    {
      icon: Smartphone,
      title: 'AI Journey Planner',
      description: 'Personalized route recommendations based on preferences and real-time conditions',
      metric: '23M+ active users',
      color: 'bg-blue-500'
    },
    {
      icon: CreditCard,
      title: 'Digital Ticketing',
      description: 'Seamless booking, payment, and ticket management with UPI integration',
      metric: '89% cashless transactions',
      color: 'bg-green-500'
    },
    {
      icon: Wifi,
      title: 'Station WiFi',
      description: 'High-speed internet connectivity across all major stations and trains',
      metric: '5,500+ stations covered',
      color: 'bg-purple-500'
    },
    {
      icon: MessageSquare,
      title: '24/7 AI Assistant',
      description: 'Multilingual chatbot for instant support and information',
      metric: '2.3M queries/month',
      color: 'bg-orange-500'
    },
    {
      icon: Star,
      title: 'Loyalty Program',
      description: 'Reward points, priority booking, and exclusive benefits for frequent travelers',
      metric: '4.2M members',
      color: 'bg-pink-500'
    },
    {
      icon: Clock,
      title: 'Live Updates',
      description: 'Real-time notifications for delays, platform changes, and boarding alerts',
      metric: '95% accuracy rate',
      color: 'bg-indigo-500'
    },
    {
      icon: Users,
      title: 'Smart Coach Recommender',
      description: 'Suggests the least crowded or most convenient coach to board based on real-time data.',
      metric: 'Beta Feature',
      color: 'bg-teal-500'
    },
    {
      icon: Map,
      title: 'Station Navigator',
      description: 'Interactive indoor maps for easy navigation within major railway stations.',
      metric: '15 stations mapped',
      color: 'bg-cyan-500'
    },
    {
      icon: ThumbsUp,
      title: 'Feedback & Ratings',
      description: 'Rate train cleanliness, punctuality, and station amenities to help us improve.',
      metric: '50k+ ratings received',
      color: 'bg-lime-500'
    },
    {
      icon: BatteryCharging,
      title: 'Charging Point Finder',
      description: 'Locate available charging ports on trains and at stations.',
      metric: '100k+ points listed',
      color: 'bg-amber-500'
    },
    {
      icon: AreaChart,
      title: 'Crowd Heatmap',
      description: 'Predicts crowd levels on platforms and coaches at different times.',
      metric: '92% prediction accuracy',
      color: 'bg-red-500'
    },
    {
      icon: Accessibility,
      title: 'Accessible Travel Assistant',
      description: 'Features for senior citizens and differently-abled passengers.',
      metric: 'Step-free routes available',
      color: 'bg-fuchsia-500'
    },
    {
      icon: Download,
      title: 'Offline Journey Companion',
      description: 'Access routes, station layouts, and emergency contacts without an internet connection.',
      metric: 'Sync for offline use',
      color: 'bg-sky-500'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Passenger Experience</h2>
        <p className="text-gray-600">Enhancing every journey with smart, connected solutions</p>
      </div>
      
      {/* Smart Experience Button */}
      <div className="mb-6">
        <button
          onClick={() => setShowSmartExperience(true)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
        >
          <Zap className="h-6 w-6" />
          <span className="text-lg">Experience Smart AI Journey Planning</span>
          <Zap className="h-6 w-6" />
        </button>
        <p className="text-center text-sm text-gray-500 mt-2">
          Unlock personalized AI-powered travel planning with real-time updates
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="flex-grow">
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-3`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                {feature.metric}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Smart Passenger Experience Modal */}
      {showSmartExperience && (
        <SmartPassengerExperience onClose={() => setShowSmartExperience(false)} />
      )}
    </div>
  );
};

export default PassengerExperience;
