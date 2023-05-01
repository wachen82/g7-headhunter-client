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
} from '@mui/material'
import { registerSchema } from './register.schema'
import { useFormSubmit } from '../../../hooks/useFormSubmit'
import theme from '../../../theme'
import { IUserProfileEntity } from 'types'
import { Simulate } from 'react-dom/test-utils'
import submit = Simulate.submit

const StyledButton = styled(Button)({
    textTransform: 'none',
})

export const RegisterForm1 = () => {
    const defaultValues = {
        email: '',
        phone: '',
        firstName: '',
        lastName: '',
        githubUsername: '',
        portfolioUrls: [''],
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
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IUserProfileEntity>({
        resolver: yupResolver(registerSchema),
        defaultValues,
    })

    const onSubmit = (data: IUserProfileEntity) =>
        console.log('Form submited', data)

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
                    required
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                        }}
                        htmlFor="email"
                    >
                        Email
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
                            marginTop: '1rem',
                            color: theme.palette.secondary.contrastText,
                            marginLeft: '1rem',
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
                    required
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                        }}
                        htmlFor="firstName"
                    >
                        Imię
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
                    required
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                        }}
                        htmlFor="lastName"
                    >
                        Nazwisko
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
                    required
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                        }}
                        htmlFor="githubUsername"
                    >
                        GitHub Login
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
                <FormControl
                    sx={{
                        marginTop: '1rem',
                        color: theme.palette.secondary.contrastText,
                        backgroundColor: theme.palette.secondary.light,
                    }}
                    error={Boolean(errors.bio)}
                    variant="outlined"
                    fullWidth
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                        }}
                        htmlFor="bio"
                    ></InputLabel>
                    <TextField
                        sx={{
                            color: theme.palette.secondary.contrastText,
                        }}
                        id="bio"
                        label="Krótkie Bio"
                        type="text"
                        fullWidth
                        multiline
                    />

                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.bio?.message}
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
                        htmlFor="trybPracy"
                    >
                        {' '}
                        Tryb Pracy
                    </InputLabel>
                    <Select
                        sx={{ color: theme.palette.secondary.contrastText }}
                        id="trybPracy"
                        label="tryb Pracy"
                        value={workType}
                        onChange={handleChange}
                        placeholder={defaultValues.expectedTypeWork}
                    >
                        <MenuItem value="Na miejsc">Na miejscu</MenuItem>
                        <MenuItem value="Gotowość do przeprowadzki">
                            Gotowość do przeprowadzki
                        </MenuItem>
                        <MenuItem value="Wyłącznie zdalnie">
                            Wyłącznie zdalnie
                        </MenuItem>
                        <MenuItem value="Hybrydowo">Hybrydowo</MenuItem>
                        <MenuItem value="Bez znaczenia">Bez znaczenia</MenuItem>
                    </Select>
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.expectedTypeWork?.message}
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
                        htmlFor="targetWorkCity"
                    >
                        Oczekiwane Miasto Pracy
                    </InputLabel>
                    <Input
                        sx={{
                            marginTop: '1rem',
                            color: theme.palette.secondary.contrastText,
                            marginLeft: '1rem',
                        }}
                        disableUnderline={true}
                        id="targetWorkCity"
                        {...register('targetWorkCity')}
                        type="text"
                    />
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.targetWorkCity?.message}
                    </FormHelperText>
                </FormControl>
                <FormControl
                    sx={{
                        marginTop: '1rem',
                        backgroundColor: theme.palette.secondary.light,
                    }}
                    error={Boolean(errors.expectedSalary)}
                    variant="outlined"
                    fullWidth
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                        }}
                        htmlFor="expectedSalary"
                    >
                        Oczekiwane wynagrodzenie (zł)
                    </InputLabel>
                    <Input
                        sx={{
                            marginTop: '1rem',
                            color: theme.palette.secondary.contrastText,
                            marginLeft: '1rem',
                        }}
                        disableUnderline={true}
                        id="expectedSalary"
                        {...register('expectedSalary')}
                        type="number"
                    />
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.expectedSalary?.message}
                    </FormHelperText>
                </FormControl>
                <FormControl
                    sx={{
                        marginTop: '1rem',
                        backgroundColor: theme.palette.secondary.light,
                    }}
                    error={Boolean(errors.monthsOfCommercialExp)}
                    variant="outlined"
                    fullWidth
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                        }}
                        htmlFor="monthsOfCommercialExp"
                    >
                        Ilość miesiecy doświadczenia zawodowego
                    </InputLabel>
                    <Input
                        sx={{
                            marginTop: '1rem',
                            color: theme.palette.secondary.contrastText,
                            marginLeft: '1rem',
                        }}
                        disableUnderline={true}
                        id="monthsOfCommercialExp"
                        {...register('monthsOfCommercialExp')}
                        type="number"
                    />
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.monthsOfCommercialExp?.message}
                    </FormHelperText>
                </FormControl>
                <FormControl
                    sx={{
                        marginTop: '1rem',
                        backgroundColor: theme.palette.secondary.light,
                    }}
                    error={Boolean(errors.canTakeApprenticeship)}
                    variant="outlined"
                    fullWidth
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                        }}
                        htmlFor="trybPracy"
                    >
                        {' '}
                        Tryb Pracy
                    </InputLabel>
                    <Select
                        sx={{ color: theme.palette.secondary.contrastText }}
                        id="trybPracy"
                        label="tryb Pracy"
                        value={workType}
                        onChange={handleChange}
                        placeholder={defaultValues.canTakeApprenticeship}
                    >
                        <MenuItem value="NIE">NIE</MenuItem>
                        <MenuItem value="TAK">TAK</MenuItem>
                    </Select>
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.canTakeApprenticeship?.message}
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
            {/*<FormSteper />*/}
        </Box>
    )
}
