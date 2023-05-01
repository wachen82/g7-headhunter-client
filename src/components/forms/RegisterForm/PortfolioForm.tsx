import * as React from 'react'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Grid from '@mui/material/Grid'
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    IconButton,
} from '@mui/material'
import theme from '../../../theme'
import TextField from '@mui/material/TextField'
import { useForm, useFieldArray } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { portfolioForm, registerSchema } from './register.schema'
import { defaultValues } from '../LoginForm/FormDefaultValues'
import { IUserProfileEntity } from 'types'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'

export const PortfolioForm = () => {
    interface FormValues {
        portfolioUrls: {
            url: string
        }[]
    }
    const form = useForm({
        defaultValues: {
            portfolioUrls: [{ url: '' }],
            email: '',
            phone: '',
            firstName: '',
            lastName: '',
            githubUsername: '',
            projectUrls: ['', ''],
            bio: '',
            expectedTypeWork: 'Bez znaczenia',
            targetWorkCity: '',
            expectedContractType: 'Brak preferencji',
            expectedSalary: '',
            canTakeApprenticeship: 'NIE',
            monthsOfCommercialExp: 0,
            education: '',
            workExperience: '',
            courses: '',
        },
        resolver: yupResolver(portfolioForm),
    })
    const { register, control, handleSubmit, formState } = form
    const { errors } = formState
    const { fields, append, prepend, remove } = useFieldArray({
        name: 'portfolioUrls',
        control,
    })

    // const {
    //     register,
    //     control,
    //     handleSubmit,
    //     reset,
    //     formState: { errors },
    // } = useForm<IUserProfileEntity>({
    //     resolver: yupResolver(registerSchema),
    //     defaultValues,
    // })
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
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.courses?.message}
                    </FormHelperText>
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
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.workExperience?.message}
                    </FormHelperText>
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
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.monthsOfCommercialExp?.message}
                    </FormHelperText>
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
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.projectUrls?.message}
                    </FormHelperText>
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
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.projectUrls?.message}
                    </FormHelperText>
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
