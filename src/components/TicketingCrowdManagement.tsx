import { Ticket, QrCode, Users, CreditCard, Clock, Smartphone } from 'lucide-react';

const TicketingCrowdManagement = () => {
  const ticketingFeatures = [
    {
      icon: Smartphone,
      title: 'Mobile Ticketing',
      description: 'Instant booking and digital tickets accessible via mobile app with offline capability',
      metric: '23M+ monthly users',
      color: 'bg-blue-500',
      adoption: '78%'
    },
    {
      icon: QrCode,
      title: 'QR Code Integration',
      description: 'Contactless entry and validation using QR codes for seamless passenger flow',
      metric: '89% faster boarding',
      color: 'bg-green-500',
      adoption: '85%'
    },
    {
      icon: CreditCard,
      title: 'Dynamic Pricing',
      description: 'AI-powered pricing based on demand, route popularity, and travel patterns',
      metric: '15% revenue increase',
      color: 'bg-purple-500',
      adoption: '45%'
    },
    {
      icon: Users,
      title: 'Crowd Analytics',
      description: 'Real-time crowd density monitoring and passenger flow prediction',
      metric: '750+ stations monitored',
      color: 'bg-orange-500',
      adoption: '67%'
    },
    {
      icon: Clock,
      title: 'Queue Management',
      description: 'Smart queuing systems with estimated wait times and priority lanes',
      metric: '40% reduction in wait time',
      color: 'bg-red-500',
      adoption: '58%'
    },
    {
      icon: Ticket,
      title: 'Multi-Modal Integration',
      description: 'Single ticket for train, bus, metro, and local transport integration',
      metric: '180+ partner operators',
      color: 'bg-indigo-500',
      adoption: '32%'
    }
  ];

  const crowdMetrics = [
    { station: 'Mumbai Central', density: 'High', passengers: '45,000', wait: '8 min' },
    { station: 'New Delhi', density: 'Medium', passengers: '38,000', wait: '5 min' },
    { station: 'Chennai Central', density: 'Low', passengers: '22,000', wait: '3 min' },
    { station: 'Kolkata', density: 'Medium', passengers: '31,000', wait: '6 min' },
    { station: 'Bangalore City', density: 'High', passengers: '42,000', wait: '7 min' }
  ];

  const ticketingStats = [
    { label: 'Digital Ticket Share', value: '78%', target: '95% by 2025', color: 'text-blue-600' },
    { label: 'Booking Success Rate', value: '99.2%', target: 'Maintain 99%+', color: 'text-green-600' },
    { label: 'Average Booking Time', value: '2.3 min', target: '< 2 min by 2024', color: 'text-purple-600' },
    { label: 'Refund Processing', value: '24 hrs', target: '< 6 hrs by 2024', color: 'text-orange-600' }
  ];

  const paymentMethods = [
    { method: 'UPI', percentage: 45, color: 'bg-blue-500' },
    { method: 'Debit Card', percentage: 25, color: 'bg-green-500' },
    { method: 'Credit Card', percentage: 15, color: 'bg-purple-500' },
    { method: 'Net Banking', percentage: 10, color: 'bg-orange-500' },
    { method: 'Wallet', percentage: 5, color: 'bg-red-500' }
  ];

  const getDensityColor = (density: string) => {
    switch (density) {
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Ticketing & Crowd Management</h2>
        <p className="text-gray-600">Smart ticketing solutions and intelligent crowd management for seamless passenger experience</p>
      </div>

      {/* Ticketing Statistics */}
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Ticketing Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ticketingStats.map((stat, index) => (
            <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm">
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-gray-700 font-medium">{stat.label}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.target}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time Crowd Status */}
      <div className="mb-6 p-4 bg-orange-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Live Crowd Status - Major Stations</h3>
        <div className="space-y-2">
          {crowdMetrics.map((station, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="font-medium text-gray-900">{station.station}</span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDensityColor(station.density)}`}>
                  {station.density}
                </span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>{station.passengers} passengers</span>
                <span>Wait: {station.wait}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods Distribution */}
      <div className="mb-6 p-4 bg-green-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Payment Methods Distribution</h3>
        <div className="space-y-2">
          {paymentMethods.map((payment, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-20 text-sm font-medium text-gray-700">{payment.method}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${payment.color}`}
                  style={{ width: `${payment.percentage}%` }}
                />
              </div>
              <span className="text-sm font-medium text-gray-900">{payment.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Ticketing Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ticketingFeatures.map((feature, index) => (
          <div key={index} className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Adoption</p>
                <p className="text-sm font-bold text-blue-600">{feature.adoption}</p>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
            
            {/* Adoption Progress Bar */}
            <div className="mb-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${feature.color} transition-all duration-1000`}
                  style={{ width: feature.adoption }}
                />
              </div>
            </div>
            
            <div className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full inline-block">
              {feature.metric}
            </div>
          </div>
        ))}
      </div>

      {/* Innovation Highlights */}
      <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
        <h3 className="font-semibold text-indigo-800 mb-2">Recent Innovations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-lg font-bold text-indigo-600">AI Chatbot</p>
            <p className="text-xs text-indigo-700">24/7 booking assistance</p>
          </div>
          <div>
            <p className="text-lg font-bold text-indigo-600">Face Recognition</p>
            <p className="text-xs text-indigo-700">Contactless ticket validation</p>
          </div>
          <div>
            <p className="text-lg font-bold text-indigo-600">Predictive Booking</p>
            <p className="text-xs text-indigo-700">Journey suggestions based on patterns</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketingCrowdManagement;
