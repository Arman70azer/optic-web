"use client";
import React, { useState } from "react";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import styles from "../page.module.css";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Vous pouvez gérer la soumission du formulaire ici (par exemple, envoyer les données à un serveur).
    setSubmitted(true);
  };

  return (
    <Box
      sx={{
        padding: 5,
        borderRadius: 2,
        width: '90%',
        margin: '0 auto',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.16)', // Ombre légère autour du formulaire
      }}
    >

      <Box className={styles.contactContainer}>
        <Typography variant="h6" className={styles.contactText}>
          <span className={styles.contactTextStrong}>Téléphone:</span> 09 67 38 27 05
        </Typography>
        <Typography variant="h6" className={styles.contactText}>
          <span className={styles.contactTextStrong}>Adresse:</span> 3 Av. des Peupliers, 27400 Louviers
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nom"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Envoyer
            </Button>
          </Grid>
        </Grid>
      </form>
      {submitted && (
        <Typography variant="body1" color="green" align="center" sx={{ marginTop: 2 }}>
          Merci pour votre message, nous reviendrons vers vous bientôt !
        </Typography>
      )}
    </Box>
  );
}
