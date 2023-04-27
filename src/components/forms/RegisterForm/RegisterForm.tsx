import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Form, Link as RouterLink } from 'react-router-dom'
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Link,
    MenuItem,
    Select,
    SelectChangeEvent,
    styled,
    TextField,
    Typography,
} from '@mui/material'
import { registerSchema } from './register.schema'
import { useFormSubmit } from '../../../hooks/useFormSubmit'
import theme from '../../../theme'
import { routes } from '../../../routes/routesMap'

const StyledButton = styled(Button)({
    textTransform: 'none',
})

type RegisterData = {
    email: string
    phoneNumber: string
    firstName: string
    lastName: string
    githubUsername: string
    portfolioUrls: string
    projectUrls: string
    bio: string
    expectedTypeWork: string
    targetWorkCity: string
    expectedContractType: string
    expectedSalary: string
    canTakeApprenticeship: string
    monthsOfCommercialExp: number
    education: string
    workExperience: string
    courses: string
}

export const RegisterForm = () => {
    const defaultValues = {
        email: '',
        phoneNumber: '',
        firstName: '',
        lastName: '',
        githubUsername: '',
        portfolioUrls: '',
        projectUrls: '',
        bio: '',
        expectedTypeWork: 'Bez znaczenia',
        targetWorkCity: '',
        expectedContractType: 'Brak preferencji',
        expectedSalary: '',
        canTakeApprenticeship: 'NIE',
        monthsOfCommercialExp: 0,
        education: '',
        workExperience: '',
        courses: '',
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterData>({
        resolver: yupResolver(registerSchema),
        defaultValues,
    })

    const { onSubmit } = useFormSubmit<RegisterData>({ reset, method: 'post' })

    const [workType, setWorkType] = React.useState('Brak preferencji')

    const handleChange = (event: SelectChangeEvent) => {
        setWorkType(event.target.value)
    }

    return (
        <Box width="700px" maxWidth="90%">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormControl
                    sx={{
                        backgroundColor: theme.palette.secondary.light,
                    }}
                    error={Boolean(errors.email)}
                    variant="outlined"
                    fullWidth
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                        }}
                        htmlFor="email"
                    >
                        Email *
                    </InputLabel>
                    <Input
                        sx={{
                            marginTop: '1rem',
                            color: theme.palette.secondary.contrastText,
                            marginLeft: '1rem',
                        }}
                        disableUnderline={true}
                        id="email"
                        {...register('email')}
                        type="email"
                    />
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.email?.message}
                    </FormHelperText>
                </FormControl>
                <FormControl
                    sx={{
                        marginTop: '1rem',
                        backgroundColor: theme.palette.secondary.light,
                    }}
                    error={Boolean(errors.phoneNumber)}
                    variant="outlined"
                    fullWidth
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                        }}
                        htmlFor="phoneNumber"
                    >
                        Numer Telefonu
                    </InputLabel>
                    <Input
                        sx={{
                            // marginTop: '1rem',
                            color: theme.palette.secondary.contrastText,
                            // marginLeft: '1rem',
                        }}
                        disableUnderline={true}
                        id="phoneNumber"
                        {...register('phoneNumber')}
                        type="number"
                    />
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.phoneNumber?.message}
                    </FormHelperText>
                </FormControl>
                <FormControl
                    sx={{
                        marginTop: '1rem',
                        backgroundColor: theme.palette.secondary.light,
                    }}
                    error={Boolean(errors.firstName)}
                    variant="outlined"
                    fullWidth
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                        }}
                        htmlFor="firstName"
                    >
                        Imię *
                    </InputLabel>
                    <Input
                        sx={{
                            marginTop: '1rem',
                            color: theme.palette.secondary.contrastText,
                            marginLeft: '1rem',
                        }}
                        disableUnderline={true}
                        id="firstName"
                        {...register('firstName')}
                        type="text"
                    />
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.firstName?.message}
                    </FormHelperText>
                </FormControl>
                <FormControl
                    sx={{
                        marginTop: '1rem',
                        backgroundColor: theme.palette.secondary.light,
                    }}
                    error={Boolean(errors.lastName)}
                    variant="outlined"
                    fullWidth
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                        }}
                        htmlFor="lastName"
                    >
                        Nazwisko *
                    </InputLabel>
                    <Input
                        sx={{
                            marginTop: '1rem',
                            color: theme.palette.secondary.contrastText,
                            marginLeft: '1rem',
                        }}
                        disableUnderline={true}
                        id="lastName"
                        {...register('lastName')}
                        type="text"
                    />
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.lastName?.message}
                    </FormHelperText>
                </FormControl>
                <FormControl
                    sx={{
                        marginTop: '1rem',
                        backgroundColor: theme.palette.secondary.light,
                    }}
                    error={Boolean(errors.githubUsername)}
                    variant="outlined"
                    fullWidth
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                        }}
                        htmlFor="githubUsername"
                    >
                        GitHub Login *
                    </InputLabel>
                    <Input
                        sx={{
                            marginTop: '1rem',
                            color: theme.palette.secondary.contrastText,
                            marginLeft: '1rem',
                        }}
                        disableUnderline={true}
                        id="githubUsername"
                        {...register('githubUsername')}
                        type="text"
                    />
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.githubUsername?.message}
                    </FormHelperText>
                </FormControl>
                <FormControl
                    sx={{
                        marginTop: '1rem',
                        backgroundColor: theme.palette.secondary.light,
                    }}
                    error={Boolean(errors.portfolioUrls)}
                    variant="outlined"
                    fullWidth
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                        }}
                        htmlFor="portfolioUrls"
                    >
                        Address URL do Portfolio
                    </InputLabel>
                    <Input
                        sx={{
                            marginTop: '1rem',
                            color: theme.palette.secondary.contrastText,
                            marginLeft: '1rem',
                        }}
                        disableUnderline={true}
                        id="portfolioUrls"
                        {...register('portfolioUrls')}
                        type="url"
                    />
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.portfolioUrls?.message}
                    </FormHelperText>
                </FormControl>
                <FormControl
                    sx={{
                        marginTop: '1rem',
                        backgroundColor: theme.palette.secondary.light,
                    }}
                    error={Boolean(errors.projectUrls)}
                    variant="outlined"
                    fullWidth
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                        }}
                        htmlFor="projectUrls"
                    >
                        Address URL do Projektu *
                    </InputLabel>
                    <Input
                        sx={{
                            marginTop: '1rem',
                            color: theme.palette.secondary.contrastText,
                            marginLeft: '1rem',
                        }}
                        disableUnderline={true}
                        id="projectUrls"
                        {...register('projectUrls')}
                        type="url"
                    />
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.projectUrls?.message}
                    </FormHelperText>
                </FormControl>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'end',
                        alignItems: 'center',
                        marginTop: '1rem',
                    }}
                >
                    <StyledButton
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Zapisz
                    </StyledButton>
                </Box>
            </Form>
        </Box>
    )
}
