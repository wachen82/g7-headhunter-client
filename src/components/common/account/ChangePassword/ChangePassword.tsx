import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { apiUrl } from '../../../../config/api';
import { ENDPOINTS } from '../../../../services/endpoints/endpoints';
import { Button, Container, Typography } from '@mui/material';
import { CustomSnackBar } from '../../CustomSnackBar/CustomSnackBar';
import { useSnackBar } from '../../../../hooks/useSnackBar';
import { SnackBarEnum } from '../../../../types/formValues';
import { handleErrorResponse } from '../../../../utils/handleErrorSnackBarResponse';
import theme from '../../../../theme';
import { PasswordField } from './PasswordField';

export const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { id } = useParams();
    const { snackBarMessage, snackBarType, isSnackBarOpen, hideSnackBar, showSnackBar } = useSnackBar();

    const reset = () => {
        setPassword('');
        setConfirmPassword('');
    };

    const handleChangePassword = async () => {
        try {
            if (password !== confirmPassword) {
                showSnackBar('Hasło i jego potwierdzenie się różnią', SnackBarEnum.ERROR_MESSAGE);
                reset();
                return;
            }
            const url = `${apiUrl}${ENDPOINTS.changePassword}/${id}`;
            await axios.patch(url, { password }, { withCredentials: true });
            showSnackBar('Hasło zostało zmienione', SnackBarEnum.SUCCESS_MESSAGE);
            reset();
        } catch (error: any) {
            handleErrorResponse(error, showSnackBar);
            reset();
        }
    };
    return (
        <Container sx={{
            maxWidth: '80%',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
        }}>
            <Typography
                variant='h2'
                color={theme.palette.text.primary}
                sx={{ fontSize: '18px', padding: 3, textAlign: 'center' }}
            >
                Zmiana hasła
            </Typography>
            <PasswordField label='Nowe hasło' value={password} onChange={(e) => setPassword(e.target.value)} />
            <PasswordField label='Powtórz nowe hasło' value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)} />
            <Button variant='contained' onClick={handleChangePassword} sx={{ margin: '.5rem auto', minWidth: '500px' }}>
                Zmień hasło
            </Button>
            {isSnackBarOpen && (
                <CustomSnackBar
                    setAction={hideSnackBar}
                    actionState={isSnackBarOpen}
                    message={snackBarMessage}
                    type={snackBarType}
                />
            )}
        </Container>
    );
};


