import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useSnackBar } from '../../../hooks/useSnackBar';
import { Form, useParams } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { defaultValues } from './FormDefaultValues';
import { useState } from 'react';
import { validationSchema } from './register.schema';
import { apiUrl } from '../../../config/api';
import { ENDPOINTS } from '../../../services/endpoints/endpoints';
import { SnackBarEnum } from '../../../types/formValues';
import { CustomSnackBar } from '../../common/CustomSnackBar/CustomSnackBar';
import { IUserProfileEntity } from 'types';
import { getStepContent } from '../../../utils/getStepContent';
import { CustomStepper } from './CustomStepper';
import { RegisterSuccess } from './RegisterSuccess';
import { StepperNavigation } from './StepperNavigation';

export const RegisterForm = () => {
    const steps = ['Dane Osobowe', 'Portfolio', 'Preferowane Zatrudnienie'];
    const [activeStep, setActiveStep] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const { id, token } = useParams();
    const currentValidationSchema = validationSchema[activeStep];
    const methods = useForm({
        shouldUnregister: false,
        defaultValues,
        resolver: yupResolver(currentValidationSchema),
        mode: 'all',
    });
    const {
        snackBarMessage,
        snackBarType,
        isSnackBarOpen,
        showSnackBar,
        hideSnackBar,
    } = useSnackBar();

    const formSubmitHandler = async (
        data: IUserProfileEntity,
    ): Promise<void> => {
        try {
            const response = await fetch(
                `${apiUrl}${ENDPOINTS.register}`
                    .replace('{userId}', `${id}`)
                    .replace('{token}', `${token}`),
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                    credentials: 'include',
                },
            );
            if (response.status === 400) {
                const resData = await response.json();
                const message = await resData.message;
                showSnackBar(
                    `Sprawdź poprawność danych, headhunter nie został dodany do bazy. ${message}`,
                    SnackBarEnum.ERROR_MESSAGE,
                );
                return;
            }
            if (!response.ok) {
                showSnackBar(
                    'Sprawdź poprawność danych, headhunter nie został dodany do bazy',
                    SnackBarEnum.ERROR_MESSAGE,
                );
                setSubmitted(false);
            }
            showSnackBar(
                'Formularz wypełniony poprawnie, dziękujemy',
                SnackBarEnum.SUCCESS_MESSAGE,
            );
            methods.reset(defaultValues);
            handleNext();
        } catch (e) {
            showSnackBar(
                'Sprawdź poprawność danych, headhunter nie został dodany do bazy',
                SnackBarEnum.ERROR_MESSAGE,
            );
            setSubmitted(false);
        }
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
        setSubmitted(false);
    };

    return (
        <>
            <Box
                component='main'
                width='700px'
                maxWidth='sm'
                sx={{ mb: 4, mt: 8 }}
            >
                <Paper
                    variant='outlined'
                    sx={{
                        my: { xs: 3, md: 6 },
                        p: { xs: 2, md: 3 },
                    }}
                >
                    <Typography component='h1' variant='h4' align='center'>
                        Formularz Rejestracyjny
                    </Typography>
                    <CustomStepper steps={steps} activeStep={activeStep} />
                    {activeStep === steps.length ? (
                        <RegisterSuccess />
                    ) : (
                        <FormProvider {...methods}>
                            <Form
                                onSubmit={
                                    submitted
                                        ? methods.handleSubmit(formSubmitHandler)
                                        : () => ({})
                                }
                            >
                                {getStepContent(activeStep)}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <StepperNavigation handleNext={handleNext} handleBack={handleBack}
                                                       activeStep={activeStep} steps={steps} setSubmitted={setSubmitted}
                                                       methods={methods} />
                                </Box>
                            </Form>
                        </FormProvider>
                    )}
                </Paper>
            </Box>
            {isSnackBarOpen && (
                <CustomSnackBar
                    setAction={hideSnackBar}
                    actionState={isSnackBarOpen}
                    message={snackBarMessage}
                    type={snackBarType}
                />
            )}
        </>
    );
};
