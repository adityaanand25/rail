import { Ticket, MapPin, Shield, Zap, Leaf, Brain, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import SafetyAlertModal from './SafetyAlertModal';
import EnergyMonitor from './EnergyMonitor';
import Sustainability from './Sustainability';
import SmartPassengerExperience from './SmartPassengerExperience';
import AdvancedSafety from './AdvancedSafety';

interface QuickActionsProps {
  onAction: (actionKey: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onAction }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEnergyMonitorOpen, setIsEnergyMonitorOpen] = useState(false);
  const [isSustainabilityOpen, setIsSustainabilityOpen] = useState(false);
  const [isSmartPassengerOpen, setIsSmartPassengerOpen] = useState(false);
  const [isAdvancedSafetyOpen, setIsAdvancedSafetyOpen] = useState(false);

  const actions = [
    { icon: Ticket, label: 'Book Ticket', color: 'bg-blue-500 hover:bg-blue-600', actionKey: 'book_ticket' },
    { icon: MapPin, label: 'Track Train', color: 'bg-green-500 hover:bg-green-600', actionKey: 'track_train' },
    { icon: Brain, label: 'Smart Experience', color: 'bg-purple-500 hover:bg-purple-600', actionKey: 'smart_passenger' },
    { icon: Shield, label: 'Advanced Safety', color: 'bg-red-500 hover:bg-red-600', actionKey: 'advanced_safety' },
    { icon: Zap, label: 'Energy Monitor', color: 'bg-yellow-500 hover:bg-yellow-600', actionKey: 'energy_monitor' },
    { icon: Leaf, label: 'Sustainability', color: 'bg-emerald-500 hover:bg-emerald-600', actionKey: 'sustainability' },
  ];

  const handleActionClick = (actionKey: string) => {
    if (actionKey === 'book_ticket') {
      window.open('https://www.irctc.co.in/', '_blank', 'noopener,noreferrer');
    } else if (actionKey === 'track_train') {
      window.open('https://www.railyatri.in/live-train-status', '_blank', 'noopener,noreferrer');
    } else if (actionKey === 'smart_passenger') {
      setIsSmartPassengerOpen(true);
    } else if (actionKey === 'advanced_safety') {
      setIsAdvancedSafetyOpen(true);
    } else if (actionKey === 'safety_alert') {
      setIsModalOpen(true);
    } else if (actionKey === 'energy_monitor') {
      setIsEnergyMonitorOpen(true);
    } else if (actionKey === 'sustainability') {
      setIsSustainabilityOpen(true);
    } else {
      onAction(actionKey);
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleActionClick(action.actionKey)}
              className={`p-4 rounded-lg ${action.color} text-white transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex flex-col items-center space-y-2`}
            >
              <action.icon className="h-6 w-6" />
              <span className="text-xs font-medium text-center">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
      <SafetyAlertModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {isEnergyMonitorOpen && <EnergyMonitor onClose={() => setIsEnergyMonitorOpen(false)} />}
      {isSustainabilityOpen && <Sustainability onClose={() => setIsSustainabilityOpen(false)} />}
      {isSmartPassengerOpen && <SmartPassengerExperience onClose={() => setIsSmartPassengerOpen(false)} />}
      {isAdvancedSafetyOpen && <AdvancedSafety onClose={() => setIsAdvancedSafetyOpen(false)} />}
    </>
  );
};

export default QuickActions;