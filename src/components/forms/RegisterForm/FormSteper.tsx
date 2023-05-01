import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Paper from '@mui/material/Paper'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { PortfolioForm } from './PortfolioForm'
import { ExpectedWorkForm } from './ExpectedWorkForm'
import { UserDataForm } from './UserDataForm'

import { Form, Link as RouterLink, redirect } from 'react-router-dom'
import {
    FormControl,
    Icon,
    Link,
    SelectChangeEvent,
    styled,
} from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema, userDataForm } from './register.schema'
import { IUserProfileEntity } from 'types'
import { useFormSubmit } from '../../../hooks/useFormSubmit'
import { RegisterForm1 } from './RegisterForm'
import { routes } from '../../../routes/routesMap'
import { defaultValues } from '../LoginForm/FormDefaultValues'
import { useState } from 'react'
import { DevTool } from '@hookform/devtools'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const StyledButton = styled(Button)({
    textTransform: 'none',
})
const steps = ['Dane Osobowe', 'Portfolio', 'Oczekiwane Zatrudnienie']

export const RegisterForm = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [data, setData] = useState(defaultValues)

    const userDataForm = useForm({})

    const expectedWorkForm = useForm()

    const portfolioForm = useForm()
    const onSubmit = (data: Partial<IUserProfileEntity>) => {
        console.log(data)
    }

    const handleNext = () => {
        setActiveStep(activeStep + 1)
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1)
    }

    const handleReset = () => {
        setActiveStep(0)
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

    // const {
    //     register,
    //     control,
    //     handleSubmit,
    //     reset,
    //     formState: { errors },
    // } = useForm<IUserProfileEntity>({
    //     resolver: yupResolver(registerSchema),
    //     defaultValues,
    // })

    // const { onSubmit } = useFormSubmit<IUserProfileEntity>({
    //     reset,
    //     method: 'post',
    // })

    return (
        <>
            <CssBaseline />
            <Box component="main" width="700px" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper
                    variant="outlined"
                    sx={{
                        my: { xs: 3, md: 6 },
                        p: { xs: 2, md: 3 },
                    }}
                >
                    <Form
                        onSubmit={
                            activeStep === 0
                                ? userDataForm.handleSubmit(onSubmit)
                                : activeStep === 1
                                ? expectedWorkForm.handleSubmit(onSubmit)
                                : portfolioForm.handleSubmit(onSubmit)
                        }
                        noValidate={true}
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
                            <React.Fragment>
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
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
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
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 3, ml: 1 }}
                                        type="submit"
                                    >
                                        {activeStep === steps.length - 1
                                            ? 'Zapisz'
                                            : 'Następny'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </Form>
                </Paper>
            </Box>
        </>
    )
}
