import { Trash2, Recycle, Droplets, Wind, Leaf, Truck } from 'lucide-react';

const CleanlinessWasteManagement = () => {
  const wasteFeatures = [
    {
      icon: Trash2,
      title: 'Smart Waste Bins',
      description: 'IoT-enabled bins with fill-level sensors and automated collection scheduling',
      metric: '15,000+ smart bins',
      color: 'bg-green-500',
      efficiency: '89%'
    },
    {
      icon: Recycle,
      title: 'Waste Segregation',
      description: 'AI-powered automatic waste sorting for better recycling and disposal',
      metric: '78% recycling rate',
      color: 'bg-blue-500',
      efficiency: '94%'
    },
    {
      icon: Droplets,
      title: 'Water Management',
      description: 'Smart water systems for cleaning and conservation across stations',
      metric: '35% water savings',
      color: 'bg-cyan-500',
      efficiency: '91%'
    },
    {
      icon: Wind,
      title: 'Air Quality Monitoring',
      description: 'Real-time air quality sensors ensuring healthy environment for passengers',
      metric: '650+ monitoring points',
      color: 'bg-purple-500',
      efficiency: '96%'
    },
    {
      icon: Truck,
      title: 'Automated Cleaning',
      description: 'Robotic cleaning systems and scheduled maintenance for platforms and trains',
      metric: '24/7 operation',
      color: 'bg-orange-500',
      efficiency: '88%'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Initiatives',
      description: 'Biodegradable materials, composting, and green waste management practices',
      metric: '60% waste reduction',
      color: 'bg-emerald-500',
      efficiency: '92%'
    }
  ];

  const cleanlinessStats = [
    { station: 'New Delhi', score: 4.8, trend: 'up' },
    { station: 'Mumbai Central', score: 4.7, trend: 'up' },
    { station: 'Chennai Central', score: 4.6, trend: 'stable' },
    { station: 'Kolkata', score: 4.5, trend: 'up' },
    { station: 'Bangalore City', score: 4.9, trend: 'up' }
  ];

  const wasteCategories = [
    { type: 'Organic', percentage: 45, color: 'bg-green-500' },
    { type: 'Plastic', percentage: 25, color: 'bg-blue-500' },
    { type: 'Paper', percentage: 20, color: 'bg-yellow-500' },
    { type: 'Metal', percentage: 10, color: 'bg-gray-500' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Cleanliness & Waste Management</h2>
        <p className="text-gray-600">Maintaining pristine environments through smart waste management and automated cleaning</p>
      </div>

      {/* Cleanliness Scores */}
      <div className="mb-6 p-4 bg-green-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Station Cleanliness Scores</h3>
        <div className="space-y-2">
          {cleanlinessStats.map((station, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-white rounded-lg">
              <span className="text-sm font-medium text-gray-700">{station.station}</span>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full mr-1 ${
                        i < Math.floor(station.score) ? 'bg-yellow-400' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-900">{station.score}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  station.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {station.trend === 'up' ? '↗' : '→'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Waste Breakdown */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Waste Composition</h3>
        <div className="space-y-2">
          {wasteCategories.map((category, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-16 text-xs font-medium text-gray-700">{category.type}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${category.color}`}
                  style={{ width: `${category.percentage}%` }}
                />
              </div>
              <span className="text-xs font-bold text-gray-900 w-8">{category.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Waste Management Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wasteFeatures.map((feature, index) => (
          <div key={index} className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Efficiency</p>
                <p className="text-sm font-bold text-green-600">{feature.efficiency}</p>
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
    </div>
  );
};

export default CleanlinessWasteManagement;
