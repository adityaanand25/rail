import React from 'react';
import { Clock, MapPin, Users, AlertTriangle } from 'lucide-react';

const LiveFeed = () => {
  const feedItems = [
    {
      id: 1,
      type: 'departure',
      message: 'Rajdhani Express departed from New Delhi at 16:55',
      time: '2 min ago',
      icon: Clock,
      color: 'text-green-600'
    },
    {
      id: 2,
      type: 'crowd',
      message: 'High crowd density detected at Mumbai Central',
      time: '5 min ago',
      icon: Users,
      color: 'text-yellow-600'
    },
    {
      id: 3,
      type: 'location',
      message: 'Shatabdi Express approaching Ghaziabad Junction',
      time: '8 min ago',
      icon: MapPin,
      color: 'text-blue-600'
    },
    {
      id: 4,
      type: 'alert',
      message: 'Track maintenance scheduled on Route 45',
      time: '12 min ago',
      icon: AlertTriangle,
      color: 'text-orange-600'
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Live Feed</h3>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {feedItems.map((item) => (
          <div key={item.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className={`p-2 rounded-full bg-gray-100 ${item.color}`}>
              <item.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 leading-relaxed">{item.message}</p>
              <p className="text-xs text-gray-500 mt-1">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveFeed;