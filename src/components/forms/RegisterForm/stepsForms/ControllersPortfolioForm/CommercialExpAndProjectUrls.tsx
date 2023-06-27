import Grid from '@mui/material/Grid';
import { Controller, useFormContext } from 'react-hook-form';
import { defaultValues } from '../../FormDefaultValues';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { IUserProfileEntity } from 'types';
import { helperTextStyles } from '../PortfolioForm';

export const CommercialExpAndProjectUrls = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<IUserProfileEntity>();

    return (<>
        <Grid item xs={12}>
            <Controller
                name='monthsOfCommercialExp'
                control={control}
                defaultValue={defaultValues.monthsOfCommercialExp}
                render={({ ...field }) => (
                    <TextField
                        {...field}
                        id='monthsOfCommercialExp'
                        label='Doświadczenie zawodowe(Programowanie)'
                        type='number'
                        fullWidth
                        required
                        multiline
                        maxRows={3}
                        variant='outlined'
                        {...register('monthsOfCommercialExp')}
                        error={!!errors.monthsOfCommercialExp}
                        helperText={errors.monthsOfCommercialExp?.message?.toString()}
                        FormHelperTextProps={{
                            sx: helperTextStyles,
                        }}
                    />
                )}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Controller
                name='projectUrls'
                control={control}
                defaultValue={defaultValues.projectUrls}
                render={({ ...field }) => (
                    <TextField
                        {...field}
                        id='projectUrls'
                        label='Projekt zaliczeniowy FE - url'
                        type='url'
                        fullWidth
                        required
                        variant='outlined'
                        {...register('projectUrls.0')}
                        error={!!errors.projectUrls?.[0]}
                        helperText={
                            errors.projectUrls &&
                            errors.projectUrls?.[0] &&
                            errors.projectUrls?.[0].message &&
                            errors.projectUrls?.[0].message.toString()
                        }
                        FormHelperTextProps={{
                            sx: helperTextStyles,
                        }}
                    />
                )}
            />
        </Grid>
    </>);
};
