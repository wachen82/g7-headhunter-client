import React from 'react';
import {
    UseFormRegister,
    SubmitHandler,
    FieldErrors,
    UseFormHandleSubmit,
} from 'react-hook-form';

import { Form, Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Link,
    styled,
} from '@mui/material';
import { FormValues, InputFormData } from '../../../types/formValues';
import theme from '../../../theme';
import { routes } from '../../../routes/routesMap';

export const StyledButton = styled(Button)({
    textTransform: 'none',
});

interface CustomBasicFormProps {
    additionalFormInfo?: boolean;
    onSubmit: SubmitHandler<FormValues>;
    register: UseFormRegister<FormValues>;
    handleSubmit: UseFormHandleSubmit<FormValues>;
    errors: FieldErrors<FormValues>;
    buttonText: string;
    dataFormArr: InputFormData[];
}

export const CustomBasicForm = ({
                                    additionalFormInfo = false,
                                    register,
                                    handleSubmit,
                                    onSubmit,
                                    errors,
                                    buttonText,
                                    dataFormArr,
                                }: CustomBasicFormProps) => {
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {dataFormArr.map(({ inputText, htmlFor, type, key }, idx) => (
                <FormControl
                    key={`${key}-${idx}`}
                    sx={{
                        marginTop: '1rem',
                        backgroundColor: theme.palette.secondary.light,
                    }}
                    error={Boolean(errors[key as keyof typeof errors])}
                    variant='outlined'
                    fullWidth
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                        }}
                        htmlFor={htmlFor}
                    >
                        {inputText}
                    </InputLabel>
                    <Input
                        sx={{
                            marginTop: '1rem',
                            color: theme.palette.secondary.contrastText,
                            marginLeft: '1rem',
                        }}
                        disableUnderline={true}
                        id={type}
                        {...register(key)}
                        type={type}
                    />
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors[key as keyof typeof errors]?.message}
                    </FormHelperText>
                </FormControl>
            ))}
            {additionalFormInfo && (
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
                        fontSize='small'
                        component={RouterLink}
                        to={routes.resetPassword}
                    >
                        Zapomniałeś hasła?
                    </Link>
                </Box>
            )}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginTop: '1rem',
                }}
            >
                <StyledButton variant='contained' color='primary' type='submit'>
                    {buttonText}
                </StyledButton>
            </Box>
        </Form>
    );
};
