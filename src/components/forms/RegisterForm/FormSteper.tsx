import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PortfolioForm } from './stepsForms/PortfolioForm';
import { ExpectedWorkForm } from './stepsForms/ExpectedWorkForm';
import { UserDataForm } from './stepsForms/UserDataForm';
import { useSnackBar } from '../../../hooks/useSnackBar';
import { Form, useParams } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { defaultValues } from './FormDefaultValues';
import { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { validationSchema } from './register.schema';
import { IUserProfileEntity1 } from './types';
import { apiUrl } from '../../../config/api';
import { ENDPOINTS } from '../../../services/endpoints/endpoints';
import { SnackBarEnum } from '../../../types/formValues';
import { CustomSnackBar } from '../../common/CustomSnackBar/CustomSnackBar';

export const RegisterForm = () => {
    const steps = ['Dane Osobowe', 'Portfolio', 'Preferowane Zatrudnienie'];
    const [activeStep, setActiveStep] = useState(0);
    const [submitted, setSubmitted] = useState(false);

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
    const { id, token } = useParams();

    const formSubmitHandler = async (
        data: IUserProfileEntity1
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
                }
            );
            if (response.status === 400) {
                const resData = await response.json();
                const message = await resData.message;
                showSnackBar(
                    `Sprawdź poprawność danych, headhunter nie został dodany do bazy. ${message}`,
                    SnackBarEnum.ERROR_MESSAGE
                );
                return;
            }
            if (!response.ok) {
                showSnackBar(
                    'Sprawdź poprawność danych, headhunter nie został dodany do bazy',
                    SnackBarEnum.ERROR_MESSAGE
                );
                setSubmitted(false);
            }
            showSnackBar(
                'Formularz wypełniony poprawnie, dziękujemy',
                SnackBarEnum.SUCCESS_MESSAGE
            );
            methods.reset(defaultValues);
            handleNext();
        } catch (e) {
            showSnackBar(
                'Sprawdź poprawność danych, headhunter nie został dodany do bazy',
                SnackBarEnum.ERROR_MESSAGE
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

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <UserDataForm />;
            case 1:
                return <PortfolioForm />;
            case 2:
                return <ExpectedWorkForm />;
            default:
                throw new Error('Niewłaściwy krok');
        }
    };

    return (
        <>
            <Box
                component="main"
                width="700px"
                maxWidth="sm"
                sx={{ mb: 4, mt: 8 }}
            >
                <Paper
                    variant="outlined"
                    sx={{
                        my: { xs: 3, md: 6 },
                        p: { xs: 2, md: 3 },
                    }}
                >
                    <Typography component="h1" variant="h4" align="center">
                        Formularz Rejestracyjny
                    </Typography>

                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {activeStep === steps.length ? (
                        <>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <CheckCircleIcon
                                    color="success"
                                    fontSize="large"
                                    sx={{ mb: 4, width: 120, height: 120 }}
                                />
                            </Box>
                            <Typography
                                variant="h4"
                                gutterBottom
                                justifyContent="center"
                                align="center"
                                mb={4}
                            >
                                Dziękujemy za wypełnienie formularza
                                rejestracyjnego.
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <Button
                                    variant="contained"
                                    href={'/sign-in'}
                                    sx={{ mt: 3, ml: 1 }}
                                    type="button" /**/
                                >
                                    Zaloguj się
                                </Button>
                            </Box>
                        </>
                    ) : (
                        <FormProvider {...methods}>
                            <Form
                                onSubmit={
                                    submitted
                                        ? methods.handleSubmit(
                                              formSubmitHandler
                                          )
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
                                            variant="contained"
                                            sx={{ mt: 3, ml: 1 }}
                                            type="submit"
                                        >
                                            Zapisz
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 3, ml: 1, opacity: 0.5 }}
                                            disabled={
                                                !methods.formState.isValid
                                            }
                                        >
                                            Następny
                                        </Button>
                                    )}
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
