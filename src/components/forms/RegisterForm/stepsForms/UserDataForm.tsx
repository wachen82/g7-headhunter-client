import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormContext, Controller } from 'react-hook-form';
import { Box } from '@mui/material';
import { defaultValues } from '../FormDefaultValues';
import theme from '../../../../theme';
import { IUserProfileEntity1 } from '../types';

export const UserDataForm = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<IUserProfileEntity1>();

    const helperTextStyles = {
        margin: 0,
        paddingX: '1rem',
        backgroundColor: theme.palette.background.paper,
    };

    return (
        <>
            <Box>
                <Typography variant="h6" mb={5}>
                    Dane Osobowe
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="firstName"
                            control={control}
                            defaultValue={defaultValues.firstName}
                            render={({ ...field }) => (
                                <TextField
                                    {...field}
                                    id="firstName"
                                    label="Imię"
                                    required
                                    variant="outlined"
                                    type="text"
                                    fullWidth
                                    {...register('firstName')}
                                    error={!!errors.firstName}
                                    helperText={errors.firstName?.message?.toString()}
                                    FormHelperTextProps={{
                                        sx: helperTextStyles,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="lastName"
                            control={control}
                            defaultValue={defaultValues.lastName}
                            render={({ ...field }) => (
                                <TextField
                                    {...field}
                                    required
                                    id="lastName"
                                    label="Nazwisko"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    {...register('lastName')}
                                    error={!!errors.lastName}
                                    helperText={errors.lastName?.message?.toString()}
                                    FormHelperTextProps={{
                                        sx: helperTextStyles,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue={defaultValues.email}
                            render={({ ...field }) => (
                                <TextField
                                    {...field}
                                    id="email"
                                    label="Email"
                                    required
                                    variant="outlined"
                                    type="email"
                                    fullWidth
                                    {...register('email')}
                                    error={!!errors.email}
                                    helperText={errors.email?.message?.toString()}
                                    FormHelperTextProps={{
                                        sx: helperTextStyles,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="githubUsername"
                            control={control}
                            defaultValue={defaultValues.githubUsername}
                            render={({ ...field }) => (
                                <TextField
                                    {...field}
                                    required
                                    id="githubUsername"
                                    label="Nazwa użytkownika GitHub "
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    {...register('githubUsername')}
                                    error={!!errors.githubUsername}
                                    helperText={errors.githubUsername?.message?.toString()}
                                    FormHelperTextProps={{
                                        sx: helperTextStyles,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="phone"
                            control={control}
                            defaultValue={defaultValues.phone}
                            render={({ ...field }) => (
                                <TextField
                                    {...field}
                                    id="phone"
                                    label="Numer telefonu"
                                    type="number"
                                    fullWidth
                                    variant="outlined"
                                    {...register('phone')}
                                    error={!!errors.phone}
                                    helperText={errors.phone?.message?.toString()}
                                />
                            )}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};
