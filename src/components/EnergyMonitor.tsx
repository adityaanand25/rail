import { X } from 'lucide-react';
import { useState } from 'react';

interface EnergyMonitorProps {
  onClose: () => void;
}

const EnergyMonitor: React.FC<EnergyMonitorProps> = ({ onClose }) => {
  const energyData = [
    { trainType: 'Passenger Express', engineType: 'WAP-7 (Electric)', consumption: 10, maxSpeed: 140, co2Emission: 0 },
    { trainType: 'Freight Train', engineType: 'WAG-9 (Electric)', consumption: 15, maxSpeed: 100, co2Emission: 0 },
    { trainType: 'Metro/Suburban Train', engineType: '3-Phase EMU', consumption: 7, maxSpeed: 80, co2Emission: 0 },
    { trainType: 'Diesel Passenger Train', engineType: 'WDP-4 (Diesel)', consumption: 11.1, maxSpeed: 130, co2Emission: 10.7 },
    { trainType: 'Diesel Freight Train', engineType: 'WDG-4 (Diesel)', consumption: 15.3, maxSpeed: 100, co2Emission: 14.7 },
  ];
  const [kilometers, setKilometers] = useState(1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 w-full max-w-4xl relative max-h-full overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Energy Monitor</h2>
        <div className="mb-4 p-4 border rounded-lg bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Calculate Total Consumption</h3>
          <div className="flex items-center space-x-4">
            <label htmlFor="kilometers" className="text-sm font-medium text-gray-700">Enter Kilometers:</label>
            <input
              type="number"
              id="kilometers"
              value={kilometers}
              onChange={(e) => setKilometers(Number(e.target.value) > 0 ? Number(e.target.value) : 1)}
              className="p-2 border border-gray-300 rounded-md w-32 focus:ring-blue-500 focus:border-blue-500"
              min="1"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Train Type</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engine Type</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Energy Consumption (kWh/km)</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Regenerative Savings (kWh/km)</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Consumption for {kilometers} km (kWh)</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max Speed (km/h)</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CO₂ Emission (kg/km)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {energyData.map((row, index) => {
                const isElectric = row.engineType.includes('(Electric)');
                const regenerativeSavings = isElectric ? row.consumption * 0.275 : 0;
                const netConsumption = row.consumption - regenerativeSavings;
                const totalConsumption = netConsumption * kilometers;

                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-4 px-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.trainType}</td>
                    <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">{row.engineType}</td>
                    <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">{row.consumption}</td>
                    <td className="py-4 px-4 whitespace-nowrap text-sm text-green-600">{isElectric ? regenerativeSavings.toFixed(2) : 'N/A'}</td>
                    <td className="py-4 px-4 whitespace-nowrap text-sm font-bold text-blue-600">{totalConsumption.toFixed(2)}</td>
                    <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">{row.maxSpeed}</td>
                    <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">{row.co2Emission}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-4 border rounded-lg bg-green-50">
            <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Regenerative Braking Energy Savings</h3>
            <p className="text-sm text-gray-700 mb-4">
                Electric trains with regenerative braking can recover ~3 Wh of energy per meter during deceleration — resulting in ~2.5–3 kWh saved per kilometer, reducing both energy cost and environmental impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                    <h4 className="font-semibold text-gray-800">Assumptions (WAP-7 Train):</h4>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Gross Consumption: ~10 kWh/km</li>
                        <li>Energy Recovery: ~25-30%</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800">Energy Saved:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Per Meter: ~2.5–3 Wh</li>
                        <li>Per Kilometer: ~2.5–3 kWh</li>
                    </ul>
                </div>
            </div>
            <div className="mt-4">
                <h4 className="font-semibold text-gray-800">What This Means:</h4>
                <p className="text-gray-600">
                    1 km of travel with regenerative braking can save enough energy to power a standard fan for 24 hours or charge 60+ mobile phones. On busy lines like the Delhi Metro, this saves up to 30-35% of total energy.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyMonitor;
