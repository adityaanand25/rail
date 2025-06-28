import { Trash2, Bot, Recycle, Droplets, Wind, CheckCircle, Map, Clock, Award } from 'lucide-react';

const CleanlinessAndWasteManagement = () => {
  const features = [
    {
      icon: Trash2,
      title: 'Smart Waste Bins',
      description: 'IoT-enabled bins that notify when they are full, optimizing collection routes and preventing overflow.',
      metric: '60% more efficient',
      color: 'bg-green-500'
    },
    {
      icon: Bot,
      title: 'Automated Cleaning Robots',
      description: 'Robots for cleaning platforms and coaches, ensuring a high standard of hygiene 24/7.',
      metric: '50+ stations deployed',
      color: 'bg-blue-500'
    },
    {
      icon: Recycle,
      title: 'On-board Waste Segregation',
      description: 'Separate bins for wet, dry, and recyclable waste in all coaches to promote recycling.',
      metric: '45% increase in recycling',
      color: 'bg-purple-500'
    },
    {
      icon: Droplets,
      title: 'Water Conservation Systems',
      description: 'Smart water taps and water recycling plants at major stations to conserve water.',
      metric: '1M liters saved daily',
      color: 'bg-cyan-500'
    },
    {
      icon: Wind,
      title: 'Air Quality Monitoring',
      description: 'Real-time monitoring of air quality inside coaches and at stations.',
      metric: 'AQI below 50',
      color: 'bg-teal-500'
    },
    {
      icon: CheckCircle,
      title: 'Hygiene Audit System',
      description: 'Digital platform for tracking and auditing cleanliness, with ratings from passengers.',
      metric: '95% compliance',
      color: 'bg-indigo-500'
    },
    {
      icon: Map,
      title: 'Waste Collection Route Optimization',
      description: 'AI-powered route planning for waste collection vehicles to save time and fuel.',
      metric: '30% shorter routes',
      color: 'bg-orange-500'
    },
    {
      icon: Clock,
      title: 'Real-time Cleaning Status',
      description: 'Passengers can view the last cleaned time for toilets and coaches via the app.',
      metric: 'Transparency initiative',
      color: 'bg-pink-500'
    },
    {
      icon: Award,
      title: 'Clean Station Awards',
      description: 'Gamified system to rank and reward the cleanest stations, fostering competition and pride.',
      metric: 'Top 10 recognized monthly',
      color: 'bg-yellow-500'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Cleanliness & Waste Management</h2>
        <p className="text-gray-600">Implementing smart solutions for a cleaner, greener railway</p>
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
    </div>
  );
};

export default CleanlinessAndWasteManagement;
