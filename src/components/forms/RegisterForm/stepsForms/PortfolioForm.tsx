import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useFieldArray, useFormContext, Controller } from 'react-hook-form';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import theme from '../../../../theme';
import { defaultValues } from '../FormDefaultValues';
import { IUserProfileEntity1 } from '../types';

export const PortfolioForm = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<IUserProfileEntity1>();

    const { fields, append, remove } = useFieldArray({
        name: 'portfolioUrls',
    });

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Portfolio
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Controller
                        name="bio"
                        control={control}
                        defaultValue={defaultValues.bio}
                        render={({ ...field }) => (
                            <TextField
                                {...field}
                                id="bio"
                                label="Bio"
                                type="text"
                                fullWidth
                                multiline
                                minRows={3}
                                maxRows={3}
                                variant="outlined"
                                {...register('bio')}
                                error={!!errors.bio}
                                helperText={errors.bio?.message?.toString()}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="education"
                        control={control}
                        defaultValue={defaultValues.education}
                        render={({ ...field }) => (
                            <TextField
                                {...field}
                                id="education"
                                label="Wykształcenie"
                                type="text"
                                fullWidth
                                variant="outlined"
                                {...register('education')}
                                error={!!errors.education}
                                helperText={errors.education?.message?.toString()}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="courses"
                        control={control}
                        defaultValue={defaultValues.courses}
                        render={({ ...field }) => (
                            <TextField
                                {...field}
                                id="courses"
                                label="Odbyte kursy "
                                type="text"
                                fullWidth
                                variant="outlined"
                                {...register('courses')}
                                error={!!errors.courses}
                                helperText={errors.courses?.message?.toString()}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="workExperience"
                        control={control}
                        defaultValue={defaultValues.workExperience}
                        render={({ ...field }) => (
                            <TextField
                                {...field}
                                id="workExperience"
                                label="Doświadczenie zawodowe - przebieg "
                                type="text"
                                fullWidth
                                multiline
                                maxRows={3}
                                variant="outlined"
                                {...register('workExperience')}
                                error={!!errors.workExperience}
                                helperText={errors.workExperience?.message?.toString()}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="monthsOfCommercialExp"
                        control={control}
                        defaultValue={defaultValues.monthsOfCommercialExp}
                        render={({ ...field }) => (
                            <TextField
                                {...field}
                                id="monthsOfCommercialExp"
                                label="Doświadczenie zawodowe(Programowanie)"
                                type="number"
                                fullWidth
                                required
                                multiline
                                maxRows={3}
                                variant="outlined"
                                {...register('monthsOfCommercialExp')}
                                error={!!errors.monthsOfCommercialExp}
                                helperText={errors.monthsOfCommercialExp?.message?.toString()}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller
                        name="projectUrls"
                        control={control}
                        defaultValue={defaultValues.projectUrls}
                        render={({ ...field }) => (
                            <TextField
                                {...field}
                                id="projectUrls"
                                label="Projekt zaliczeniowy FE - url"
                                type="url"
                                fullWidth
                                required
                                variant="outlined"
                                {...register('projectUrls.0')}
                                error={!!errors.projectUrls?.[0]}
                                helperText={
                                    errors.projectUrls &&
                                    errors.projectUrls?.[0] &&
                                    errors.projectUrls?.[0].message &&
                                    errors.projectUrls?.[0].message.toString()
                                }
                                FormHelperTextProps={{
                                    sx: {
                                        margin: 0,
                                        paddingX: '1rem',
                                        backgroundColor:
                                            theme.palette.background.paper,
                                    },
                                }}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller
                        name="projectUrls"
                        control={control}
                        defaultValue={defaultValues.projectUrls}
                        render={({ ...field }) => (
                            <TextField
                                {...field}
                                id="projectUrls2"
                                label="Projekt zaliczeniowy BE - url"
                                type="url"
                                fullWidth
                                required
                                variant="outlined"
                                {...register('projectUrls.1')}
                                error={!!errors.projectUrls?.[1]}
                                helperText={
                                    errors.projectUrls &&
                                    errors.projectUrls?.[1] &&
                                    errors.projectUrls?.[1].message &&
                                    errors.projectUrls?.[1].message.toString()
                                }
                                FormHelperTextProps={{
                                    sx: {
                                        margin: 0,
                                        paddingX: '1rem',
                                        backgroundColor:
                                            theme.palette.background.paper,
                                    },
                                }}
                            />
                        )}
                    />
                </Grid>

                <Grid container mt={2} ml={3} direction="row">
                    {fields.map((field, index) => (
                        <Grid
                            container
                            item
                            xs={12}
                            key={field.id}
                            justifyItems={'center'}
                            direction={'row'}
                        >
                            <Grid xs={11} item mt={2} mb={2}>
                                <Controller
                                    name="portfolioUrls"
                                    control={control}
                                    defaultValue={defaultValues.portfolioUrls}
                                    render={({ ...field }) => (
                                        <TextField
                                            {...field}
                                            id="portfolioUrls"
                                            label="Projekt z portfolio - url"
                                            type="url"
                                            fullWidth
                                            variant="outlined"
                                            {...register(
                                                `portfolioUrls.${index}`
                                            )}
                                            error={!!errors.portfolioUrls}
                                            helperText={
                                                errors.portfolioUrls &&
                                                errors.portfolioUrls?.[index] &&
                                                errors.portfolioUrls?.[index]
                                                    ?.message &&
                                                errors.portfolioUrls?.[
                                                    index
                                                ]?.message?.toString()
                                            }
                                            FormHelperTextProps={{
                                                sx: {
                                                    margin: 0,
                                                    paddingX: '1rem',
                                                    backgroundColor:
                                                        theme.palette.background
                                                            .paper,
                                                },
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid
                                item
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'end',
                                    alignItems: 'center',
                                }}
                            >
                                <IconButton
                                    sx={{
                                        color: theme.palette.primary.main,
                                    }}
                                    onClick={() => remove(index)}
                                    disabled={index === 0}
                                >
                                    <DeleteForeverOutlinedIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    ))}
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{ mt: 1, ml: 1, textTransform: 'none' }}
                        type="button"
                        onClick={() => append('')}
                    >
                        Dodaj nowy url
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};
