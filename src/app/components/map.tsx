"use client";
import React from 'react';
import Map from './open_map';

function MapW() {
  const shopLocations = [
    {
      Lat: 49.208307080790654,
      Lon: 1.1828966120648656,
      Nom: "Optic House: 3 Av. des Peupliers, 27400 Louviers"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* Titre de la section */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Notre position</h1>
          
          {/* Description */}
          <p className="text-gray-600 mb-6">
            Retrouvez nous sur Louviers à l'adresse: 3 Av. des Peupliers, 27400
          </p>

          {/* Map */}
          <div className="flex justify-center">
            <Map coordinates={shopLocations} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapW;
