import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const PerformanceChart = () => {
  const metrics = [
    { label: 'On-Time Performance', value: 94.2, change: +2.1, trend: 'up' },
    { label: 'Passenger Satisfaction', value: 4.6, change: +0.3, trend: 'up' },
    { label: 'Energy Efficiency', value: 87.8, change: +1.8, trend: 'up' },
    { label: 'Safety Score', value: 99.1, change: -0.2, trend: 'down' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Performance Metrics</h3>
      <div className="space-y-6">
        {metrics.map((metric, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">{metric.value}%</span>
                  <div className={`flex items-center ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    <span className="text-sm font-medium ml-1">{Math.abs(metric.change)}%</span>
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-1000 ${
                    metric.value >= 90 ? 'bg-green-500' : metric.value >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${metric.value}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceChart;