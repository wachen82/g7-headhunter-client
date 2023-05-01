import * as React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import theme from '../../../theme'
import {
    Box,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    ThemeProvider,
} from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from './register.schema'
import { IUserProfileEntity } from 'types'
import { defaultValues } from '../LoginForm/FormDefaultValues'
import CssBaseline from '@mui/material/CssBaseline'
import { Form } from 'react-router-dom'
import { DevTool } from '@hookform/devtools'

export const UserDataForm = () => {
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
    return (
        <>
            <Box>
                <CssBaseline />
                <Typography variant="h6" mb={5}>
                    Dane Osobowe
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="firstName"
                            label="Imię"
                            required
                            error={Boolean(errors.firstName)}
                            variant="outlined"
                            type="text"
                            fullWidth
                            {...register('firstName')}
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
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            label="Nazwisko"
                            type="text"
                            fullWidth
                            variant="outlined"
                            {...register('lastName')}
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
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            label="Email"
                            required
                            error={Boolean(errors.firstName)}
                            variant="outlined"
                            type="email"
                            fullWidth
                            {...register('email')}
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
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="githubUsername"
                            label="Nazwa użytkownika GitHub "
                            type="text"
                            fullWidth
                            variant="outlined"
                            {...register('githubUsername')}
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
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="phone"
                            label="Numer telefonu"
                            type="number"
                            fullWidth
                            variant="outlined"
                            {...register('phone')}
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
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
