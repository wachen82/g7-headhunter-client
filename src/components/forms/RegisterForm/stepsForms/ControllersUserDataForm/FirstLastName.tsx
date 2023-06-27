import Grid from '@mui/material/Grid';
import { Controller, useFormContext } from 'react-hook-form';
import { defaultValues } from '../../FormDefaultValues';
import TextField from '@mui/material/TextField';
import { helperTextStyles } from '../PortfolioForm';
import * as React from 'react';
import { IUserProfileEntity } from 'types';

export const FirstLastName = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<IUserProfileEntity>();

  return (<>
      <Grid item xs={12} sm={6}>
          <Controller
              name='firstName'
              control={control}
              defaultValue={defaultValues.firstName}
              render={({ ...field }) => (
                  <TextField
                      {...field}
                      id='firstName'
                      label='Imię'
                      required
                      variant='outlined'
                      type='text'
                      fullWidth
                      {...register('firstName')}
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message?.toString()}
                      FormHelperTextProps={{ sx: helperTextStyles }}
                  />
              )}
          />
      </Grid>
      <Grid item xs={12} sm={6}>
          <Controller
              name='lastName'
              control={control}
              defaultValue={defaultValues.lastName}
              render={({ ...field }) => (
                  <TextField
                      {...field}
                      required
                      id='lastName'
                      label='Nazwisko'
                      type='text'
                      fullWidth
                      variant='outlined'
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
  </>)
}
