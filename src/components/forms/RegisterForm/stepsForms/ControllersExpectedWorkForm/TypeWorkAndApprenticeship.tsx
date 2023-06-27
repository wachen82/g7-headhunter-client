import Grid from '@mui/material/Grid';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import * as React from 'react';

export const TypeWorkAndApprenticeship = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext();

    return (<>
        <Grid item xs={12}>
            <Controller
                name='expectedTypeWork'
                control={control}
                render={({ ...field }) => (
                    <TextField
                        {...field}
                        id='expectedTypeWork'
                        label='Rodzaj pracy'
                        type='text'
                        fullWidth
                        defaultValue='Bez znaczenia'
                        required
                        select
                        variant='outlined'
                        {...register('expectedTypeWork')}
                        error={!!errors.expectedTypeWork}
                        helperText={errors.expectedTypeWork?.message?.toString()}
                    >
                        <MenuItem value='Na miejscu'>
                            Na miejscu
                        </MenuItem>
                        <MenuItem value='Gotowość do przeprowadzki'>
                            Gotowość do przeprowadzki
                        </MenuItem>
                        <MenuItem value='Wyłącznie zdalnie'>
                            Wyłącznie zdalnie
                        </MenuItem>
                        <MenuItem value='Hybrydowo'>Hybrydowo</MenuItem>
                        <MenuItem value='Bez znaczenia'>
                            Bez znaczenia
                        </MenuItem>
                    </TextField>
                )}
            />
        </Grid>
        <Grid item xs={12}>
            <Controller
                name='canTakeApprenticeship'
                control={control}
                render={({ ...field }) => (
                    <TextField
                        {...field}
                        id='canTakeApprenticeship'
                        label='Mogę odbyć praktyki/staż'
                        type='text'
                        fullWidth
                        defaultValue='NIE'
                        required
                        select
                        variant='outlined'
                        {...register('canTakeApprenticeship')}
                        error={!!errors.canTakeApprenticeship}
                        helperText={errors.canTakeApprenticeship?.message?.toString()}
                    >
                        <MenuItem value='NIE'>NIE</MenuItem>
                        <MenuItem value='TAK'>TAK</MenuItem>
                    </TextField>
                )}
            />
        </Grid>
    </>);
};
