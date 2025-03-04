"use client";
import { Tabs, Tab, Typography, Box } from '@mui/material';
import { useState } from 'react';

export default function ServicesTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '80%',
        margin: '0 auto', // Centrer le composant horizontalement
        textAlign: 'center', // Centrer le texte
        backgroundColor: '#f4f4f4', // Ajout d'une couleur de fond légère pour un meilleur contraste
        borderRadius: 8,
        padding: 3,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Ombre légère pour un effet moderne
      }}
    >
      {/* Tabs avec défilement horizontal si nécessaire */}
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Services tabs"

        variant="scrollable" // Active le défilement horizontal
        scrollButtons="auto" // Ajoute des boutons de défilement automatique
      >
        <Tab label="Consultation" />
        <Tab label="Vente de Lunettes" />
        <Tab label="Lentilles de Contact" />
      </Tabs>

      {value === 0 && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h6">Consultation en Optique</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Nos opticiens professionnels vous offrent des consultations détaillées pour
            évaluer votre vision et vous recommander les meilleures solutions pour
            améliorer votre confort visuel.
          </Typography>
        </Box>
      )}
      {value === 1 && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h6">Vente de Lunettes</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Découvrez notre large sélection de lunettes de vue et de soleil pour
            tous les styles et besoins. Nous proposons des montures de qualité et un
            service de personnalisation pour un ajustement parfait.
          </Typography>
        </Box>
      )}
      {value === 2 && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h6">Lentilles de Contact</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Nos opticiens vous aident à choisir les lentilles de contact adaptées à
            votre mode de vie et à vos besoins visuels, tout en offrant des conseils
            pour un confort optimal.
          </Typography>
        </Box>
      )}
    </Box>
  );
}
