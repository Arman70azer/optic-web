"use client";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ServicesAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Service 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Description détaillée du Service 1.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Répétez pour d'autres services */}
    </div>
  );
}
