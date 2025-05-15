// Mock database of bookings
const generateRandomBookings = () => {
  const bookings = {};
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  // Generate bookings for next 30 days
  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dateKey = date.toISOString().split('T')[0];
    
    // Check if the date is in the current month
    const isCurrentMonth = date.getMonth() === currentMonth && date.getFullYear() === currentYear;
    
    if (isCurrentMonth) {
      // For current month dates, randomly decide if this date should have bookings
      if (Math.random() > 0.3) { // 70% chance of having bookings
        bookings[dateKey] = {
          'sand-screen': getRandomBookedSlots(),
          'greece-theme': getRandomBookedSlots(),
          'park-and-watch-wadala': getRandomBookedSlots(),
          'grass-theme': getRandomBookedSlots(),
          'hot-air-balloon': getRandomBookedSlots(),
          'park-and-watch-dahisar': getRandomBookedSlots()
        };
      } else {
        // Empty bookings for this date
        bookings[dateKey] = {
          'sand-screen': [],
          'greece-theme': [],
          'park-and-watch-wadala': [],
          'grass-theme': [],
          'hot-air-balloon': [],
          'park-and-watch-dahisar': []
        };
      }
    } else {
      // All future dates (including May) are unbooked
      bookings[dateKey] = {
        'sand-screen': [],
        'greece-theme': [],
        'park-and-watch-wadala': [],
        'grass-theme': [],
        'hot-air-balloon': [],
        'park-and-watch-dahisar': []
      };
    }
  }
  
  return bookings;
};

// Helper function to get random booked slots
const getRandomBookedSlots = () => {
  const slots = ['1', '2', '3', '4'];
  const numBooked = Math.floor(Math.random() * 3); // 0-2 slots booked
  const bookedSlots = [];
  
  for (let i = 0; i < numBooked; i++) {
    const randomIndex = Math.floor(Math.random() * slots.length);
    bookedSlots.push(slots[randomIndex]);
    slots.splice(randomIndex, 1);
  }
  
  return bookedSlots;
};

// Initialize the mock database
const mockBookings = generateRandomBookings();

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getBookingsForDate = async (date) => {
  // Simulate API call delay
  await delay(500);
  
  const dateKey = date.toISOString().split('T')[0];
  return mockBookings[dateKey] || {
    'sand-screen': [],
    'greece-theme': [],
    'park-and-watch-wadala': [],
    'grass-theme': [],
    'hot-air-balloon': [],
    'park-and-watch-dahisar': []
  };
};

// For debugging - log the generated bookings
console.log('Generated Bookings:', mockBookings); 