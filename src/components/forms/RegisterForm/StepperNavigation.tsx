import Button from '@mui/material/Button';
import { UseFormReturn} from 'react-hook-form';
import * as React from 'react';
import { IUserProfileEntity } from 'types';

interface Props {
  handleNext: () => void;
  handleBack: () => void;
  activeStep: number;
  steps: string[];
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  methods:  UseFormReturn<IUserProfileEntity, any>;
}
export const StepperNavigation = ({handleBack,handleNext,activeStep,steps, setSubmitted, methods}: Props) => {
  return (<>
      {activeStep !== 0 && (
          <Button
              onClick={handleBack}
              sx={{ mt: 3, ml: 1 }}
          >
              Poprzedni
          </Button>
      )}
      {activeStep === steps.length - 1 ? (
          <Button
              disabled={
                  !methods.formState.isValid ||
                  !methods.formState.isDirty
              }
              onClick={() => setSubmitted(true)}
              variant='contained'
              sx={{ mt: 3, ml: 1 }}
              type='submit'
          >
              Zapisz
          </Button>
      ) : (
          <Button
              variant='contained'
              onClick={handleNext}
              sx={{ mt: 3, ml: 1, opacity: 0.5 }}
              disabled={
                  !methods.formState.isValid
              }
          >
              Następny
          </Button>
      )}
  </>)
}
