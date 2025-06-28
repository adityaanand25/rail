import React, { useState } from 'react';
import { 
  Brain, 
  MapPin, 
  Star, 
  Route,
  Bell,
  AlertCircle,
  CheckCircle,
  Navigation,
  Zap,
  Loader,
  Clock,
  IndianRupee
} from 'lucide-react';

interface SmartPassengerExperienceProps {
  onClose: () => void;
}

const SmartPassengerExperience: React.FC<SmartPassengerExperienceProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('journey-planner');
  const [journeyData, setJourneyData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    preferences: {
      seatType: 'window',
      coachType: 'ac',
      mealPreference: 'veg',
      accessibility: false
    }
  });
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);
  const [aiJourneyPlan, setAiJourneyPlan] = useState<any>(null);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);

  // Gemini API function for generating real journey plans
  const generateAIJourneyPlan = async () => {
    if (!journeyData.from || !journeyData.to) {
      alert('Please enter both departure and destination stations');
      return;
    }

    if (!apiKey.trim()) {
      setShowApiKeyInput(true);
      alert('Please enter your Gemini API key to use AI journey planning');
      return;
    }

    setIsGeneratingPlan(true);
    try {
      const prompt = `
        As an expert Indian Railways AI assistant, provide a comprehensive journey plan for:
        
        Route: ${journeyData.from} to ${journeyData.to}
        Date: ${journeyData.date || 'Today'}
        Preferred Time: ${journeyData.time || 'Flexible'}
        Coach Type: ${journeyData.preferences.coachType}
        Seat Preference: ${journeyData.preferences.seatType}
        
        Please provide:
        1. Best 3 train options with timings, duration, and fares
        2. Platform and coach recommendations
        3. Real-time travel tips specific to this route
        4. Weather considerations for travel date
        5. Station amenities and facilities
        6. Food recommendations during journey
        7. Safety and security tips
        
        Format the response as a structured JSON with sections: trains, recommendations, tips, weather, amenities.
        Make it specific to Indian Railways with actual train names and realistic information.
      `;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.candidates[0].content.parts[0].text;
      
      // Try to parse JSON, fallback to plain text
      let parsedResponse;
      try {
        parsedResponse = JSON.parse(aiResponse);
      } catch {
        parsedResponse = {
          rawResponse: aiResponse,
          trains: [],
          recommendations: [aiResponse.slice(0, 200) + '...'],
          tips: ['AI-generated comprehensive travel plan available'],
          weather: 'Check weather conditions before travel',
          amenities: 'Station facilities information provided by AI'
        };
      }

      setAiJourneyPlan(parsedResponse);
    } catch (error) {
      console.error('Error generating AI journey plan:', error);
      alert('Failed to generate AI journey plan. Please check your API key and try again.');
    } finally {
      setIsGeneratingPlan(false);
    }
  };

  // Demo function with realistic mock data
  const generateDemoJourneyPlan = () => {
    setIsGeneratingPlan(true);
    
    // Simulate API delay
    setTimeout(() => {
      const demoData = {
        trains: [
          {
            name: "12951 Mumbai Rajdhani Express",
            departure: "16:55",
            arrival: "08:35+1",
            duration: "15h 40m",
            fare: "₹3,150"
          },
          {
            name: "12925 Paschim Express",
            departure: "22:30", 
            arrival: "14:05+1",
            duration: "15h 35m",
            fare: "₹2,890"
          },
          {
            name: "12953 August Kranti Rajdhani",
            departure: "17:30",
            arrival: "09:10+1", 
            duration: "15h 40m",
            fare: "₹3,150"
          }
        ],
        recommendations: [
          "Book 12951 Mumbai Rajdhani for the fastest journey with premium amenities",
          "Coach B3 offers the best window views for this route",
          "Pre-book meals as pantry car gets busy during dinner hours",
          "Platform 16 at Mumbai Central has the best waiting facilities",
          "Carry a light jacket as AC coaches can get cold during night travel"
        ],
        tips: [
          "Arrive at the station 30 minutes before departure",
          "Keep digital copy of ticket and ID proof handy",
          "Download offline maps for your destination city"
        ],
        weather: "Clear skies expected. Pleasant journey conditions.",
        amenities: "Mumbai Central: WiFi, Food Court, Waiting Rooms. New Delhi: All modern facilities available."
      };
      
      setAiJourneyPlan(demoData);
      setIsGeneratingPlan(false);
    }, 2000);
  };

  const aiFeatures = [
    {
      icon: Brain,
      title: 'AI Journey Optimizer',
      description: 'Learns from your travel patterns to suggest optimal routes, timings, and connections',
      status: 'Active',
      color: 'bg-purple-500'
    },
    {
      icon: Bell,
      title: 'Proactive Notifications',
      description: 'Intelligent alerts for delays, platform changes, boarding time, and weather updates',
      status: 'Active',
      color: 'bg-blue-500'
    },
    {
      icon: Star,
      title: 'Personalized Recommendations',
      description: 'Customized suggestions for seats, coaches, dining, and station amenities',
      status: 'Active',
      color: 'bg-orange-500'
    },
    {
      icon: Route,
      title: 'Dynamic Route Planning',
      description: 'Real-time route optimization based on traffic, delays, and your preferences',
      status: 'Active',
      color: 'bg-green-500'
    }
  ];

  const smartFeatures = [
    {
      category: 'Journey Planning',
      features: [
        'Multi-modal route optimization',
        'Real-time delay predictions',
        'Alternate route suggestions',
        'Cost-benefit analysis'
      ]
    },
    {
      category: 'Seat Intelligence',
      features: [
        'Crowd-level predictions',
        'Comfort score analysis',
        'Amenity proximity mapping',
        'Social preference matching'
      ]
    },
    {
      category: 'Digital Ticketing',
      features: [
        'One-click booking from history',
        'Group booking coordination',
        'Dynamic pricing optimization',
        'Instant refund processing'
      ]
    },
    {
      category: 'Real-time Assistance',
      features: [
        'Live journey tracking',
        'Emergency assistance',
        'Multilingual support',
        'Offline capabilities'
      ]
    }
  ];

  const personalizedInsights = [
    {
      insight: 'Preferred Travel Time',
      value: 'Morning (7-10 AM)',
      confidence: '94%',
      suggestion: 'Book 15% cheaper tickets for afternoon travel'
    },
    {
      insight: 'Seat Preference',
      value: 'Window, Lower Berth',
      confidence: '89%',
      suggestion: 'Coach B3 has the best window views on this route'
    },
    {
      insight: 'Route Optimization',
      value: 'Via Junction avoiding peak hours',
      confidence: '92%',
      suggestion: 'Save 45 minutes with alternative route'
    },
    {
      insight: 'Comfort Score',
      value: 'High Priority on AC Coach',
      confidence: '87%',
      suggestion: 'Upgrade available for ₹450 with 98% comfort score'
    }
  ];

  const realtimeUpdates = [
    {
      type: 'success',
      message: 'Your train 12345 is running on time. Expected arrival: 10:30 AM',
      time: '2 min ago'
    },
    {
      type: 'info',
      message: 'Platform changed to Platform 3. Updated directions sent to your phone',
      time: '5 min ago'
    },
    {
      type: 'warning',
      message: 'Light rain expected at destination. Carry umbrella suggestion added',
      time: '12 min ago'
    },
    {
      type: 'success',
      message: 'Your preferred meal (Veg Thali) is available in Pantry Car C5',
      time: '18 min ago'
    }
  ];

  const renderJourneyPlanner = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
          <input
            type="text"
            value={journeyData.from}
            onChange={(e) => setJourneyData({...journeyData, from: e.target.value})}
            placeholder="e.g., Mumbai Central"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
          <input
            type="text"
            value={journeyData.to}
            onChange={(e) => setJourneyData({...journeyData, to: e.target.value})}
            placeholder="e.g., New Delhi"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setJourneyData({
            ...journeyData,
            from: 'Mumbai Central',
            to: 'New Delhi',
            date: new Date().toISOString().split('T')[0],
            time: '16:00'
          })}
          className="text-sm text-blue-600 hover:text-blue-800 underline"
        >
          Quick Fill: Mumbai to Delhi Journey
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
          <input
            type="date"
            value={journeyData.date}
            onChange={(e) => setJourneyData({...journeyData, date: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
          <input
            type="time"
            value={journeyData.time}
            onChange={(e) => setJourneyData({...journeyData, time: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-3">AI-Powered Suggestions</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personalizedInsights.map((insight, index) => (
            <div key={index} className="bg-white p-3 rounded-lg border border-blue-200">
              <div className="flex justify-between items-start mb-2">
                <h5 className="font-medium text-gray-900">{insight.insight}</h5>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  {insight.confidence}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{insight.value}</p>
              <p className="text-xs text-blue-600">{insight.suggestion}</p>
            </div>
          ))}
        </div>
      </div>

      {/* API Key Input Section */}
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-yellow-900">Gemini AI Configuration</h4>
          <button
            onClick={() => setShowApiKeyInput(!showApiKeyInput)}
            className="text-sm text-yellow-700 hover:text-yellow-900 underline"
          >
            {showApiKeyInput ? 'Hide' : 'Configure API Key'}
          </button>
        </div>
        
        {showApiKeyInput && (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gemini API Key
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your Gemini API key here..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div className="text-sm text-gray-600">
              <p className="mb-2">
                <strong>How to get your Gemini API key:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-1 text-xs">
                <li>Visit <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google AI Studio</a></li>
                <li>Sign in with your Google account</li>
                <li>Click "Create API Key" and select a project</li>
                <li>Copy the generated API key and paste it above</li>
              </ol>
              <p className="text-xs text-gray-500 mt-2">
                Your API key is stored locally and never sent to our servers.
              </p>
            </div>
          </div>
        )}
        
        {!showApiKeyInput && (
          <p className="text-sm text-yellow-700">
            {apiKey ? '✅ API Key configured - Ready for AI journey planning!' : '⚠️ API Key required for AI features'}
          </p>
        )}
      </div>

      {/* AI Journey Plan Results */}
      {aiJourneyPlan && (
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-4 flex items-center">
            <Brain className="h-5 w-5 mr-2" />
            AI-Generated Journey Plan
          </h4>
          
          {/* Display trains if available */}
          {aiJourneyPlan.trains && aiJourneyPlan.trains.length > 0 && (
            <div className="mb-4">
              <h5 className="font-medium text-gray-900 mb-2">Recommended Trains</h5>
              <div className="space-y-2">
                {aiJourneyPlan.trains.map((train: any, index: number) => (
                  <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h6 className="font-medium text-gray-900">{train.name || `Train Option ${index + 1}`}</h6>
                        <p className="text-sm text-gray-600">
                          <Clock className="h-4 w-4 inline mr-1" />
                          {train.departure} - {train.arrival} ({train.duration})
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">
                          <IndianRupee className="h-4 w-4 inline" />
                          {train.fare || 'N/A'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Display raw response if JSON parsing failed */}
          {aiJourneyPlan.rawResponse && (
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h5 className="font-medium text-gray-900 mb-2">AI Journey Insights</h5>
              <div className="text-sm text-gray-700 whitespace-pre-wrap max-h-60 overflow-y-auto">
                {aiJourneyPlan.rawResponse}
              </div>
            </div>
          )}

          {/* Display recommendations */}
          {aiJourneyPlan.recommendations && (
            <div className="mt-4">
              <h5 className="font-medium text-gray-900 mb-2">Smart Recommendations</h5>
              <ul className="space-y-1">
                {aiJourneyPlan.recommendations.map((rec: string, index: number) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="flex flex-col space-y-3">
        <button 
          onClick={generateAIJourneyPlan}
          disabled={isGeneratingPlan}
          className={`w-full text-white py-3 px-6 rounded-lg transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ${
            apiKey ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-500 hover:bg-gray-600'
          }`}
        >
          {isGeneratingPlan ? (
            <>
              <Loader className="h-5 w-5 mr-2 animate-spin" />
              Generating AI Plan...
            </>
          ) : (
            <>
              <Brain className="h-5 w-5 mr-2" />
              {apiKey ? 'Generate AI Journey Plan (Powered by Gemini)' : 'Generate AI Journey Plan (API Key Required)'}
            </>
          )}
        </button>
        
        <div className="flex space-x-3">
          <button
            onClick={generateDemoJourneyPlan}
            disabled={isGeneratingPlan}
            className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition font-medium disabled:opacity-50"
          >
            Try Demo Version
          </button>
        </div>
        
        <p className="text-xs text-gray-500 text-center">
          {apiKey 
            ? 'AI Journey Planner is powered by Gemini AI for real-time insights and comprehensive travel planning.'
            : 'Configure your Gemini API key above to unlock AI-powered journey planning with real-time insights.'
          }
        </p>
      </div>
    </div>
  );

  const renderRealTimeUpdates = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-gray-900">Live Journey Updates</h4>
        <span className="flex items-center text-green-600">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          Live
        </span>
      </div>
      
      <div className="space-y-3">
        {realtimeUpdates.map((update, index) => (
          <div key={index} className={`p-3 rounded-lg border-l-4 ${
            update.type === 'success' ? 'bg-green-50 border-green-500' :
            update.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
            'bg-blue-50 border-blue-500'
          }`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                {update.type === 'success' && <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2" />}
                {update.type === 'warning' && <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5 mr-2" />}
                {update.type === 'info' && <Bell className="w-4 h-4 text-blue-500 mt-0.5 mr-2" />}
                <p className="text-sm text-gray-800">{update.message}</p>
              </div>
              <span className="text-xs text-gray-500 ml-2">{update.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-3">Smart Assistance Active</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="text-center">
            <MapPin className="w-6 h-6 text-blue-500 mx-auto mb-1" />
            <p className="text-xs text-gray-600">Live Tracking</p>
          </div>
          <div className="text-center">
            <Bell className="w-6 h-6 text-purple-500 mx-auto mb-1" />
            <p className="text-xs text-gray-600">Smart Alerts</p>
          </div>
          <div className="text-center">
            <Navigation className="w-6 h-6 text-green-500 mx-auto mb-1" />
            <p className="text-xs text-gray-600">Route Guidance</p>
          </div>
          <div className="text-center">
            <Zap className="w-6 h-6 text-yellow-500 mx-auto mb-1" />
            <p className="text-xs text-gray-600">Quick Actions</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSmartFeatures = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {smartFeatures.map((category, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">{category.category}</h4>
            <ul className="space-y-2">
              {category.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-4">AI Performance Metrics</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">94.2%</div>
            <p className="text-sm text-gray-600">Prediction Accuracy</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">2.1M</div>
            <p className="text-sm text-gray-600">Daily AI Interactions</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">87%</div>
            <p className="text-sm text-gray-600">User Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 w-full max-w-6xl relative max-h-full overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Smart Passenger Experience</h2>
              <p className="text-gray-600">AI-powered personalized journey planning with real-time updates</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        {/* AI Features Overview */}
        <div className="p-6 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center mb-3`}>
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  {feature.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'journey-planner', label: 'AI Journey Planner', icon: Brain },
              { id: 'real-time', label: 'Real-time Updates', icon: Bell },
              { id: 'features', label: 'Smart Features', icon: Star }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'journey-planner' && renderJourneyPlanner()}
          {activeTab === 'real-time' && renderRealTimeUpdates()}
          {activeTab === 'features' && renderSmartFeatures()}
        </div>
      </div>
    </div>
  );
};

export default SmartPassengerExperience;
