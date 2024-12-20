"use client";

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

const StoreLocator = () => {
  const [location, setLocation] = useState('');
  const searchParams = useSearchParams();
  const currentLocation = searchParams.get('location'); // Get 'location' from the query

  const mockStores = [
    { id: 1, name: 'Store 1', address: '123 Main St, City A', city: 'karachi' },
    { id: 2, name: 'Store 2', address: '456 Elm St, City B', city: 'lahore' },
    { id: 3, name: 'Store 3', address: '789 Oak St, City C', city: 'karachi' },
  ];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ideally, update the URL or state here to reflect the location search
    console.log(`Searching stores for location: ${location}`);
  };

  const filteredStores = currentLocation
    ? mockStores.filter(
        (store) => store.city.toLowerCase() === currentLocation.toLowerCase()
      )
    : [];

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Store Locator</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your city"
          className="border p-2 rounded mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>
      {filteredStores.length > 0 ? (
        <ul className="list-disc pl-5">
          {filteredStores.map((store) => (
            <li key={store.id} className="mb-2">
              <p className="font-medium">{store.name}</p>
              <p className="text-gray-600">{store.address}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-red-500">No stores found in this location.</p>
      )}
    </div>
  );
};

export default StoreLocator;
