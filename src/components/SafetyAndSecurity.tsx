import { Shield, Camera, Siren, Bot, Zap, UserCheck, FileText, Wifi, LifeBuoy } from 'lucide-react';

const SafetyAndSecurity = () => {
  const features = [
    {
      icon: Shield,
      title: 'Predictive Safety Analytics',
      description: 'ML algorithms analyze track health, weather, and signal data to predict and prevent potential failures.',
      metric: '25% reduction in incidents',
      color: 'bg-red-500'
    },
    {
      icon: Camera,
      title: 'AI-Powered Surveillance',
      description: 'Real-time monitoring of stations and trains to detect anomalies, unauthorized access, and overcrowding.',
      metric: '3,000+ cameras deployed',
      color: 'bg-blue-500'
    },
    {
      icon: Siren,
      title: 'Instant Emergency Response',
      description: 'SOS buttons in coaches and stations connected to a central command center for rapid response.',
      metric: 'Avg. response time < 5 mins',
      color: 'bg-yellow-500'
    },
    {
      icon: Bot,
      title: 'Automated Track Inspection',
      description: 'Drones and rovers with computer vision to inspect tracks for defects, reducing manual labor and errors.',
      metric: '500km of track inspected daily',
      color: 'bg-gray-500'
    },
    {
      icon: Zap,
      title: 'Electrical Safety Systems',
      description: 'Smart sensors to monitor overhead equipment and prevent electrical hazards.',
      metric: '99.9% uptime',
      color: 'bg-orange-500'
    },
    {
      icon: UserCheck,
      title: 'Staff Safety Monitoring',
      description: 'Wearable devices for track workers to monitor health and send alerts in case of emergencies.',
      metric: '5,000+ staff equipped',
      color: 'bg-green-500'
    },
    {
      icon: FileText,
      title: 'Digital Safety Records',
      description: 'Centralized database of safety audits, incident reports, and maintenance logs for easy access and analysis.',
      metric: '100% paperless',
      color: 'bg-indigo-500'
    },
    {
      icon: Wifi,
      title: 'Connected Emergency Comms',
      description: 'Dedicated network for seamless communication between train crew, station staff, and control rooms.',
      metric: '99.95% reliability',
      color: 'bg-purple-500'
    },
    {
      icon: LifeBuoy,
      title: 'Passenger Safety Awareness',
      description: 'Digital displays and app notifications with safety tips and emergency procedures.',
      metric: '5M+ passengers reached',
      color: 'bg-pink-500'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Safety & Security</h2>
        <p className="text-gray-600">Leveraging technology to create a safer railway network</p>
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

export default SafetyAndSecurity;
