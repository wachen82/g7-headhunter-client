import React, {useState} from 'react'
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'
import {Form} from 'react-router-dom'
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    styled,
} from '@mui/material'
import {hrSchema} from './hr-schema'
import theme from '../../../theme'
import {HrFormValues} from '../../../types/hrFormValues'
import {apiUrl} from "../../../config/api";
import {CustomSnackBar} from "../../common/SnackBar/CustomSnackBar";

const StyledButton = styled(Button)({
    textTransform: 'none',
})

export const HrForm = () => {
    const [isWrongData, setIsWrongData] = useState<boolean>(false)

    const defaultValues = {
        email: '',
        fullName: '',
        company: '',
        maxReservedStudents: '',
    }

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<HrFormValues>({
        resolver: yupResolver(hrSchema),
        defaultValues,
    })

    const onSubmit = async (data: HrFormValues): Promise<any> => {
        try {
            const response = await fetch(`${apiUrl}/register-hr`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            setIsWrongData(!response.ok)

        } catch (err) {
            throw new Error('Unexpected error occurred')
        }
    }

    return (
        <Box width="400px" maxWidth="90%" sx={{margin: "0 auto"}}>
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
                            padding: ".5rem 0",
                        }}
                        htmlFor="email"
                    >
                        Email
                    </InputLabel>
                    <Input
                        sx={{
                            color: theme.palette.secondary.contrastText,
                            backgroundColor: theme.palette.secondary.main,
                            padding: ".5rem 1rem 0",
                            marginBottom: ".5rem"
                        }}
                        disableUnderline={true}
                        id="email"
                        {...register('email')}
                        type="email"
                    />
                    <FormHelperText>
                        {errors.email?.message}
                    </FormHelperText>
                </FormControl>
                <FormControl
                    sx={{
                        backgroundColor: theme.palette.secondary.light,
                    }}
                    error={Boolean(errors.fullName)}
                    variant="outlined"
                    fullWidth
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                            padding: ".5rem 0",
                        }}
                        htmlFor="fullName"
                    >
                        Imię i nazwisko
                    </InputLabel>
                    <Input
                        sx={{
                            color: theme.palette.secondary.contrastText,
                            backgroundColor: theme.palette.secondary.main,
                            padding: ".5rem 1rem 0",
                            marginBottom: ".5rem"
                        }}
                        disableUnderline={true}
                        id="password"
                        {...register('fullName')}
                        type="fullName"
                    />
                    <FormHelperText
                    >
                        {errors.fullName?.message}
                    </FormHelperText>
                </FormControl>
                <FormControl
                    sx={{
                        backgroundColor: theme.palette.secondary.light,
                    }}
                    error={Boolean(errors.company)}
                    variant="outlined"
                    fullWidth
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                            padding: ".5rem 0",
                        }}
                        htmlFor="company"
                    >
                        Nazwa firmy
                    </InputLabel>
                    <Input
                        sx={{
                            color: theme.palette.secondary.contrastText,
                            backgroundColor: theme.palette.secondary.main,
                            padding: ".5rem 1rem 0",
                            marginBottom: ".5rem"
                        }}
                        disableUnderline={true}
                        id="company"
                        {...register('company')}
                        type="company"
                    />
                    <FormHelperText>
                        {errors.company?.message}
                    </FormHelperText>
                </FormControl>
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
                            padding: ".5rem 0",
                        }}
                        htmlFor="maxReservedStudents"
                    >
                        Limit dodawania osób
                    </InputLabel>
                    <Input
                        sx={{
                            color: theme.palette.secondary.contrastText,
                            backgroundColor: theme.palette.secondary.main,
                            padding: ".5rem 1rem 0",
                            marginBottom: ".5rem"
                        }}
                        disableUnderline={true}
                        id="maxReservedStudents"
                        {...register('maxReservedStudents')}
                        type="maxReservedStudents"
                    />
                    <FormHelperText>
                        {errors.maxReservedStudents?.message}
                    </FormHelperText>
                </FormControl>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: "1rem",
                    }}
                >
                    <StyledButton
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Dodaj headhuntera
                    </StyledButton>
                </Box>
            </Form>
            {isWrongData && (
                <CustomSnackBar
                    setAction={setIsWrongData}
                    actionState={isWrongData}
                    type="error"
                    message="Niestety nie udało się zarejestrować head huntera, spróbuj ponownie później"
                />
            )}
        </Box>
    )
}
