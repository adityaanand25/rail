import React, { useState } from 'react';
import { 
  Shield, 
  Phone, 
  AlertTriangle, 
  Eye, 
  Users, 
  CheckCircle,
  Camera,
  Heart,
  UserCheck,
  Zap,
  Bell
} from 'lucide-react';

interface AdvancedSafetyProps {
  onClose: () => void;
}

const AdvancedSafety: React.FC<AdvancedSafetyProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('emergency');
  const [emergencyData, setEmergencyData] = useState({
    location: '',
    issueType: '',
    severity: 'medium',
    description: ''
  });

  const emergencyFeatures = [
    {
      icon: Phone,
      title: 'SOS Emergency Button',
      description: 'One-touch emergency alert to Railway Protection Force and local authorities',
      status: 'Active',
      color: 'bg-red-500'
    },
    {
      icon: Eye,
      title: 'Smart Surveillance',
      description: 'AI-powered CCTV monitoring with real-time threat detection',
      status: 'Active',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: "Women's Safety",
      description: 'Dedicated women safety features with priority response protocols',
      status: 'Active',
      color: 'bg-pink-500'
    },
    {
      icon: Zap,
      title: 'Quick Response',
      description: 'Average response time of 2.3 minutes for emergency situations',
      status: 'Optimized',
      color: 'bg-orange-500'
    }
  ];

  const recentAlerts = [
    {
      id: 'SA001',
      type: 'Medical Emergency',
      location: 'Platform 3, New Delhi Station',
      time: '2 mins ago',
      status: 'Resolved',
      severity: 'high'
    },
    {
      id: 'SA002',
      type: 'Suspicious Activity',
      location: 'Coach B2, Train 12951',
      time: '15 mins ago',
      status: 'Investigating',
      severity: 'medium'
    },
    {
      id: 'SA003',
      type: 'Lost Child',
      location: 'Waiting Hall, Mumbai CST',
      time: '1 hour ago',
      status: 'Resolved',
      severity: 'medium'
    }
  ];

  const safetyMetrics = [
    { label: 'Response Time', value: '2.3 min', trend: 'down', color: 'text-green-600' },
    { label: 'Incident Rate', value: '0.12%', trend: 'down', color: 'text-green-600' },
    { label: 'Resolution Rate', value: '98.7%', trend: 'up', color: 'text-green-600' },
    { label: 'User Satisfaction', value: '4.8/5', trend: 'up', color: 'text-green-600' }
  ];

  const womenSafetyFeatures = [
    {
      icon: UserCheck,
      title: 'Ladies Special Coaches',
      description: 'Dedicated coaches with enhanced security monitoring',
      available: true
    },
    {
      icon: Bell,
      title: 'Emergency Alert System',
      description: 'Silent alarm system connected to RPF and GRP',
      available: true
    },
    {
      icon: Camera,
      title: 'Enhanced CCTV Coverage',
      description: '100% coverage in ladies coaches and waiting areas',
      available: true
    },
    {
      icon: Phone,
      title: '24x7 Helpline',
      description: 'Dedicated women helpline: 182',
      available: true
    }
  ];

  const renderEmergencyResponse = () => (
    <div className="space-y-6">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h4 className="font-semibold text-red-900 mb-4 flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2" />
          Emergency Response Center
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Type</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              value={emergencyData.issueType}
              onChange={(e) => setEmergencyData({...emergencyData, issueType: e.target.value})}
            >
              <option value="">Select Emergency Type</option>
              <option value="medical">Medical Emergency</option>
              <option value="security">Security Threat</option>
              <option value="fire">Fire/Smoke</option>
              <option value="harassment">Harassment</option>
              <option value="theft">Theft/Robbery</option>
              <option value="accident">Accident</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Severity Level</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              value={emergencyData.severity}
              onChange={(e) => setEmergencyData({...emergencyData, severity: e.target.value})}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Location Details</label>
          <input
            type="text"
            placeholder="Platform, Coach, or Area details"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            value={emergencyData.location}
            onChange={(e) => setEmergencyData({...emergencyData, location: e.target.value})}
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            placeholder="Describe the emergency situation..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            rows={3}
            value={emergencyData.description}
            onChange={(e) => setEmergencyData({...emergencyData, description: e.target.value})}
          />
        </div>
        <div className="mt-4 flex space-x-3">
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            Emergency SOS
          </button>
          <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 flex items-center">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Report Incident
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Recent Safety Alerts</h4>
          <div className="space-y-3">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-gray-900">{alert.type}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    alert.status === 'Resolved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {alert.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{alert.location}</p>
                <p className="text-xs text-gray-500">{alert.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Safety Metrics</h4>
          <div className="grid grid-cols-2 gap-4">
            {safetyMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                <p className="text-sm text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderWomenSafety = () => (
    <div className="space-y-6">
      <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
        <h4 className="font-semibold text-pink-900 mb-4 flex items-center">
          <Users className="h-5 w-5 mr-2" />
          Women's Safety Initiative
        </h4>
        <p className="text-pink-700 mb-4">
          Comprehensive safety measures designed specifically for women passengers with enhanced security protocols.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {womenSafetyFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-pink-200">
              <div className="flex items-start space-x-3">
                <div className="bg-pink-500 p-2 rounded-lg">
                  <feature.icon className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-gray-900">{feature.title}</h5>
                  <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                  {feature.available && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 mt-2">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Available
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-4">Emergency Contacts</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-white rounded-lg border">
            <Phone className="h-8 w-8 text-pink-600 mx-auto mb-2" />
            <div className="font-bold text-lg">182</div>
            <p className="text-sm text-gray-600">Women Helpline</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border">
            <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="font-bold text-lg">1512</div>
            <p className="text-sm text-gray-600">Railway Security</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border">
            <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <div className="font-bold text-lg">102</div>
            <p className="text-sm text-gray-600">Medical Emergency</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSmartSurveillance = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="font-semibold text-blue-900 mb-4 flex items-center">
          <Camera className="h-5 w-5 mr-2" />
          AI-Powered Surveillance Network
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">15,000+</div>
            <p className="text-sm text-gray-600">CCTV Cameras</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">99.2%</div>
            <p className="text-sm text-gray-600">Coverage Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">24/7</div>
            <p className="text-sm text-gray-600">Monitoring</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h5 className="font-semibold text-gray-900 mb-4">AI Detection Features</h5>
          <div className="space-y-3">
            {[
              'Suspicious behavior detection',
              'Unattended baggage identification',
              'Crowd density monitoring',
              'Facial recognition for wanted persons',
              'Violence and altercation detection',
              'Platform safety compliance'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h5 className="font-semibold text-gray-900 mb-4">Live Monitoring Status</h5>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Active Cameras</span>
              <span className="font-medium text-green-600">14,876 / 15,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">AI Analysis</span>
              <span className="font-medium text-blue-600">Real-time</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Threat Detection</span>
              <span className="font-medium text-orange-600">2 Active Alerts</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Response Teams</span>
              <span className="font-medium text-purple-600">18 Deployed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 w-full max-w-6xl relative max-h-full overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Advanced Safety & Security</h2>
              <p className="text-gray-600">Comprehensive safety ecosystem with AI-powered monitoring and emergency response</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        {/* Safety Features Overview */}
        <div className="p-6 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {emergencyFeatures.map((feature, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center mb-3`}>
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  {feature.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'emergency', label: 'Emergency Response', icon: AlertTriangle },
              { id: 'women', label: "Women's Safety", icon: Users },
              { id: 'surveillance', label: 'Smart Surveillance', icon: Camera }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'emergency' && renderEmergencyResponse()}
          {activeTab === 'women' && renderWomenSafety()}
          {activeTab === 'surveillance' && renderSmartSurveillance()}
        </div>
      </div>
    </div>
  );
};

export default AdvancedSafety;
