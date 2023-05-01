import React, {useState} from 'react'
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'
import {Form} from 'react-router-dom'
import {
    Box,
    Button,
    Container,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    styled,
} from '@mui/material'
import {hrSchema} from './hr-schema'
import theme from '../../../theme'
import {HrFormValues} from '../../../types/hrFormValues'
import { apiUrl } from '../../../config/api'
import {CustomSnackBar} from '../../common/SnackBar/CustomSnackBar'

const StyledButton = styled(Button)({
    textTransform: 'none',
})

export const HrForm = () => {
    const [isWrongAccount, setIsWrongAccount] = useState<boolean>(false)

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
            const response = await fetch(`${apiUrl}/hr/form`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            setIsWrongAccount(!response.ok)
        } catch (err) {
            throw new Error('Unexpected error occurred')
        }
    }

    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Box >
                <Form onSubmit={handleSubmit(onSubmit)} >
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
                                color: theme.palette.secondary.contrastText,
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
                            backgroundColor: theme.palette.secondary.light,
                        }}
                        error={Boolean(errors.fullName)}
                        variant="outlined"
                        fullWidth
                    >
                        <InputLabel
                            sx={{
                                color: theme.palette.secondary.contrastText,
                            }}
                            htmlFor="fullName"
                        >
                            Imię i nazwisko
                        </InputLabel>
                        <Input
                            sx={{
                                color: theme.palette.secondary.contrastText,
                            }}
                            disableUnderline={true}
                            id="password"
                            {...register('fullName')}
                            type="fullName"
                        />
                        <FormHelperText
                            sx={{
                                backgroundColor: theme.palette.secondary.main,
                            }}
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
                            }}
                            htmlFor="company"
                        >
                            Nazwa firmy
                        </InputLabel>
                        <Input
                            sx={{
                                color: theme.palette.secondary.contrastText,
                            }}
                            disableUnderline={true}
                            id="company"
                            {...register('company')}
                            type="company"
                        />
                        <FormHelperText
                            sx={{
                                backgroundColor: theme.palette.secondary.main,
                            }}
                        >
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
                            }}
                            htmlFor="maxReservedStudents"
                        >
                            Limit dodawania osób
                        </InputLabel>
                        <Input
                            sx={{
                                color: theme.palette.secondary.contrastText,
                            }}
                            disableUnderline={true}
                            id="maxReservedStudents"
                            {...register('maxReservedStudents')}
                            type="maxReservedStudents"
                        />
                        <FormHelperText
                            sx={{
                                backgroundColor: theme.palette.secondary.main,
                            }}
                        >
                            {errors.maxReservedStudents?.message}
                        </FormHelperText>
                    </FormControl>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
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
                {isWrongAccount && (
                    <CustomSnackBar
                        setAction={setIsWrongAccount}
                        actionState={isWrongAccount}
                        type="error"
                        message="Błędnie wypełniony formularz"
                    />
                )}
            </Box>
        </Container>
    )
}
