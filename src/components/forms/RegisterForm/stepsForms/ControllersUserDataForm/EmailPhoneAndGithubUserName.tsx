import Grid from '@mui/material/Grid';
import { Controller, useFormContext } from 'react-hook-form';
import { defaultValues } from '../../FormDefaultValues';
import TextField from '@mui/material/TextField';
import { helperTextStyles } from '../PortfolioForm';
import * as React from 'react';
import { IUserProfileEntity } from 'types';

export const EmailPhoneAndGithubUserName = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<IUserProfileEntity>();

    return (<>
        <Grid item xs={12}>
            <Controller
                name='email'
                control={control}
                defaultValue={defaultValues.email}
                render={({ ...field }) => (
                    <TextField
                        {...field}
                        id='email'
                        label='Email'
                        required
                        variant='outlined'
                        type='email'
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
                name='githubUsername'
                control={control}
                defaultValue={defaultValues.githubUsername}
                render={({ ...field }) => (
                    <TextField
                        {...field}
                        required
                        id='githubUsername'
                        label='Nazwa użytkownika GitHub '
                        type='text'
                        fullWidth
                        variant='outlined'
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
                name='phone'
                control={control}
                defaultValue={defaultValues.phone}
                render={({ ...field }) => (
                    <TextField
                        {...field}
                        id='phone'
                        label='Numer telefonu'
                        type='number'
                        fullWidth
                        variant='outlined'
                        {...register('phone')}
                        error={!!errors.phone}
                        helperText={errors.phone?.message?.toString()}
                    />
                )}
            />
        </Grid>
    </>);
};
