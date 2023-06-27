import Grid from '@mui/material/Grid';
import { Controller, useFormContext } from 'react-hook-form';
import { defaultValues } from '../../FormDefaultValues';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { IUserProfileEntity } from 'types';

export const CoursesAndWorkExp = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<IUserProfileEntity>();

    return (<>
        <Grid item xs={12}>
            <Controller
                name='courses'
                control={control}
                defaultValue={defaultValues.courses}
                render={({ ...field }) => (
                    <TextField
                        {...field}
                        id='courses'
                        label='Odbyte kursy '
                        type='text'
                        fullWidth
                        variant='outlined'
                        {...register('courses')}
                        error={!!errors.courses}
                        helperText={errors.courses?.message?.toString()}
                    />
                )}
            />
        </Grid>
        <Grid item xs={12}>
            <Controller
                name='workExperience'
                control={control}
                defaultValue={defaultValues.workExperience}
                render={({ ...field }) => (
                    <TextField
                        {...field}
                        id='workExperience'
                        label='Doświadczenie zawodowe - przebieg '
                        type='text'
                        fullWidth
                        multiline
                        maxRows={3}
                        variant='outlined'
                        {...register('workExperience')}
                        error={!!errors.workExperience}
                        helperText={errors.workExperience?.message?.toString()}
                    />
                )}
            />
        </Grid>
    </>);
};
