'use client';

import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const StoreLocatorContent = () => {
  const [location, setLocation] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentLocation = searchParams?.get('location') || '';

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
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your city"
        />
        <button type="submit">Search</button>
      </form>
      {filteredStores.length > 0 ? (
        <ul>
          {filteredStores.map((store) => (
            <li key={store.id}>
              <p>{store.name}</p>
              <p>{store.address}</p>
            </li>
          ))}
        </ul>
      ) : currentLocation ? (
        <p>No stores found in {currentLocation}.</p>
      ) : (
        <p>Enter a city to find stores.</p>
      )}
    </div>
  );
};

const StoreLocator = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <StoreLocatorContent />
    </Suspense>
  );
};

export default StoreLocator;
