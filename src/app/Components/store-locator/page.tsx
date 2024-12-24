'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const StoreLocator = () => {
  const [location, setLocation] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentLocation = searchParams?.get('location') || ''; // Provide a fallback value

  // Move mock stores outside the component to prevent re-creation on each render
  const mockStores = [
    { id: 1, name: 'Store 1', address: '123 Main St, City A', city: 'karachi' },
    { id: 2, name: 'Store 2', address: '456 Elm St, City B', city: 'lahore' },
    { id: 3, name: 'Store 3', address: '789 Oak St, City C', city: 'karachi' },
  ];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (location.trim()) {
      router.push(`/Components/store-locator?location=${location}`);
    }
  };

  const filteredStores = currentLocation
    ? mockStores.filter(
        (store) => store.city.toLowerCase() === currentLocation.toLowerCase()
      )
    : [];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Store Locator</h1>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row mb-6 gap-4">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your city"
          className="border border-gray-300 rounded-md p-2 w-full sm:w-auto"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>
      {filteredStores.length > 0 ? (
        <ul className="list-disc pl-5">
          {filteredStores.map((store) => (
            <li key={store.id} className="mb-4">
              <p className="font-semibold text-lg">{store.name}</p>
              <p className="text-gray-600">{store.address}</p>
            </li>
          ))}
        </ul>
      ) : currentLocation ? (
        <p className="text-red-500">No stores found in {currentLocation}.</p>
      ) : (
        <p className="text-gray-500">Enter a city to find nearby stores.</p>
      )}
    </div>
  );
};

export default StoreLocator;
