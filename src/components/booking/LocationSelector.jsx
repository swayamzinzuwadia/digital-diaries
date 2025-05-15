import React from 'react';
import { locations } from '../../data/screenData';

const LocationSelector = ({ onLocationSelect }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-light">Select Your Location</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {locations.map((location) => (
          <div
            key={location.id}
            className="location-card rounded-lg shadow-lg overflow-hidden cursor-pointer"
            onClick={() => onLocationSelect(location)}
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-light">{location.name}</h3>
              <p className="text-gray mb-4">
                {location.screens.length} Unique Screens Available
              </p>
              <ul className="list-disc list-inside text-gray">
                {location.screens.map((screen) => (
                  <li key={screen.id}>{screen.title}</li>
                ))}
              </ul>
              <button className="mt-6 w-full btn-primary py-2 px-4 rounded-md transition-colors">
                Select Location
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSelector; 