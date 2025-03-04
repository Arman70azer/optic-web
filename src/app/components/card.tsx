"use client";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress'; // Import du cercle de chargement
import { useState, useEffect } from 'react';

export default function RemiCard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Assurez-vous que le chargement est effectué uniquement côté client
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center', // Centrer horizontalement
      alignItems: 'center', // Centrer verticalement
    }}>
      <Card sx={{ maxWidth: 420 }}>
        <CardMedia
          sx={{ height: 244, position: 'relative' }}
          image="https://coiffeur-coulonges.com/wp-content/uploads/2022/10/coiffures-homme-lunettes.jpg"
          title="Remi"
          onLoad={() => setLoading(false)} // Cela sera appelé après le chargement de l'image
        >
          {loading && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}>
              <CircularProgress color="primary" />
            </div>
          )}
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {"Remi"}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {"Professionnel Optique"}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
