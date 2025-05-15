import React, { useState, useEffect } from 'react';
import LocationSelector from '../components/booking/LocationSelector';
import ScreenCard from '../components/booking/ScreenCard';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getBookingsForDate } from '../services/bookingService';

const Booking = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookings, setBookings] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  // Get next 30 days as available dates
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  // Fetch bookings when date changes
  useEffect(() => {
    const fetchBookings = async () => {
      if (selectedDate) {
        setLoading(true);
        try {
          const data = await getBookingsForDate(selectedDate);
          setBookings(data);
        } catch (error) {
          console.error('Error fetching bookings:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchBookings();
  }, [selectedDate]);

  return (
    <div className="min-h-screen bg-primary">
      {!selectedLocation ? (
        <LocationSelector onLocationSelect={handleLocationSelect} />
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => setSelectedLocation(null)}
            className="mb-8 flex items-center text-primary hover:text-primary/90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Locations
          </button>

          <h2 className="text-3xl font-bold text-center mb-8 text-light">
            Available Screens at {selectedLocation.name}
          </h2>

          <div className="max-w-md mx-auto mb-12">
            <h3 className="text-xl font-semibold text-light mb-4">Select Your Preferred Date</h3>
            <DatePicker
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              minDate={new Date()}
              maxDate={new Date().setDate(new Date().getDate() + 30)}
              dateFormat="MMMM d, yyyy"
              includeDates={getAvailableDates()}
              placeholderText="Click to select a date"
              className="w-full p-3 rounded-md bg-secondary text-light border border-gray-700 focus:outline-none focus:border-primary"
              calendarClassName="bg-secondary border-gray-700 text-light"
              wrapperClassName="w-full"
            />
          </div>

          {loading ? (
            <div className="text-center text-light">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
              <p className="mt-2">Loading availability...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedLocation.screens.map((screen) => (
                <ScreenCard 
                  key={screen.id} 
                  screen={screen} 
                  selectedDate={selectedDate}
                  bookedSlots={bookings ? bookings[screen.id] : []}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Booking; 