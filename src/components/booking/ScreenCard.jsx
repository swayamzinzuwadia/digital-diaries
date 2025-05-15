import React from 'react';
import { useNavigate } from 'react-router-dom';
import { timeSlots } from '../../data/screenData';

const ScreenCard = ({ screen, selectedDate, bookedSlots = [] }) => {
  const navigate = useNavigate();
  
  const isSlotBooked = (slotId) => bookedSlots.includes(slotId);

  const handleSlotSelect = (slot) => {
    navigate('/checkout', {
      state: {
        screen,
        selectedDate,
        selectedSlot: slot
      }
    });
  };

  return (
    <div className="screen-card rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={screen.image}
          alt={screen.title}
          className="w-full h-64 object-cover screen-card-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12133B] to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-light">{screen.title}</h3>
        <p className="text-gray mb-4">{screen.description}</p>
        <div className="mb-4">
          <span className="text-xl font-bold text-primary">₹{screen.price}</span>
          <span className="text-gray"> / session</span>
        </div>
        
        <div className="space-y-4">
          {selectedDate ? (
            <div className="space-y-3">
              <h4 className="font-semibold text-lg text-light">Available Time Slots:</h4>
              <p className="text-gray mb-4">
                {selectedDate.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    disabled={isSlotBooked(slot.id)}
                    onClick={() => !isSlotBooked(slot.id) && handleSlotSelect(slot)}
                    className={`py-2 px-4 rounded-md text-sm font-medium transition-colors
                      ${
                        isSlotBooked(slot.id)
                          ? 'btn-disabled'
                          : 'btn-primary hover:bg-primary/90'
                      }`}
                  >
                    {slot.time}
                    {isSlotBooked(slot.id) && (
                      <span className="block text-xs mt-1">Booked</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-gray text-center p-4 border border-gray-700 rounded-md">
              Please select a date to view available time slots
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScreenCard; 