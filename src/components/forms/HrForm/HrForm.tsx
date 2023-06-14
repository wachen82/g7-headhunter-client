import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { hrSchema } from './hr-schema';
import { HrFormValues } from '../../../types/hrFormValues';
import { useSnackBar } from '../../../hooks/useSnackBar';
import { apiUrl } from '../../../config/api';
import { ENDPOINTS } from '../../../services/endpoints/endpoints';
import { SnackBarEnum } from '../../../types/formValues';
import { CustomSnackBar } from '../../common/CustomSnackBar/CustomSnackBar';
import { HrDataArr } from './hr-data';
import { CustomHrForm } from '../../common/CustomHrForm/CustomHrForm';

export const HrForm = () => {
    const {
        snackBarMessage,
        snackBarType,
        isSnackBarOpen,
        showSnackBar,
        hideSnackBar,
    } = useSnackBar();

    const defaultValues = {
        email: '',
        fullName: '',
        company: '',
        maxReservedStudents: '',
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<HrFormValues>({
        resolver: yupResolver(hrSchema),
        defaultValues,
    });

    const onSubmit = async (hrFormData: HrFormValues): Promise<void> => {
        try {
            const response = await fetch(`${apiUrl}${ENDPOINTS.sendHrForm}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(hrFormData),
                credentials: 'include',
            });
            const data = await response.json();
            if (response.status === 400) {
                showSnackBar(`${data.message}`, SnackBarEnum.ERROR_MESSAGE);
                return;
            }
            showSnackBar(
                `Headhunter ${data.fullName} poprawnie dodany do bazy`,
                SnackBarEnum.SUCCESS_MESSAGE,
            );
            reset(defaultValues);
        } catch (e) {
            showSnackBar(
                'Wystąpił nieoczekiwany błąd. Spróbuj ponownie później',
                SnackBarEnum.ERROR_MESSAGE,
            );
        }
    };

    return (
        <Box width='400px' maxWidth='90%' sx={{ margin: '0 auto' }}>
            <CustomHrForm
                onSubmit={onSubmit}
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                dataFormArr={HrDataArr}
                buttonText='Dodaj headhuntera'
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
    );
};
