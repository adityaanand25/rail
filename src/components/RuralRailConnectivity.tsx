import { Mountain, Wifi, Train, Users, MapPin, Zap } from 'lucide-react';

const RuralRailConnectivity = () => {
  const ruralFeatures = [
    {
      icon: Train,
      title: 'New Railway Lines',
      description: 'Extending railway network to connect remote villages and towns',
      metric: '2,500 km new lines planned',
      color: 'bg-green-500',
      progress: 35
    },
    {
      icon: Mountain,
      title: 'Challenging Terrain Solutions',
      description: 'Advanced engineering for mountainous and difficult geographical areas',
      metric: '150+ bridge projects',
      color: 'bg-blue-500',
      progress: 67
    },
    {
      icon: Wifi,
      title: 'Digital Infrastructure',
      description: 'High-speed internet and digital services in rural railway stations',
      metric: '800+ rural stations connected',
      color: 'bg-purple-500',
      progress: 42
    },
    {
      icon: Users,
      title: 'Community Development',
      description: 'Local employment generation and skill development programs',
      metric: '25,000+ jobs created',
      color: 'bg-orange-500',
      progress: 78
    },
    {
      icon: Zap,
      title: 'Electrification',
      description: 'Clean electric trains replacing diesel in rural and remote areas',
      metric: '1,800 km electrified',
      color: 'bg-yellow-500',
      progress: 58
    },
    {
      icon: MapPin,
      title: 'Last Mile Connectivity',
      description: 'Integrated transport solutions connecting railways to remote villages',
      metric: '300+ bus routes integrated',
      color: 'bg-red-500',
      progress: 29
    }
  ];

  const ruralProjects = [
    {
      project: 'Kashmir Rail Link',
      status: 'Under Construction',
      completion: '2025',
      investment: '₹28,000 Cr',
      impact: 'Connecting Kashmir valley to national network'
    },
    {
      project: 'Northeast Connectivity',
      status: 'In Progress',
      completion: '2026',
      investment: '₹45,000 Cr',
      impact: 'Linking all northeastern states'
    },
    {
      project: 'Tribal Area Development',
      status: 'Planning',
      completion: '2028',
      investment: '₹22,000 Cr',
      impact: 'Railway access to tribal regions'
    },
    {
      project: 'Desert Railway Lines',
      status: 'In Progress',
      completion: '2027',
      investment: '₹18,000 Cr',
      impact: 'Connecting remote desert areas'
    }
  ];

  const ruralImpact = [
    { metric: 'Villages Connected', value: '2,500+', description: 'Direct railway access', color: 'text-green-600' },
    { metric: 'Rural Employment', value: '25,000+', description: 'Jobs created in rural areas', color: 'text-blue-600' },
    { metric: 'Economic Growth', value: '35%', description: 'GDP increase in connected regions', color: 'text-purple-600' },
    { metric: 'Travel Time Reduced', value: '60%', description: 'Average reduction in journey time', color: 'text-orange-600' }
  ];

  const challenges = [
    { challenge: 'Geographical Barriers', solution: 'Advanced tunneling and bridge technology', status: 'Ongoing' },
    { challenge: 'Environmental Concerns', solution: 'Eco-friendly construction methods', status: 'Implemented' },
    { challenge: 'Land Acquisition', solution: 'Community engagement and fair compensation', status: 'Ongoing' },
    { challenge: 'Technical Complexity', solution: 'International expertise and innovation', status: 'Active' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Under Construction': return 'bg-blue-100 text-blue-700';
      case 'In Progress': return 'bg-green-100 text-green-700';
      case 'Planning': return 'bg-yellow-100 text-yellow-700';
      case 'Completed': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Rural Rail Connectivity</h2>
        <p className="text-gray-600">Bridging the digital and physical divide by connecting remote areas to the national railway network</p>
      </div>

      {/* Rural Impact Metrics */}
      <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Rural Development Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ruralImpact.map((impact, index) => (
            <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm">
              <p className={`text-2xl font-bold ${impact.color}`}>{impact.value}</p>
              <p className="text-xs text-gray-700 font-medium">{impact.metric}</p>
              <p className="text-xs text-gray-500 mt-1">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Major Rural Projects */}
      <div className="mb-6 p-4 bg-orange-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Major Rural Railway Projects</h3>
        <div className="space-y-3">
          {ruralProjects.map((project, index) => (
            <div key={index} className="p-3 bg-white rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{project.project}</h4>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
                <div>
                  <span className="font-medium">Completion:</span> {project.completion}
                </div>
                <div>
                  <span className="font-medium">Investment:</span> {project.investment}
                </div>
                <div className="md:col-span-1">
                  <span className="font-medium">Impact:</span> {project.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Challenges */}
      <div className="mb-6 p-4 bg-red-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Implementation Challenges & Solutions</h3>
        <div className="space-y-2">
          {challenges.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-gray-900">{item.challenge}</p>
                <p className="text-sm text-gray-600">{item.solution}</p>
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                item.status === 'Implemented' ? 'bg-green-100 text-green-700' :
                item.status === 'Active' ? 'bg-blue-100 text-blue-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Rural Connectivity Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ruralFeatures.map((feature, index) => (
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

      {/* Future Vision */}
      <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
        <h3 className="font-semibold text-green-800 mb-2">Vision 2030: Complete Rural Integration</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-lg font-bold text-green-600">100%</p>
            <p className="text-xs text-green-700">Districts connected by rail</p>
          </div>
          <div>
            <p className="text-lg font-bold text-green-600">50,000+</p>
            <p className="text-xs text-green-700">Rural jobs created</p>
          </div>
          <div>
            <p className="text-lg font-bold text-green-600">₹2L Cr</p>
            <p className="text-xs text-green-700">Economic impact in rural areas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuralRailConnectivity;
