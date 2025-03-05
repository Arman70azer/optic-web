"use client"; // Assure que le composant est exécuté côté client

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import styles from "../page.module.css";

interface Coordinate {
  Lat: number;
  Lon: number;
  Nom: string;
}

interface MapProps {
  coordinates: Coordinate[];
}

export default function OpenMap({ coordinates }: MapProps) {
  const mapRef = useRef<any>(null);
  const [leaflet, setLeaflet] = useState<typeof import("leaflet") | null>(null);

  useEffect(() => {
    // Import dynamique de leaflet uniquement côté client
    import("leaflet").then((L) => {
      setLeaflet(L);

      if (!mapRef.current) {
        const map = L.map("map").setView([49.208307080790654, 1.1828966120648656], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        // Définir l'icône personnalisée
        const customIcon = L.icon({
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png", // Icône par défaut ou une autre URL
          iconSize: [25, 41], // Taille de l'icône
          iconAnchor: [12, 41], // Point d'ancrage de l'icône
          popupAnchor: [1, -34], // L'ancrage du popup par rapport à l'icône
        });

        // Ajout des marqueurs avec l'icône personnalisée
        coordinates.forEach(({ Lat, Lon, Nom }) => {
          L.marker([Lat, Lon], { icon: customIcon })
            .addTo(map)
            .bindPopup(Nom);
        });

        mapRef.current = map;
      }
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [coordinates]);

  return <div id="map" className={styles.map_container}/>;
}
