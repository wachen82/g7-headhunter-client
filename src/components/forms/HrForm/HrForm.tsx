import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Box } from '@mui/material'
import { hrSchema } from './hr-schema'
import { HrFormValues } from '../../../types/hrFormValues'
import { useSnackBar } from '../../../hooks/useSnackBar'
import { apiUrl } from '../../../config/api'
import { ENDPOINTS } from '../../../services/endpoints/endpoints'
import { SnackBarEnum } from '../../../types/formValues'
import { CustomSnackBar } from '../../common/CustomSnackBar/CustomSnackBar'
import { HrDataArr } from './hr-data'
import { CustomHrForm } from '../../common/CustomHrForm/CustomHrForm'

export const HrForm = () => {
    const {
        snackBarMessage,
        snackBarType,
        isSnackBarOpen,
        showSnackBar,
        hideSnackBar,
    } = useSnackBar()

    const defaultValues = {
        email: '',
        fullName: '',
        company: '',
        maxReservedStudents: '',
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<HrFormValues>({
        resolver: yupResolver(hrSchema),
        defaultValues,
    })

    const onSubmit = async (data: HrFormValues): Promise<void> => {
        try {
            const response = await fetch(`${apiUrl}${ENDPOINTS.sendHrForm}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            if (!response.ok) {
                showSnackBar(
                    'Sprawdź poprawność danych, headhunter nie został dodany do bazy',
                    SnackBarEnum.ERROR_MESSAGE
                )
            }
            const res = await response.json()
            showSnackBar(`${res.message}`, SnackBarEnum.SUCCESS_MESSAGE)
            reset(defaultValues)
        } catch (e) {
            showSnackBar(
                'Sprawdź poprawność danych, headhunter nie został dodany do bazy',
                SnackBarEnum.ERROR_MESSAGE
            )
        }
    }

    return (
        <Box width="400px" maxWidth="90%" sx={{ margin: '0 auto' }}>
            <CustomHrForm
                onSubmit={onSubmit}
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                dataFormArr={HrDataArr}
                buttonText="Dodaj headhuntera"
            />
            {isSnackBarOpen && (
                <CustomSnackBar
                    setAction={hideSnackBar}
                    actionState={isSnackBarOpen}
                    message={snackBarMessage}
                    type={snackBarType}
                />
            )}
        </Box>
    )
}
