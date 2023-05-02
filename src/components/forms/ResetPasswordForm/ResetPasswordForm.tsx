import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Box } from '@mui/material'
import { resetPasswordScheme } from './reset-password.shema'
import { FormValues } from '../../../types/formValues'
import { apiUrl } from '../../../config/api'
import { ENDPOINTS } from '../../../services/endpoints/endpoints'
import { CustomSnackBar } from '../../common/CustomSnackBar/CustomSnackBar'
import { CustomBasicForm } from '../../common/CustomBasicForm/CustomBasicForm'
import axios from 'axios'
import { resetPasswordData } from './reset-password-data'

export const ResetPasswordForm = () => {
    const [isWrongAccount, setIsWrongAccount] = useState<boolean>(false)

    const defaultValues = {
        password: '',
        repeatPassword: '',
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(resetPasswordScheme),
        defaultValues,
    })

    const onSubmit = async (data: FormValues): Promise<void> => {
        try {
            const url = `${apiUrl}${ENDPOINTS.setNewPwd}`.replace(
                '{token}',
                'tu-bedzie-token'
            )
            console.log(url)
            const response = await axios(url, {
                method: 'POST',
                data: data,
            })
            console.log(response)
        } catch (err) {
            throw new Error('Unexpected error occurred')
        }
    }

    return (
        <Box width="400px" maxWidth="90%">
            <CustomBasicForm
                onSubmit={onSubmit}
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                dataFormArr={resetPasswordData}
                buttonText="Przypomnij Hasło"
            />
            {isWrongAccount && (
                <CustomSnackBar
                    setAction={setIsWrongAccount}
                    actionState={isWrongAccount}
                    type="error"
                    message="Taki użytkownik nie istnieje"
                />
            )}
        </Box>
    )
}
