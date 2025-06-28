import React from 'react';
import { DivideIcon as LucideIcon, ArrowRight } from 'lucide-react';

interface InnovationCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  status: 'Active' | 'In Development' | 'Planned';
  impact: string;
}

const InnovationCard: React.FC<InnovationCardProps> = ({ title, description, icon: Icon, color, status, impact }) => {
  const statusColors = {
    'Active': 'bg-green-100 text-green-800',
    'In Development': 'bg-yellow-100 text-yellow-800',
    'Planned': 'bg-blue-100 text-blue-800'
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${color} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Impact</p>
          <p className="font-semibold text-gray-900">{impact}</p>
        </div>
        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
};

export default InnovationCard;