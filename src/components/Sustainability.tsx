
import { X, Leaf, Zap, Droplets } from 'lucide-react';

interface SustainabilityProps {
  onClose: () => void;
}

const Sustainability: React.FC<SustainabilityProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full max-h-[95vh] overflow-y-auto transform transition-all duration-300 ease-out scale-95 hover:scale-100">
        <div className="flex justify-between items-center mb-6 pb-4 border-b">
          <div className="flex items-center space-x-3">
            <Leaf className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-800">Sustainability Initiatives</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors rounded-full p-2">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-8 text-gray-700">
          <p className="text-lg leading-relaxed">
            Indian Railways is committed to a sustainable future by integrating eco-friendly practices across its operations. Our goal is to reduce our carbon footprint, conserve resources, and champion green energy to create a cleaner, more sustainable railway network for generations to come.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 hover:shadow-lg transition-shadow">
              <Zap className="h-10 w-10 text-green-500 mx-auto mb-3" />
              <h3 className="font-bold text-xl text-green-800 mb-2">Green Energy</h3>
              <p className="text-sm">Harnessing solar power for stations and promoting 100% electrification to achieve Net Zero Carbon Emissions by 2030.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow">
              <Droplets className="h-10 w-10 text-blue-500 mx-auto mb-3" />
              <h3 className="font-bold text-xl text-blue-800 mb-2">Water Conservation</h3>
              <p className="text-sm">Implementing water recycling plants and rainwater harvesting to become a water-positive organization.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 hover:shadow-lg transition-shadow">
              <Leaf className="h-10 w-10 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-bold text-xl text-yellow-800 mb-2">Afforestation & Waste Mgt.</h3>
              <p className="text-sm">Conducting massive afforestation drives and deploying smart waste management to protect our ecosystems.</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-2xl text-gray-800 mb-4">Our Commitment</h3>
            <ul className="list-disc list-inside space-y-2 text-left bg-gray-50 p-6 rounded-lg">
              <li className="flex items-start"><strong className="font-semibold mr-2 w-48">Net Zero Carbon Emitter:</strong> Striving to achieve this milestone by 2030.</li>
              <li className="flex items-start"><strong className="font-semibold mr-2 w-48">100% Electrification:</strong> Powering all broad gauge routes with clean energy.</li>
              <li className="flex items-start"><strong className="font-semibold mr-2 w-48">Circular Economy:</strong> Promoting sustainability through effective waste reduction and recycling.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
