import { MapPin, Wifi, BarChart3, Clock, Route, Activity, Search, AlertTriangle, CheckCircle, Train } from 'lucide-react';
import { useState } from 'react';

const RealTimeTracking = () => {
  const [trainNumber, setTrainNumber] = useState('');
  const [selectedTrain, setSelectedTrain] = useState(null);

  const trackingFeatures = [
    {
      icon: MapPin,
      title: 'GPS Train Tracking',
      description: 'Real-time location monitoring of all trains with precision accuracy',
      metric: '12,617 trains tracked',
      color: 'bg-blue-500',
      accuracy: '99.8%'
    },
    {
      icon: BarChart3,
      title: 'Crowd Analytics',
      description: 'AI-powered passenger density analysis and crowd flow predictions',
      metric: '750+ stations monitored',
      color: 'bg-purple-500',
      accuracy: '94.2%'
    },
    {
      icon: Route,
      title: 'Dynamic Route Optimization',
      description: 'Intelligent routing based on real-time traffic and track conditions',
      metric: '15% time reduction',
      color: 'bg-green-500',
      accuracy: '96.5%'
    },
    {
      icon: Clock,
      title: 'Delay Prediction',
      description: 'Machine learning models predicting delays before they occur',
      metric: '87% prediction accuracy',
      color: 'bg-orange-500',
      accuracy: '87.3%'
    },
    {
      icon: Activity,
      title: 'Performance Analytics',
      description: 'Real-time monitoring of operational efficiency and service quality',
      metric: '1,200+ KPIs tracked',
      color: 'bg-red-500',
      accuracy: '99.1%'
    },
    {
      icon: Wifi,
      title: 'IoT Sensor Network',
      description: 'Connected sensors monitoring track conditions, weather, and infrastructure',
      metric: '45,000+ sensors deployed',
      color: 'bg-indigo-500',
      accuracy: '98.7%'
    }
  ];

  const liveMetrics = [
    { label: 'Trains Running On Time', value: '94.2%', color: 'text-green-600' },
    { label: 'Active Passengers', value: '23.4M', color: 'text-blue-600' },
    { label: 'Avg Journey Time', value: '4.2h', color: 'text-purple-600' },
    { label: 'System Uptime', value: '99.9%', color: 'text-emerald-600' }
  ];

  const handleSearch = () => {
    if (trainNumber) {
      const url = `https://www.railyatri.in/live-train-status/${trainNumber}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      window.open('https://www.railyatri.in/live-train-status', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Real-Time Tracking & Analytics</h2>
        <p className="text-gray-600">Advanced monitoring and data-driven insights for optimal railway operations</p>
      </div>

      {/* Train Search */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Track a Train</h3>
        <div className="flex gap-2">
          <input
            type="text"
            value={trainNumber}
            onChange={(e) => setTrainNumber(e.target.value)}
            placeholder="Enter Train Number or Name"
            className="flex-grow p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
          >
            <Search size={18} />
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* Live Train Updates */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Live Train Updates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { train: 'Rajdhani Express 12301', status: 'On Time', delay: '0 min', platform: '12', color: 'text-green-600' },
            { train: 'Shatabdi Express 12002', status: 'Delayed', delay: '15 min', platform: '8', color: 'text-yellow-600' },
            { train: 'Duronto Express 12259', status: 'On Time', delay: '0 min', platform: '4', color: 'text-green-600' },
            { train: 'Vande Bharat 22435', status: 'Early', delay: '-5 min', platform: '1', color: 'text-blue-600' },
            { train: 'Gatimaan Express 12049', status: 'On Time', delay: '0 min', platform: '6', color: 'text-green-600' },
            { train: 'Tejas Express 12647', status: 'Delayed', delay: '8 min', platform: '15', color: 'text-yellow-600' }
          ].map((train, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg border hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-2">
                <Train className="h-4 w-4 text-blue-600" />
                <span className={`text-xs font-medium ${train.color}`}>{train.status}</span>
              </div>
              <h4 className="font-semibold text-sm text-gray-900 mb-1">{train.train}</h4>
              <div className="flex justify-between text-xs text-gray-600">
                <span>Platform {train.platform}</span>
                <span>{train.delay}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Metrics Dashboard */}
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Live Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {liveMetrics.map((metric, index) => (
            <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm">
              <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
              <p className="text-xs text-gray-600 mt-1">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tracking Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trackingFeatures.map((feature, index) => (
          <div key={index} className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Accuracy</p>
                <p className="text-sm font-bold text-green-600">{feature.accuracy}</p>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
            <div className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full inline-block">
              {feature.metric}
            </div>
          </div>
        ))}
      </div>

      {/* Real-time Status Bar */}
      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-800">System Status: All Systems Operational</span>
          </div>
          <span className="text-xs text-green-600">Last updated: 2 seconds ago</span>
        </div>
      </div>
    </div>
  );
};

export default RealTimeTracking;
