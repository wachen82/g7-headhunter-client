import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { apiUrl } from '../../../../config/api';
import { ENDPOINTS } from '../../../../services/endpoints/endpoints';
import { TextField, Button, Container, Typography } from '@mui/material';
import { CustomSnackBar } from '../../CustomSnackBar/CustomSnackBar';
import { useSnackBar } from '../../../../hooks/useSnackBar';
import { SnackBarEnum } from '../../../../types/formValues';
import { handleErrorResponse } from '../../../../utils/handleErrorSnackBarResponse';
import theme from '../../../../theme';

export const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const { id } = useParams();
    const {
        snackBarMessage,
        snackBarType,
        isSnackBarOpen,
        hideSnackBar,
        showSnackBar,
    } = useSnackBar();
    const reset = () => {
        setPassword('');
        setConfirmNewPassword('')
    }
    const handleChangePassword = async () => {
        try {
            if (password !== confirmNewPassword) {
                showSnackBar('Hasło i jego potwierdzenie się różnią', SnackBarEnum.ERROR_MESSAGE);
                setPassword('');
                setConfirmNewPassword('')
                return
            }
            const url = `${apiUrl}${ENDPOINTS.changePassword}/${id}`;
            await axios.patch(url, { password }, {withCredentials:true});
            showSnackBar('Hasło zostało zmienione', SnackBarEnum.SUCCESS_MESSAGE);
            reset()
        } catch (error: any) {
            handleErrorResponse(error, showSnackBar);
            reset()
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
            <TextField
                sx={{margin: '.5rem auto',minWidth: '500px', bgcolor: theme.palette.grey['800']}}
                type='password'
                label='Nowe hasło'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
                sx={{margin: '.5rem auto',minWidth: '500px', bgcolor: theme.palette.grey['800']}}
                type='password'
                label='Powtórz nowe hasło'
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            <Button variant='contained' onClick={handleChangePassword} sx={ {margin: '.5rem auto', minWidth: '500px'}}>
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


