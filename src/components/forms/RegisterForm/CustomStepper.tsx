import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import * as React from 'react';
import Stepper from '@mui/material/Stepper';

interface Props {
    steps: string[];
    activeStep: number;
}

export const CustomStepper = ({ steps, activeStep }: Props) => {
    return (
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
};
