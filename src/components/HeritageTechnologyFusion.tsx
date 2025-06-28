import { Heart, Camera, Landmark, Train, Users, Star } from 'lucide-react';

const HeritageTechnologyFusion = () => {
  const heritageFeatures = [
    {
      icon: Landmark,
      title: 'Heritage Station Restoration',
      description: 'Preserving architectural beauty while integrating modern amenities and technology',
      metric: '25 heritage stations',
      color: 'bg-purple-500',
      status: 'Active'
    },
    {
      icon: Train,
      title: 'Luxury Heritage Trains',
      description: 'Premium tourist trains combining royal heritage with modern comfort and safety',
      metric: '12 luxury trains operational',
      color: 'bg-gold-500 bg-yellow-600',
      status: 'Active'
    },
    {
      icon: Camera,
      title: 'Virtual Heritage Tours',
      description: 'AR/VR experiences showcasing railway history and cultural significance',
      metric: '150+ virtual experiences',
      color: 'bg-blue-500',
      status: 'Expanding'
    },
    {
      icon: Users,
      title: 'Cultural Tourism Integration',
      description: 'Connecting heritage railways with local culture, festivals, and traditions',
      metric: '80+ cultural partnerships',
      color: 'bg-orange-500',
      status: 'Active'
    },
    {
      icon: Star,
      title: 'Premium Experience Design',
      description: 'World-class hospitality and services maintaining heritage authenticity',
      metric: '4.8/5 average rating',
      color: 'bg-pink-500',
      status: 'Active'
    },
    {
      icon: Heart,
      title: 'Community Heritage Programs',
      description: 'Engaging local communities in heritage preservation and storytelling',
      metric: '50+ community programs',
      color: 'bg-red-500',
      status: 'Growing'
    }
  ];

  const heritageRoutes = [
    {
      route: 'Palace on Wheels',
      region: 'Rajasthan',
      duration: '7 days',
      heritage: 'Royal Palaces & Forts',
      technology: 'Digital concierge, Smart amenities',
      rating: 4.9
    },
    {
      route: 'Golden Chariot',
      region: 'South India',
      duration: '6 days',
      heritage: 'Temples & Cultural Sites',
      technology: 'AR guides, IoT comfort systems',
      rating: 4.7
    },
    {
      route: 'Maharajas Express',
      region: 'Golden Triangle',
      duration: '8 days',
      heritage: 'Mughal Architecture',
      technology: 'Smart cabins, Digital entertainment',
      rating: 4.8
    },
    {
      route: 'Deccan Odyssey',
      region: 'Western India',
      duration: '7 days',
      heritage: 'Caves & Ancient Sites',
      technology: 'Virtual reality tours, Smart controls',
      rating: 4.6
    }
  ];

  const heritageStats = [
    { label: 'Heritage Stations Protected', value: '150+', description: 'Architectural preservation', color: 'text-purple-600' },
    { label: 'Tourist Revenue', value: '₹2,400 Cr', description: 'Annual heritage tourism', color: 'text-gold-600 text-yellow-600' },
    { label: 'International Visitors', value: '125K', description: 'Foreign tourists annually', color: 'text-blue-600' },
    { label: 'Heritage Employment', value: '8,500+', description: 'Jobs in heritage tourism', color: 'text-green-600' }
  ];

  const innovations = [
    {
      innovation: 'Digital Heritage Passport',
      description: 'QR-based journey documentation and souvenir collection',
      impact: '78% visitor engagement increase'
    },
    {
      innovation: 'AI-Powered Heritage Guides',
      description: 'Multilingual virtual guides with historical storytelling',
      impact: '45+ languages supported'
    },
    {
      innovation: 'Heritage Station Apps',
      description: 'Interactive apps for station exploration and history',
      impact: '300K+ app downloads'
    },
    {
      innovation: 'Cultural Calendar Integration',
      description: 'Sync travel with local festivals and cultural events',
      impact: '40% higher satisfaction'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-700';
      case 'Expanding': return 'bg-blue-100 text-blue-700';
      case 'Growing': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Heritage + Technology Fusion</h2>
        <p className="text-gray-600">Preserving India's rich railway heritage while embracing cutting-edge technology for world-class experiences</p>
      </div>

      {/* Heritage Statistics */}
      <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Heritage Tourism Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {heritageStats.map((stat, index) => (
            <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm">
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-gray-700 font-medium">{stat.label}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Heritage Routes */}
      <div className="mb-6 p-4 bg-yellow-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Signature Heritage Routes</h3>
        <div className="space-y-3">
          {heritageRoutes.map((route, index) => (
            <div key={index} className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{route.route}</h4>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-700">{route.rating}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-sm">
                <div>
                  <span className="font-medium text-gray-600">Region:</span>
                  <p className="text-gray-800">{route.region}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Duration:</span>
                  <p className="text-gray-800">{route.duration}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Heritage:</span>
                  <p className="text-gray-800">{route.heritage}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-600">Technology:</span>
                  <p className="text-gray-800">{route.technology}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Innovations */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Heritage Technology Innovations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {innovations.map((innovation, index) => (
            <div key={index} className="p-3 bg-white rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-1">{innovation.innovation}</h4>
              <p className="text-sm text-gray-600 mb-2">{innovation.description}</p>
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                {innovation.impact}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Heritage Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {heritageFeatures.map((feature, index) => (
          <div key={index} className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(feature.status)}`}>
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

      {/* Future Heritage Vision */}
      <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-gold-50 bg-gradient-to-r from-purple-50 to-yellow-50 rounded-lg border border-purple-200">
        <h3 className="font-semibold text-purple-800 mb-2">Heritage Vision 2030</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-lg font-bold text-purple-600">World Heritage Status</p>
            <p className="text-xs text-purple-700">UNESCO recognition for railway heritage</p>
          </div>
          <div>
            <p className="text-lg font-bold text-purple-600">Global Tourism Hub</p>
            <p className="text-xs text-purple-700">International heritage destination</p>
          </div>
          <div>
            <p className="text-lg font-bold text-purple-600">Cultural Bridge</p>
            <p className="text-xs text-purple-700">Connecting heritage with modern India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeritageTechnologyFusion;
