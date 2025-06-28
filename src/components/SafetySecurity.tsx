import { Shield, Camera, AlertTriangle, Users, Lock, Eye } from 'lucide-react';

const SafetySecurity = () => {
  const safetyFeatures = [
    {
      icon: Camera,
      title: 'AI Video Surveillance',
      description: 'Smart cameras with facial recognition and behavior analysis for threat detection',
      metric: '12,000+ cameras deployed',
      color: 'bg-red-500',
      status: 'Active'
    },
    {
      icon: AlertTriangle,
      title: 'Predictive Safety Analytics',
      description: 'Machine learning algorithms predicting potential safety incidents before they occur',
      metric: '99.1% safety score',
      color: 'bg-orange-500',
      status: 'Active'
    },
    {
      icon: Users,
      title: 'Emergency Response',
      description: 'Rapid response teams with GPS tracking and instant communication systems',
      metric: '2.3 min avg response',
      color: 'bg-blue-500',
      status: 'Active'
    },
    {
      icon: Lock,
      title: 'Secure Access Control',
      description: 'Biometric authentication and smart card systems for restricted areas',
      metric: '100% unauthorized access prevention',
      color: 'bg-purple-500',
      status: 'Active'
    },
    {
      icon: Eye,
      title: 'Passenger Safety App',
      description: 'SOS features, emergency contacts, and real-time location sharing for passengers',
      metric: '8.5M app downloads',
      color: 'bg-green-500',
      status: 'Active'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Shield',
      description: 'Advanced threat detection protecting critical railway infrastructure and data',
      metric: '99.9% uptime protection',
      color: 'bg-indigo-500',
      status: 'Active'
    }
  ];

  const alertLevels = [
    { level: 'Critical', count: 0, color: 'bg-red-500' },
    { level: 'High', count: 2, color: 'bg-orange-500' },
    { level: 'Medium', count: 7, color: 'bg-yellow-500' },
    { level: 'Low', count: 15, color: 'bg-green-500' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Safety & Security</h2>
        <p className="text-gray-600">Comprehensive protection through intelligent monitoring and rapid response</p>
      </div>

      {/* Alert Status */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Current Alert Status</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {alertLevels.map((alert, index) => (
            <div key={index} className="text-center">
              <div className={`w-8 h-8 ${alert.color} rounded-full mx-auto mb-2 flex items-center justify-center`}>
                <span className="text-white font-bold text-sm">{alert.count}</span>
              </div>
              <p className="text-xs font-medium text-gray-700">{alert.level}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {safetyFeatures.map((feature, index) => (
          <div key={index} className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                {feature.status}
              </span>
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

export default SafetySecurity;
