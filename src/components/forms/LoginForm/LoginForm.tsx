import React, { useState } from 'react'
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
    Snackbar,
    styled,
    Typography,
} from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { logInSchema } from './log-in.shema'
import theme from '../../../theme'
import { routes } from '../../../routes/routesMap'
import { LogInFormValues } from '../../../types/logInFormValues'
import { apiUrl } from '../../../config/api'
import { ENDPOINTS } from '../../../services/endpoints/endpoints'

const StyledButton = styled(Button)({
    textTransform: 'none',
})

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export const LoginForm = () => {
    const [isWrongAccount, setIsWrongAccount] = useState(false)

    const handleClose = () => {
        setIsWrongAccount(false)
    }

    const defaultValues = {
        email: '',
        password: '',
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LogInFormValues>({
        resolver: yupResolver(logInSchema),
        defaultValues,
    })

    const onSubmit = async (data: LogInFormValues): Promise<any> => {
        try {
            const response = await fetch(`${apiUrl}${ENDPOINTS.signIn}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            if (response.ok) {
                setIsWrongAccount(false)
            } else {
                setIsWrongAccount(true)
            }
        } catch (err) {
            throw new Error('Unexpected error occurred')
        }
    }

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
                            marginTop: '1rem',
                            color: theme.palette.secondary.contrastText,
                            marginLeft: '1rem',
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
            {isWrongAccount && (
                <Snackbar
                    onClose={handleClose}
                    open={isWrongAccount}
                    autoHideDuration={4000}
                >
                    <Alert onClose={handleClose} severity="error">
                        Taki użytkownik nie istnieje
                    </Alert>
                </Snackbar>
            )}
        </Box>
    )
}
