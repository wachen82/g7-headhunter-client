import Grid from '@mui/material/Grid';
import { Controller, useFormContext } from 'react-hook-form';
import { defaultValues } from '../../FormDefaultValues';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { IUserProfileEntity } from 'types';

export const BioAndEducation = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<IUserProfileEntity>();

    return (<>
            <Grid item xs={12}>
                <Controller
                    name='bio'
                    control={control}
                    defaultValue={defaultValues.bio}
                    render={({ ...field }) => (
                        <TextField
                            {...field}
                            id='bio'
                            label='Bio'
                            type='text'
                            fullWidth
                            multiline
                            minRows={3}
                            maxRows={3}
                            variant='outlined'
                            {...register('bio')}
                            error={!!errors.bio}
                            helperText={errors.bio?.message?.toString()}
                        />
                    )}
                />
            </Grid>
            <Grid item xs={12}>
                <Controller
                    name='education'
                    control={control}
                    defaultValue={defaultValues.education}
                    render={({ ...field }) => (
                        <TextField
                            {...field}
                            id='education'
                            label='Wykształcenie'
                            type='text'
                            fullWidth
                            variant='outlined'
                            {...register('education')}
                            error={!!errors.education}
                            helperText={errors.education?.message?.toString()}
                        />
                    )}
                />
            </Grid>
        </>
    );
};
