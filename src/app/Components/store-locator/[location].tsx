import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const StoreLocator = () => {
  const router = useRouter();
  const { location } = router.query; // Dynamic route parameter

  // Explicitly define state type
  const [stores, setStores] = useState<{ id: number; name: string; address: string; city: string }[]>([]);

  // Mock store data
  const mockStores = [
    { id: 1, name: 'Store 1', address: '123 Main St, City A', city: 'karachi' },
    { id: 2, name: 'Store 2', address: '456 Elm St, City B', city: 'lahore' },
    { id: 3, name: 'Store 3', address: '789 Oak St, City C', city: 'karachi' },
  ];

  useEffect(() => {
    if (location) {
      // Filter stores based on the location parameter
      const filteredStores = mockStores.filter(
        (store) => store.city.toLowerCase() === location.toString().toLowerCase()
      );
      setStores(filteredStores);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]); // Only track 'location' as a dependency

  // Handle undefined location during the initial render
  if (!location) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">
        Stores in: {location || 'Unknown Location'}
      </h1>
      {stores.length > 0 ? (
        <ul className="list-disc pl-5">
          {stores.map((store) => (
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
