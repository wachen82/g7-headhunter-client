import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Button, FormHelperText, IconButton } from '@mui/material'
import theme from '../../../../theme'
import TextField from '@mui/material/TextField'
import { useForm, useFieldArray, useFormContext } from 'react-hook-form'

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import { yupResolver } from '@hookform/resolvers/yup'
import { portfolioForm } from '../register.schema'
import { defaultValues } from '../FormDefaultValues'
import { IUserProfileEntity } from 'types'

export const PortfolioForm = () => {
    const {
        formState: { errors },
    } = useForm<IUserProfileEntity>({
        resolver: yupResolver(portfolioForm),
        defaultValues,
    })
    const { register } = useFormContext()

    const { fields, append, remove } = useFieldArray({
        name: 'portfolioUrls',
    })

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Portfolio
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="bio"
                        label="Bio"
                        type="text"
                        fullWidth
                        multiline
                        minRows={3}
                        maxRows={3}
                        variant="outlined"
                        {...register('bio')}
                    />
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.bio?.message}
                    </FormHelperText>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="education"
                        label="Wykształcenie"
                        type="text"
                        fullWidth
                        variant="outlined"
                        {...register('education')}
                    />
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.education?.message}
                    </FormHelperText>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="courses"
                        label="Odbyte kursy "
                        type="text"
                        fullWidth
                        variant="outlined"
                        {...register('courses')}
                    />
                    {/*<FormHelperText*/}
                    {/*    sx={{*/}
                    {/*        margin: 0,*/}
                    {/*        paddingX: '1rem',*/}
                    {/*        backgroundColor: theme.palette.secondary.main,*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    {errors.courses?.message}*/}
                    {/*</FormHelperText>*/}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="workExperience"
                        label="Doświadczenie zawodowe - przebieg "
                        type="text"
                        fullWidth
                        multiline
                        maxRows={3}
                        variant="outlined"
                        {...register('workExperience')}
                    />
                    {/*<FormHelperText*/}
                    {/*    sx={{*/}
                    {/*        margin: 0,*/}
                    {/*        paddingX: '1rem',*/}
                    {/*        backgroundColor: theme.palette.secondary.main,*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    {errors.workExperience?.message}*/}
                    {/*</FormHelperText>*/}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="monthsOfCommercialExp"
                        label="Doświadczenie zawodowe(Programowanie)"
                        type="number"
                        fullWidth
                        required
                        multiline
                        maxRows={3}
                        variant="outlined"
                        {...register('monthsOfCommercialExp')}
                    />
                    {/*<FormHelperText*/}
                    {/*    sx={{*/}
                    {/*        margin: 0,*/}
                    {/*        paddingX: '1rem',*/}
                    {/*        backgroundColor: theme.palette.secondary.main,*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    {errors.monthsOfCommercialExp?.message}*/}
                    {/*</FormHelperText>*/}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="projectUrls"
                        label="Projekt zaliczeniowy FE - url"
                        type="url"
                        fullWidth
                        required
                        variant="outlined"
                        {...register('projectUrls.0')}
                    />
                    {/*<FormHelperText*/}
                    {/*    sx={{*/}
                    {/*        margin: 0,*/}
                    {/*        paddingX: '1rem',*/}
                    {/*        backgroundColor: theme.palette.secondary.main,*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    {errors.projectUrls?.message}*/}
                    {/*</FormHelperText>*/}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="projectUrls"
                        label="Projekt zaliczeniowy BE - url"
                        type="url"
                        fullWidth
                        required
                        variant="outlined"
                        {...register('projectUrls.1')}
                    />
                    {/*<FormHelperText*/}
                    {/*    sx={{*/}
                    {/*        margin: 0,*/}
                    {/*        paddingX: '1rem',*/}
                    {/*        backgroundColor: theme.palette.secondary.main,*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    {errors.projectUrls?.message}*/}
                    {/*</FormHelperText>*/}
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
                                <TextField
                                    id="portfolioUrls"
                                    label="Projekt z portfolio - url"
                                    type="url"
                                    fullWidth
                                    variant="outlined"
                                    {...register(`portfolioUrls.${index}.url`)}
                                    defaultValue={''}
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
                                    onClick={() => {
                                        remove(index)
                                    }}
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
                        onClick={() => append({ url: '' })}
                    >
                        Dodaj nowy url
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}
