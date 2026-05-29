import React, { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Paper,
  IconButton
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const WelcomeModal = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // Show modal on first visit
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
      setOpen(true);
      localStorage.setItem('hasSeenWelcome', 'true');
    }
  }, []);

  const steps = [
    {
      title: t('welcome.whatIsCap'),
      content: t('welcome.capExplanation')
    },
    {
      title: t('welcome.howToUse'),
      content: t('welcome.howToUseContent')
    },
    {
      title: t('welcome.bridgingFunds'),
      content: t('welcome.bridgingContent')
    }
  ];

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
0, boxShadow: 24,
        p: 3,
      }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">{t('welcome.title')}</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>{step.title}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box mt={2} mb={2}>
          <Typography>{steps[step]?.content}</Typography>
        </Box>
        <Box>
          <Button onClick={handleBack} disabled={step === 0}>
            {t('button.back')}
          </Button>
          <Button onClick={handleNext} disabled={step === steps.length - 1}>
            {t('button.next')}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default WelcomeModal;