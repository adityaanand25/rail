import { Brain, Bot, Cog, BarChart3, Wrench, Zap } from 'lucide-react';

const AutomationAIOperations = () => {
  const aiFeatures = [
    {
      icon: Brain,
      title: 'Intelligent Scheduling',
      description: 'AI-powered train scheduling optimizing capacity, punctuality, and resource allocation',
      metric: '15% efficiency improvement',
      color: 'bg-purple-500',
      implementation: 'Active'
    },
    {
      icon: Wrench,
      title: 'Predictive Maintenance',
      description: 'ML algorithms predicting equipment failures before they occur, reducing downtime',
      metric: '30% maintenance cost reduction',
      color: 'bg-orange-500',
      implementation: 'Active'
    },
    {
      icon: Bot,
      title: 'Automated Operations',
      description: 'Robotic systems for cargo handling, cleaning, and routine operational tasks',
      metric: '650+ automated systems',
      color: 'bg-blue-500',
      implementation: 'Expanding'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Real-time data analysis providing actionable insights for operational optimization',
      metric: '99.2% data accuracy',
      color: 'bg-green-500',
      implementation: 'Active'
    },
    {
      icon: Cog,
      title: 'Smart Resource Management',
      description: 'AI-driven allocation of trains, crew, and infrastructure based on demand patterns',
      metric: '25% resource optimization',
      color: 'bg-red-500',
      implementation: 'Active'
    },
    {
      icon: Zap,
      title: 'Energy Optimization',
      description: 'Intelligent power management reducing energy consumption across the network',
      metric: '18% energy savings',
      color: 'bg-yellow-500',
      implementation: 'Active'
    }
  ];

  const operationalMetrics = [
    { metric: 'AI Decisions/Day', value: '2.8M', trend: '+23%', color: 'text-purple-600' },
    { metric: 'Automated Processes', value: '1,247', trend: '+45%', color: 'text-blue-600' },
    { metric: 'Prediction Accuracy', value: '94.2%', trend: '+8%', color: 'text-green-600' },
    { metric: 'Cost Reduction', value: '₹2,150 Cr', trend: '+31%', color: 'text-orange-600' }
  ];

  const aiApplications = [
    {
      area: 'Train Operations',
      applications: ['Dynamic scheduling', 'Route optimization', 'Speed control'],
      maturity: 85
    },
    {
      area: 'Maintenance',
      applications: ['Predictive analytics', 'Asset monitoring', 'Failure prevention'],
      maturity: 78
    },
    {
      area: 'Passenger Services',
      applications: ['Chatbots', 'Personalization', 'Journey planning'],
      maturity: 92
    },
    {
      area: 'Safety & Security',
      applications: ['Threat detection', 'Incident prediction', 'Emergency response'],
      maturity: 71
    },
    {
      area: 'Energy Management',
      applications: ['Load balancing', 'Consumption optimization', 'Grid integration'],
      maturity: 67
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Automation & AI for Rail Operations</h2>
        <p className="text-gray-600">Revolutionizing railway operations through artificial intelligence and intelligent automation</p>
      </div>

      {/* AI Metrics Dashboard */}
      <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">AI Operations Dashboard</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {operationalMetrics.map((metric, index) => (
            <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm">
              <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
              <p className="text-xs text-gray-700 font-medium">{metric.metric}</p>
              <p className="text-xs text-green-600 mt-1">{metric.trend}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Application Areas */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">AI Implementation Progress</h3>
        <div className="space-y-4">
          {aiApplications.map((app, index) => (
            <div key={index} className="p-3 bg-white rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{app.area}</h4>
                <span className="text-sm font-bold text-blue-600">{app.maturity}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${app.maturity}%` }}
                />
              </div>
              <div className="flex flex-wrap gap-1">
                {app.applications.map((application, appIndex) => (
                  <span
                    key={appIndex}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                  >
                    {application}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiFeatures.map((feature, index) => (
          <div key={index} className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                feature.implementation === 'Active' ? 'bg-green-100 text-green-700' :
                feature.implementation === 'Expanding' ? 'bg-blue-100 text-blue-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {feature.implementation}
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

      {/* Future Roadmap */}
      <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
        <h3 className="font-semibold text-purple-800 mb-2">AI Roadmap 2025-2030</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-lg font-bold text-purple-600">2025</p>
            <p className="text-xs text-purple-700">Autonomous Train Operations Pilot</p>
          </div>
          <div>
            <p className="text-lg font-bold text-purple-600">2027</p>
            <p className="text-xs text-purple-700">Full Network AI Integration</p>
          </div>
          <div>
            <p className="text-lg font-bold text-purple-600">2030</p>
            <p className="text-xs text-purple-700">World's Smartest Railway Network</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationAIOperations;
