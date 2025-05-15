import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { screen, selectedDate, selectedSlot } = location.state || {};
  const [specialRequests, setSpecialRequests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to process the booking
    console.log('Booking submitted:', {
      screen,
      selectedDate,
      selectedSlot,
      specialRequests
    });
    // For now, just show a success message
    alert('Booking successful! Please sign in to complete your booking.');
    navigate('/');
  };

  if (!screen || !selectedDate || !selectedSlot) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-light text-center">
          <h2 className="text-2xl mb-4">Invalid Booking Information</h2>
          <button
            onClick={() => navigate('/booking')}
            className="btn-primary px-6 py-2 rounded-md"
          >
            Return to Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-3xl font-bold text-light mb-8">Confirm Your Booking</h2>
            
            {/* Booking Summary */}
            <div className="mb-8 p-6 bg-primary rounded-lg">
              <h3 className="text-xl font-semibold text-light mb-4">Booking Summary</h3>
              <div className="space-y-3 text-gray">
                <p className="flex justify-between">
                  <span className="text-light">Screen:</span>
                  <span>{screen.title}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-light">Date:</span>
                  <span>{selectedDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-light">Time:</span>
                  <span>{selectedSlot.time}</span>
                </p>
                <div className="border-t border-gray-700 my-3"></div>
                <p className="flex justify-between text-lg">
                  <span className="text-light font-semibold">Total Amount:</span>
                  <span className="text-primary font-bold">₹{screen.price}</span>
                </p>
              </div>
            </div>

            {/* Special Requests */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-light mb-2">Special Requests (Optional)</label>
                <textarea
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  rows="4"
                  placeholder="Any special requests or preferences for your booking..."
                  className="w-full p-3 rounded-md bg-primary text-light border border-gray-700 focus:outline-none focus:border-primary"
                />
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => navigate('/booking')}
                  className="text-primary hover:text-primary/90"
                >
                  ← Back to Booking
                </button>
                <button
                  type="submit"
                  className="btn-primary px-8 py-3 rounded-md"
                >
                  Proceed to Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 