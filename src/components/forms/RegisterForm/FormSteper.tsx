import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { PortfolioForm } from './stepsForms/PortfolioForm'
import { ExpectedWorkForm } from './stepsForms/ExpectedWorkForm'
import { UserDataForm } from './stepsForms/UserDataForm'
import { Form } from 'react-router-dom'
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { defaultValues } from './FormDefaultValues'
import { useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import * as yup from 'yup'
import { string } from 'yup'
import { IUserProfileEntity1 } from './types'
import { IUserProfileEntity } from 'types'

export const RegisterForm = () => {
    const [activeStep, setActiveStep] = useState(0)
    const steps = ['Dane Osobowe', 'Portfolio', 'Preferowane Zatrudnienie']

    const validationSchema = [
        yup.object().shape({
            email: yup
                .string()
                .required('Email jest wymagany')
                .email('Podaj prawidłowy adres e-mail'),
            phoneNumber: yup
                .string()
                .email('Wpisany numer telefony nie jest prawidłowy'),
            firstName: yup.string().required('Imię jest wymagane'),
            lastName: yup.string().required('Nazwisko jest wymagane'),
        }),
        yup.object().shape({
            expectedTypeWork: yup
                .string()
                .required('Oczekiwany typ pracy jest wymagany'),
            targetWorkCity: yup.string(),
            expectedContractType: yup
                .string()
                .required('Rodzaj kontraktu jest wymagany'),
            expectedSalary: yup.number().positive(),
            canTakeApprenticeship: yup
                .string()
                .required('Odpowiedz TAK lub NIE')
                .default('NIE'),
        }),
        yup.object().shape({
            githubUsername: yup
                .string()
                .required('Nazwa użytkownika GitHub jest wymagana'),
            portfolioUrls: yup.array(
                string().url('Adress URL jest nieprawidłowy')
            ),
            projectUrls: yup.array(
                string()
                    .url('Adress URL jest nieprawidłowy')
                    .required('Address url do projektu jest wymagany')
            ),
            bio: yup.string(),
            education: yup.string(),
            workExperience: yup.string(),
            courses: yup.string(),
            monthsOfCommercialExp: yup
                .number()
                .positive()
                .integer()
                .required('Ilość miesięcy jest wymagana'),
        }),
    ]
    const currentValidationSchema = validationSchema[activeStep]
    const methods = useForm({
        shouldUnregister: false,
        defaultValues,
        resolver: yupResolver(currentValidationSchema),
        mode: 'onChange',
    })
    const onSubmit: SubmitHandler<IUserProfileEntity> = (
        data: IUserProfileEntity
    ) => {
        console.log(JSON.stringify(data))
        alert(JSON.stringify(data))
        handleNext()
    }
    const { handleSubmit, reset, trigger, watch } = methods

    const handleNext = () => {
        setActiveStep(activeStep + 1)
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1)
    }

    const handleReset = () => {
        setActiveStep(0)
        reset()
    }
    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <UserDataForm />
            case 1:
                return <PortfolioForm />
            case 2:
                return <ExpectedWorkForm />
            default:
                throw new Error('Niewłaściwy krok')
        }
    }

    return (
        <>
            <Box component="main" width="700px" maxWidth="sm" sx={{ mb: 4 }}>
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
                                    type="button"
                                >
                                    Zaloguj się
                                </Button>
                            </Box>
                        </>
                    ) : (
                        <FormProvider {...methods}>
                            <Form>{getStepContent(activeStep)}</Form>

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
                                        variant="contained"
                                        sx={{ mt: 3, ml: 1 }}
                                        type="submit"
                                        onClick={handleNext}
                                    >
                                        Zapisz
                                    </Button>
                                ) : (
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        Następny
                                    </Button>
                                )}
                            </Box>
                        </FormProvider>
                    )}
                </Paper>
            </Box>
        </>
    )
}
