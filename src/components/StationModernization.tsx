import { Building2, Zap, Wifi, Accessibility, Coffee, Car } from 'lucide-react';

const StationModernization = () => {
  const modernizationFeatures = [
    {
      icon: Building2,
      title: 'Smart Infrastructure',
      description: 'Modern terminals with intelligent lighting, climate control, and automated systems',
      metric: '450+ stations upgraded',
      color: 'bg-blue-500',
      progress: 65
    },
    {
      icon: Accessibility,
      title: 'Universal Accessibility',
      description: 'Barrier-free design with elevators, ramps, and tactile guidance systems',
      metric: '100% compliance target',
      color: 'bg-green-500',
      progress: 78
    },
    {
      icon: Wifi,
      title: 'Digital Connectivity',
      description: 'High-speed internet, digital displays, and smart information kiosks',
      metric: '5,500+ stations connected',
      color: 'bg-purple-500',
      progress: 89
    },
    {
      icon: Coffee,
      title: 'Passenger Amenities',
      description: 'Food courts, waiting lounges, charging stations, and retail spaces',
      metric: '2,800+ amenity points',
      color: 'bg-orange-500',
      progress: 72
    },
    {
      icon: Car,
      title: 'Multi-Modal Integration',
      description: 'Seamless connectivity with buses, metros, and ride-sharing services',
      metric: '180+ integrated hubs',
      color: 'bg-red-500',
      progress: 45
    },
    {
      icon: Zap,
      title: 'Energy Efficient Design',
      description: 'LED lighting, solar panels, and smart energy management systems',
      metric: '40% energy reduction',
      color: 'bg-emerald-500',
      progress: 83
    }
  ];

  const stationCategories = [
    { type: 'Tier-1 Stations', count: 75, status: 'Completed', color: 'bg-green-500' },
    { type: 'Tier-2 Stations', count: 150, status: 'In Progress', color: 'bg-blue-500' },
    { type: 'Heritage Stations', count: 25, status: 'Planned', color: 'bg-purple-500' },
    { type: 'Rural Stations', count: 200, status: 'Assessment', color: 'bg-yellow-500' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Station Modernization</h2>
        <p className="text-gray-600">Transforming railway stations into modern, accessible, and passenger-friendly hubs</p>
      </div>

      {/* Modernization Progress */}
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Modernization Progress by Category</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stationCategories.map((category, index) => (
            <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className={`w-8 h-8 ${category.color} rounded-full mx-auto mb-2 flex items-center justify-center`}>
                <span className="text-white font-bold text-sm">{category.count}</span>
              </div>
              <p className="text-sm font-medium text-gray-900">{category.type}</p>
              <p className="text-xs text-gray-600">{category.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modernization Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modernizationFeatures.map((feature, index) => (
          <div key={index} className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Progress</p>
                <p className="text-sm font-bold text-blue-600">{feature.progress}%</p>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
            
            {/* Progress Bar */}
            <div className="mb-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${feature.color} transition-all duration-1000`}
                  style={{ width: `${feature.progress}%` }}
                />
              </div>
            </div>
            
            <div className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full inline-block">
              {feature.metric}
            </div>
          </div>
        ))}
      </div>

      {/* Key Benefits */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Key Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-blue-600">35%</p>
            <p className="text-sm text-gray-600">Increase in passenger satisfaction</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-600">28%</p>
            <p className="text-sm text-gray-600">Reduction in operational costs</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-purple-600">50%</p>
            <p className="text-sm text-gray-600">Improvement in accessibility</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationModernization;
