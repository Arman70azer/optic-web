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
            améliorer votre confort visuel. Nous utilisons des équipements de dernière
            technologie pour réaliser des tests de vision approfondis, permettant ainsi
            de détecter toute anomalie ou trouble visuel que vous pourriez rencontrer.
            Que vous ayez besoin de lunettes, de lentilles de contact ou de toute autre
            solution optique, notre équipe est là pour vous guider à chaque étape.
            </Typography>

            <Typography variant="body1" sx={{ marginTop: 2 }}>
            En plus de la correction visuelle, nous vous offrons des conseils personnalisés
            sur l'entretien de vos lunettes et lentilles, afin d'assurer leur longévité et
            votre confort au quotidien. Notre objectif est de vous fournir un service
            complet, rapide et courtois, en mettant toujours l'accent sur votre bien-être visuel.
            </Typography>

            <Typography variant="body1" sx={{ marginTop: 2 }}>
            Vous pouvez prendre rendez-vous avec nos opticiens à tout moment. Nous nous engageons
            à vous offrir une consultation rapide et efficace, sans compromettre la qualité de
            nos services. Vous repartirez avec des recommandations adaptées à vos besoins, afin
            d'optimiser votre expérience visuelle au quotidien.
            </Typography>

        </Box>
      )}
      {value === 1 && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h6">Vente de Lunettes</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Découvrez notre large sélection de lunettes de vue et de soleil pour
            tous les styles et besoins. Nous proposons des montures de qualité, disponibles dans
            une variété de formes, couleurs et matériaux pour s'adapter à votre personnalité et
            à vos préférences. Que vous cherchiez des lunettes de vue classiques, modernes ou
            des lunettes de soleil tendance, vous trouverez certainement ce qui vous convient
            parmi notre gamme étendue.
            </Typography>

            <Typography variant="body1" sx={{ marginTop: 2 }}>
            Notre équipe d'opticiens qualifiés vous accompagne dans le choix de vos lunettes
            en fonction de votre prescription, de votre mode de vie et de vos goûts. Nous offrons
            également un service de personnalisation pour un ajustement parfait, incluant des
            conseils sur le choix des matériaux de monture, des verres spécifiques (anti-reflet, 
            protection UV, verres progressifs, etc.) et l'optimisation du confort visuel.
            </Typography>

            <Typography variant="body1" sx={{ marginTop: 2 }}>
            De plus, nous proposons des lunettes à la fois pratiques et esthétiques pour toute
            la famille, avec des modèles adaptés aux enfants, aux adultes et aux seniors. Nos
            opticiens prennent le temps de vous expliquer les différentes options et vous aider
            à trouver les lunettes qui conviennent à votre morphologie et à vos habitudes.
            </Typography>

            <Typography variant="body1" sx={{ marginTop: 2 }}>
            Vous pouvez également profiter de notre service après-vente, qui comprend l'ajustement
            gratuit de vos lunettes et des conseils d'entretien pour prolonger leur durée de vie.
            Notre objectif est de vous offrir une expérience complète et satisfaisante pour que
            vous puissiez porter vos lunettes avec confort et style.
            </Typography>

        </Box>
      )}
      {value === 2 && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h6">Lentilles de Contact</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Nos opticiens vous aident à choisir les lentilles de contact adaptées à votre mode de vie,
            vos besoins visuels et votre confort. Que vous soyez un utilisateur débutant ou expérimenté,
            nous vous accompagnons dans la sélection de lentilles de contact qui correspondent à votre
            prescription médicale et à vos attentes en termes de confort et de performance visuelle.
            </Typography>

            <Typography variant="body1" sx={{ marginTop: 2 }}>
            Nous proposons une large gamme de lentilles, allant des lentilles souples aux lentilles rigides
            pour des besoins spécifiques, y compris les lentilles toriques pour les astigmates, les lentilles
            multifocales et les lentilles pour les yeux sensibles. Nos opticiens vous aident à comprendre
            les avantages de chaque type de lentille, afin que vous puissiez faire le meilleur choix en fonction
            de votre mode de vie.
            </Typography>

            <Typography variant="body1" sx={{ marginTop: 2 }}>
            Notre équipe vous offre également des conseils sur l'entretien et l'hygiène des lentilles de contact,
            vous expliquant les bonnes pratiques pour éviter les infections et maximiser la durée de vie de vos
            lentilles. Si vous rencontrez des problèmes ou des inconforts, nous sommes là pour vous apporter
            des solutions personnalisées.
            </Typography>

            <Typography variant="body1" sx={{ marginTop: 2 }}>
            De plus, nous vous proposons des consultations régulières pour évaluer la santé de vos yeux et
            vous garantir que vos lentilles de contact continuent de répondre à vos besoins. Notre objectif
            est de vous offrir une expérience agréable et sans souci, pour que vous puissiez profiter pleinement
            de votre confort visuel au quotidien.
            </Typography>

        </Box>
      )}
    </Box>
  );
}
