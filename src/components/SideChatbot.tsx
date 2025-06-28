import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Loader, Settings } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface SideChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
}

const SideChatbot: React.FC<SideChatbotProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I am your AI Railway Assistant powered by Gemini. I can help you with train schedules, booking information, travel tips, and more. How can I assist you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      let response;
      
      if (apiKey.trim()) {
        // Use Gemini API for real responses
        response = await getGeminiResponse(inputText);
      } else {
        // Use mock responses
        response = getMockResponse(inputText);
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again or check your API key configuration.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const getGeminiResponse = async (userInput: string): Promise<string> => {
    const prompt = `
      You are an expert AI assistant for Indian Railways. You have comprehensive knowledge about:
      - Train schedules, routes, and timings
      - Ticket booking procedures and classes
      - Station facilities and amenities
      - Safety guidelines and emergency procedures
      - Food and catering services
      - Accessibility features for differently-abled passengers
      - Real-time updates and notifications
      - Travel tips and recommendations

      User question: ${userInput}

      Please provide a helpful, accurate, and concise response. If the question is not related to railways, politely redirect the conversation back to railway topics.
    `;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  };

  const getMockResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('book') || input.includes('ticket')) {
      return "To book tickets, you can use the IRCTC website or mobile app. For the demo, I recommend trying our Smart Passenger Experience feature which includes AI-powered booking assistance. Would you like me to guide you through the booking process?";
    }
    
    if (input.includes('train') && (input.includes('status') || input.includes('running'))) {
      return "You can check train running status using our Real-Time Tracking feature. Just enter your train number (e.g., 12951 for Mumbai Rajdhani). For live updates, I can also provide notifications about delays, platform changes, and arrival times.";
    }
    
    if (input.includes('delay') || input.includes('late')) {
      return "Train delays can happen due to various factors like weather, technical issues, or traffic congestion. Our AI system provides real-time updates and can suggest alternative routes. Would you like me to check the status of a specific train?";
    }
    
    if (input.includes('food') || input.includes('meal')) {
      return "Indian Railways offers various food options: pantry car meals, e-catering services, and platform vendors. For AC classes, meals are often included. You can pre-order food through IRCTC e-catering. What type of food preferences do you have?";
    }
    
    if (input.includes('seat') || input.includes('coach')) {
      return "Different classes offer various seating options: Sleeper (3-tier), AC 3-tier, AC 2-tier, AC 1st Class, and Chair Car. Our Smart Passenger Experience can recommend the best seats based on your preferences. What is your preferred travel class?";
    }
    
    if (input.includes('platform') || input.includes('station')) {
      return "Platform information is usually announced 30-60 minutes before departure. Our app provides real-time platform updates and station navigation. Which station are you asking about?";
    }
    
    if (input.includes('emergency') || input.includes('help') || input.includes('sos')) {
      return "For emergencies: Pull the alarm chain, contact RPF (Railway Protection Force) at 1322, or use the emergency contact on coach. Our Safety features include SOS buttons and 24/7 helpline. Are you facing an emergency right now?";
    }
    
    if (input.includes('price') || input.includes('fare') || input.includes('cost')) {
      return "Train fares vary by class, distance, and train type. Our AI Journey Planner can show you fare comparisons and the best value options. Which route are you planning to travel?";
    }
    
    return "Thank you for your question! I'm here to help with all your railway needs. For the most accurate and personalized responses, consider configuring the Gemini API key in the settings. You can ask me about train schedules, bookings, travel tips, safety information, or any other railway-related queries. What specific information do you need?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickQuestions = [
    "How do I book train tickets?",
    "Check train running status",
    "What food options are available?",
    "How to find my platform?",
    "Emergency contact information",
    "Seat reservation tips"
  ];

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={onToggle}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-40 ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
        } text-white`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl border-l border-gray-200 transition-transform duration-300 z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Bot className="h-6 w-6" />
            <div>
              <h3 className="font-semibold">Railway AI Assistant</h3>
              <p className="text-xs text-blue-100">
                {apiKey ? 'Powered by Gemini AI' : 'Demo Mode'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowApiKeyInput(!showApiKeyInput)}
            className="p-1 hover:bg-blue-700 rounded"
          >
            <Settings className="h-5 w-5" />
          </button>
        </div>

        {/* API Key Configuration */}
        {showApiKeyInput && (
          <div className="bg-yellow-50 border-b border-yellow-200 p-3">
            <div className="space-y-2">
              <label className="block text-xs font-medium text-gray-700">
                Gemini API Key (Optional)
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your Gemini API key..."
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500">
                Configure for enhanced AI responses. Leave empty for demo mode.
              </p>
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ height: 'calc(100vh - 180px)' }}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-2 ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.sender === 'bot' && (
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-blue-600" />
                </div>
              )}
              
              <div
                className={`max-w-xs lg:max-w-md px-3 py-2 rounded-lg text-sm ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>

              {message.sender === 'user' && (
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-4 w-4 text-gray-600" />
                </div>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="h-4 w-4 text-blue-600" />
              </div>
              <div className="bg-gray-100 px-3 py-2 rounded-lg rounded-bl-none">
                <Loader className="h-4 w-4 animate-spin text-gray-600" />
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="p-3 border-t border-gray-200 bg-gray-50">
            <p className="text-xs font-medium text-gray-700 mb-2">Quick Questions:</p>
            <div className="space-y-1">
              {quickQuestions.slice(0, 3).map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="w-full text-left text-xs text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-2 rounded transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about trains, booking, schedules..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !inputText.trim()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default SideChatbot;
