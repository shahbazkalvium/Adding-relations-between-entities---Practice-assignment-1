import React from 'react';
import DestinationCard from './DestinationCard';

const destinations = [
  {
    id: 1,
    name: "Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    description: "Tropical paradise with beautiful beaches and vibrant culture",
    price: "$1,200"
  },
  {
    id: 2,
    name: "Paris",
    location: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "City of love, art, and exquisite cuisine",
    price: "$1,500"
  },
  {
    id: 3,
    name: "Santorini",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    description: "Stunning sunsets and white-washed architecture",
    price: "$1,800"
  },
  {
    id: 4,
    name: "Tokyo",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    description: "Modern city with rich traditions and amazing food",
    price: "$2,000"
  },
  {
    id: 5,
    name: "Dubai",
    location: "United Arab Emirates",
    image: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQAD0MrcA3HzbhFUGp6qVCNh3Jref-liYHABTnZEM1f77gnVBvbrcU1E2NKuiDVon8O",
    description: "A mix of the modern living and traditional Arabic culture",
    price: "$3,000"
  },
  {
    id: 6,
    name: "Seoul",
    location: "South Korea",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/%EB%8D%95%EC%88%98%EA%B6%81%EC%9D%98_%EA%B0%80%EC%9D%84.jpg/640px-%EB%8D%95%EC%88%98%EA%B6%81%EC%9D%98_%EA%B0%80%EC%9D%84.jpg",
    description: "Vibrant city blending modern architecture, rich history and dynamic culture",
    price: "$5,000"
  }
];

function DestinationContainer() {
  return (
    <div className="destination-container">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
}

export default DestinationContainer;