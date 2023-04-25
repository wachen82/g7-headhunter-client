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
    styled,
    Typography,
} from '@mui/material'
import { logInSchema } from './log-in.shema'
import { useFormSubmit } from '../../../hooks/useFormSubmit'
import theme from '../../../theme'
import { routes } from '../../../routes/routesMap'

const StyledButton = styled(Button)({
    textTransform: 'none',
})

type LoginData = {
    email: string
    password: string
}

export const LoginForm = () => {
    const defaultValues = {
        email: '',
        password: '',
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginData>({
        resolver: yupResolver(logInSchema),
        defaultValues,
    })

    const { onSubmit } = useFormSubmit<LoginData>({ reset, method: 'post' })

    return (
        <Box width="400px" maxWidth="90%">
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
                    error={Boolean(errors.password)}
                    variant="outlined"
                    fullWidth
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                        }}
                        htmlFor="password"
                    >
                        Hasło
                    </InputLabel>
                    <Input
                        sx={{
                            // marginTop: '1rem',
                            color: theme.palette.secondary.contrastText,
                            // marginLeft: '1rem',
                        }}
                        disableUnderline={true}
                        id="password"
                        {...register('password')}
                        type="password"
                    />
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.password?.message}
                    </FormHelperText>
                </FormControl>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginTop: '1rem',
                        marginBottom: '2rem',
                    }}
                >
                    <Link
                        sx={{
                            textDecoration: 'none',
                            fontFamily: 'sans-serif',
                        }}
                        color={theme.palette.text.primary}
                        fontSize="small"
                        component={RouterLink}
                        to="#"
                    >
                        Zapomniałeś hasła?
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '1rem',
                    }}
                >
                    <Typography
                        color={theme.palette.text.primary}
                        fontSize="small"
                    >
                        Nie masz konta?
                        <Link
                            color={theme.palette.text.primary}
                            sx={{
                                marginLeft: '0.5rem',
                            }}
                            component={RouterLink}
                            to={routes.signUp}
                            fontWeight="bold"
                        >
                            Zarejestruj się
                        </Link>
                    </Typography>
                    <StyledButton
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Zaloguj się
                    </StyledButton>
                </Box>
            </Form>
        </Box>
    )
}
