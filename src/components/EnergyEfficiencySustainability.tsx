import { Leaf, Zap, Droplets, Wind, Recycle, Sun } from 'lucide-react';

const EnergyEfficiencySustainability = () => {
  const sustainabilityFeatures = [
    {
      icon: Sun,
      title: 'Solar Power Generation',
      description: 'Rooftop and trackside solar installations powering stations and operations',
      metric: '1.2 GW installed capacity',
      color: 'bg-yellow-500',
      savings: '₹850 Cr annually'
    },
    {
      icon: Wind,
      title: 'Wind Energy Integration',
      description: 'Wind farms dedicated to railway operations in high-wind potential areas',
      metric: '280 MW wind capacity',
      color: 'bg-blue-500',
      savings: '₹320 Cr annually'
    },
    {
      icon: Zap,
      title: 'Energy Efficient Systems',
      description: 'LED lighting, regenerative braking, and smart grid integration',
      metric: '45% energy reduction',
      color: 'bg-green-500',
      savings: '₹1,200 Cr annually'
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Rainwater harvesting, water recycling, and efficient usage systems',
      metric: '60% water savings',
      color: 'bg-cyan-500',
      savings: '₹180 Cr annually'
    },
    {
      icon: Recycle,
      title: 'Waste-to-Energy',
      description: 'Converting railway waste into usable energy through advanced processing',
      metric: '25 MW from waste',
      color: 'bg-purple-500',
      savings: '₹95 Cr annually'
    },
    {
      icon: Leaf,
      title: 'Carbon Neutrality',
      description: 'Comprehensive carbon offset programs and emission reduction strategies',
      metric: '2030 net-zero target',
      color: 'bg-emerald-500',
      savings: 'Environmental Impact'
    }
  ];

  const energyStats = [
    { label: 'Renewable Energy Share', value: '28%', target: '100% by 2030', color: 'text-green-600' },
    { label: 'CO2 Emissions Reduced', value: '4.2M tons', target: 'Net Zero by 2030', color: 'text-blue-600' },
    { label: 'Energy Cost Savings', value: '₹2,645 Cr', target: '₹5,000 Cr by 2030', color: 'text-purple-600' },
    { label: 'Green Certified Stations', value: '720', target: '2,000 by 2025', color: 'text-emerald-600' }
  ];

  const initiatives = [
    { name: 'Mission 41K', description: 'Electrification of 41,000 route km', progress: 89 },
    { name: 'Green Railway Stations', description: 'ISO 14001 certification for stations', progress: 36 },
    { name: 'Bio-toilets', description: 'Zero discharge toilets in trains', progress: 95 },
    { name: 'Plastic-free Railways', description: 'Complete elimination of single-use plastic', progress: 67 }
  ];

  const trainEnergyData = [
    { trainType: 'Passenger Express', engineType: 'WAP-7 (Electric)', energyConsumption: 10, maxSpeed: 140, co2Emission: 0 },
    { trainType: 'Freight Train', engineType: 'WAG-9 (Electric)', energyConsumption: 15, maxSpeed: 100, co2Emission: 0 },
    { trainType: 'Metro/Suburban Train', engineType: '3-Phase EMU', energyConsumption: 7, maxSpeed: 80, co2Emission: 0 },
    { trainType: 'Diesel Passenger Train', engineType: 'WDP-4 (Diesel)', energyConsumption: 11.1, maxSpeed: 130, co2Emission: 10.7 },
    { trainType: 'Diesel Freight Train', engineType: 'WDG-4 (Diesel)', energyConsumption: 15.3, maxSpeed: 100, co2Emission: 14.7 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Energy Efficiency & Sustainability</h2>
        <p className="text-gray-600">Leading the transition to clean, renewable energy and sustainable operations</p>
      </div>

      {/* Energy Statistics */}
      <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Sustainability Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {energyStats.map((stat, index) => (
            <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm">
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-gray-700 font-medium">{stat.label}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.target}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Initiatives Progress */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Key Green Initiatives</h3>
        <div className="space-y-3">
          {initiatives.map((initiative, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-gray-900">{initiative.name}</p>
                <p className="text-sm text-gray-600">{initiative.description}</p>
              </div>
              <div className="ml-4 text-right">
                <p className="text-lg font-bold text-green-600">{initiative.progress}%</p>
                <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${initiative.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Train Energy Analytics Table */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Train Energy Analytics</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left py-2 px-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Train Type</th>
                <th className="text-left py-2 px-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Engine Type</th>
                <th className="text-left py-2 px-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Energy Consumption (kWh/km)</th>
                <th className="text-left py-2 px-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Max Speed (km/h)</th>
                <th className="text-left py-2 px-3 text-xs font-medium text-gray-600 uppercase tracking-wider">CO₂ Emission (kg/km)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {trainEnergyData.map((train, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-3 text-sm text-gray-800">{train.trainType}</td>
                  <td className="py-3 px-3 text-sm text-gray-600">{train.engineType}</td>
                  <td className="py-3 px-3 text-sm text-gray-600">{train.energyConsumption}</td>
                  <td className="py-3 px-3 text-sm text-gray-600">{train.maxSpeed}</td>
                  <td className="py-3 px-3 text-sm text-gray-600">{train.co2Emission}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sustainability Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {sustainabilityFeatures.map((feature, index) => (
          <div key={index} className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-3`}>
              <feature.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
            <div className="space-y-2">
              <div className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full inline-block">
                {feature.metric}
              </div>
              <div className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full inline-block ml-2">
                {feature.savings}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Environmental Impact */}
      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-green-800 mb-1">Environmental Impact</h3>
            <p className="text-sm text-green-700">Indian Railways is committed to becoming the world's largest green railway network</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-green-600">2030</p>
            <p className="text-xs text-green-700">Net Zero Target</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyEfficiencySustainability;
