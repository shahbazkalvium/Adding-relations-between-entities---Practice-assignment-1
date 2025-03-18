import React from 'react';

function DestinationCard({ destination }) {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} className="destination-image" />
      <h3 className="destination-name">{destination.name}</h3>
      <p className="destination-location">{destination.location}</p>
      <p className="destination-description">{destination.description}</p>
      <p className="destination-price">{destination.price}</p>
    </div>
  );
}

export default DestinationCard;