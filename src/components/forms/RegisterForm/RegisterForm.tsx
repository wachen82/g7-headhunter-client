import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Form } from 'react-router-dom'
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    SelectChangeEvent,
    styled,
} from '@mui/material'
import { registerSchema } from './register.schema'
import { useFormSubmit } from '../../../hooks/useFormSubmit'
import theme from '../../../theme'
import { IUserProfileEntity } from 'types'

const StyledButton = styled(Button)({
    textTransform: 'none',
})

export const RegisterForm = () => {
    const defaultValues = {
        email: '',
        phone: '',
        firstName: '',
        lastName: '',
        githubUsername: '',
        portfolioUrls: [],
        projectUrls: ['', ''],
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
    } = useForm<IUserProfileEntity>({
        resolver: yupResolver(registerSchema),
        defaultValues,
    })

    const { onSubmit } = useFormSubmit<IUserProfileEntity>({
        reset,
        method: 'post',
    })

    const [workType, setWorkType] = React.useState('Brak preferencji')

    const handleChange = (event: SelectChangeEvent) => {
        setWorkType(event.target.value)
    }

    return (
        <Box width="700px" maxWidth="90%">
            <Form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
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
                    error={Boolean(errors.phone)}
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
                        id="phone"
                        {...register('phone')}
                        type="number"
                    />
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.phone?.message}
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
                        htmlFor="projectUrls-FE"
                    >
                        Address URL do Projektu (Frontend) *
                    </InputLabel>
                    <Input
                        sx={{
                            marginTop: '1rem',
                            color: theme.palette.secondary.contrastText,
                            marginLeft: '1rem',
                        }}
                        disableUnderline={true}
                        id="projectUrls-FE"
                        {...register('projectUrls.0')}
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
                        htmlFor="projectUrls-BE"
                    >
                        Address URL do Projektu (Backend) *
                    </InputLabel>
                    <Input
                        sx={{
                            marginTop: '1rem',
                            color: theme.palette.secondary.contrastText,
                            marginLeft: '1rem',
                        }}
                        disableUnderline={true}
                        id="projectUrls-BE"
                        {...register('projectUrls.1')}
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
