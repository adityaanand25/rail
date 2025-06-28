import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SafetyAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SafetyAlertModal: React.FC<SafetyAlertModalProps> = ({ isOpen, onClose }) => {
  const [issueType, setIssueType] = useState('');
  const [pnr, setPnr] = useState('');
  const [coach, setCoach] = useState('');
  const [seat, setSeat] = useState('');
  const [mobile, setMobile] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log({ issueType, pnr, coach, seat, mobile });
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-200 w-full max-w-md m-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Report a Safety Concern</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <X size={24} />
          </button>
        </div>
        
        {isSubmitted ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Thank You!</h3>
            <p className="text-gray-700 mb-4">Your report has been submitted. Our team will get in touch with you shortly.</p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="issueType" className="block text-sm font-medium text-gray-700 mb-1">Type of Issue</label>
                <select
                  id="issueType"
                  value={issueType}
                  onChange={(e) => setIssueType(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled>Select an issue</option>
                  <option value="illegal-seat-occupancy">Illegal Seat Occupancy</option>
                  <option value="medical-emergency">Medical Emergency</option>
                  <option value="unattended-baggage">Unattended Baggage</option>
                  <option value="cleanliness-issue">Cleanliness Issue</option>
                  <option value="harassment">Harassment</option>
                  <option value="other">Other Disaster</option>
                </select>
              </div>
              <div>
                <label htmlFor="pnr" className="block text-sm font-medium text-gray-700 mb-1">PNR Number</label>
                <input
                  type="text"
                  id="pnr"
                  value={pnr}
                  onChange={(e) => setPnr(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your 10-digit PNR"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="coach" className="block text-sm font-medium text-gray-700 mb-1">Coach Number</label>
                  <input
                    type="text"
                    id="coach"
                    value={coach}
                    onChange={(e) => setCoach(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., S5"
                  />
                </div>
                <div>
                  <label htmlFor="seat" className="block text-sm font-medium text-gray-700 mb-1">Seat Number</label>
                  <input
                    type="text"
                    id="seat"
                    value={seat}
                    onChange={(e) => setSeat(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 32"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your 10-digit mobile number"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Submit Report
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SafetyAlertModal;
