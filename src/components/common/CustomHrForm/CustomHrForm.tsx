import React from 'react'
import {
    UseFormRegister,
    SubmitHandler,
    FieldErrors,
    UseFormHandleSubmit,
} from 'react-hook-form'

import { Form } from 'react-router-dom'
import {
    Box,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
} from '@mui/material'

import theme from '../../../theme'
import { HrFormValues, HrInputFormData } from '../../../types/hrFormValues'
import { StyledButton } from '../CustomBasicForm/CustomBasicForm'

interface CustomBasicFormProps {
    onSubmit: SubmitHandler<HrFormValues>
    register: UseFormRegister<HrFormValues>
    handleSubmit: UseFormHandleSubmit<HrFormValues>
    errors: FieldErrors<HrFormValues>
    buttonText: string
    dataFormArr: HrInputFormData[]
}

export const CustomHrForm = ({
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
                        marginTop: '.5rem',
                        backgroundColor: theme.palette.secondary.light,
                    }}
                    error={Boolean(errors[key as keyof typeof errors])}
                    variant="outlined"
                    fullWidth
                >
                    <InputLabel
                        sx={{
                            color: theme.palette.secondary.contrastText,
                            padding: '.5rem 0',
                        }}
                        htmlFor={htmlFor}
                    >
                        {inputText}
                    </InputLabel>
                    <Input
                        sx={{
                            color: theme.palette.secondary.contrastText,
                            backgroundColor: theme.palette.secondary.main,
                            padding: '.5rem 1rem 0',
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

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1rem',
                }}
            >
                <StyledButton variant="contained" color="primary" type="submit">
                    {buttonText}
                </StyledButton>
            </Box>
        </Form>
    )
}
