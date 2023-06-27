import Grid from '@mui/material/Grid';
import { Controller, useFormContext } from 'react-hook-form';
import { defaultValues } from '../../FormDefaultValues';
import TextField from '@mui/material/TextField';
import { InputAdornment, MenuItem } from '@mui/material';
import * as React from 'react';

export const CitySalaryContractType = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext();

    return (<>
        <Grid item xs={12}>
            <Controller
                name='targetWorkCity'
                control={control}
                defaultValue={defaultValues.targetWorkCity}
                render={({ ...field }) => (
                    <TextField
                        {...field}
                        id='targetWorkCity'
                        label='Miasto'
                        type='text'
                        fullWidth
                        variant='outlined'
                        {...register('targetWorkCity')}
                        error={!!errors.targetWorkCity}
                        helperText={errors.targetWorkCity?.message?.toString()}
                    />
                )}
            />
        </Grid>
        <Grid item xs={12}>
            <Controller
                name='expectedSalary'
                control={control}
                defaultValue={defaultValues.expectedSalary}
                render={({ ...field }) => (
                    <TextField
                        {...field}
                        id='expectedSalary'
                        label='Oczekiwane wynagrodzenie'
                        type='number'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    zł
                                </InputAdornment>
                            ),
                        }}
                        fullWidth
                        variant='outlined'
                        {...register('expectedSalary')}
                        error={!!errors.expectedSalary}
                        helperText={errors.expectedSalary?.message?.toString()}
                    />
                )}
            />
        </Grid>
        <Grid item xs={12}>
            <Controller
                name='expectedContractType'
                control={control}
                render={({ ...field }) => (
                    <TextField
                        {...field}
                        id='expectedContractType'
                        label='Rodzaj Kontractu'
                        type='text'
                        defaultValue='Brak preferencji'
                        fullWidth
                        required
                        select
                        variant='outlined'
                        {...register('expectedContractType')}
                        error={!!errors.expectedContractType}
                        helperText={errors.expectedContractType?.message?.toString()}
                    >
                        <MenuItem value='Tylko UoP'>Tylko UoP</MenuItem>
                        <MenuItem value='Możliwe B2B'>
                            Możliwe B2B
                        </MenuItem>
                        <MenuItem value='Możliwe UZ/UoD'>
                            Możliwe UZ/UoD
                        </MenuItem>
                        <MenuItem value='Brak preferencji'>
                            Brak preferencji
                        </MenuItem>
                    </TextField>
                )}
            />
        </Grid>
    </>);
};
