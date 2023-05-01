import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import {
    FormHelperText,
    InputAdornment,
    MenuItem,
    RadioGroup,
} from '@mui/material'
import theme from '../../../theme'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from './register.schema'
import { defaultValues } from '../LoginForm/FormDefaultValues'
import { IUserProfileEntity } from 'types'

export const ExpectedWorkForm = () => {
    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IUserProfileEntity>({
        resolver: yupResolver(registerSchema),
        defaultValues,
    })
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Preferowane zatrudnienie
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="targetWorkCity"
                        label="Miasto"
                        type="text"
                        fullWidth
                        required
                        variant="outlined"
                        {...register('targetWorkCity')}
                    />
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.targetWorkCity?.message}
                    </FormHelperText>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="expectedSalary"
                        label="Oczekiwane wynagrodzenie"
                        type="number"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    zł
                                </InputAdornment>
                            ),
                        }}
                        fullWidth
                        variant="outlined"
                        {...register('expectedSalary')}
                    />
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.expectedSalary?.message}
                    </FormHelperText>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="expectedContractType"
                        label="Rodzaj Kontractu"
                        type="text"
                        fullWidth
                        required
                        select
                        variant="outlined"
                        {...register('expectedContractType')}
                    >
                        <MenuItem value="Hybrydowo">Brak preferencji</MenuItem>
                        <MenuItem value="Tylko UoP">Tylko UoP</MenuItem>
                        <MenuItem value="Możliwe B2B">Możliwe B2B</MenuItem>
                        <MenuItem value="Możliwe UZ/UoD">
                            Możliwe UZ/UoD
                        </MenuItem>
                    </TextField>
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.expectedContractType?.message}
                    </FormHelperText>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="expectedTypeWork"
                        label="Rodzaj pracy"
                        type="text"
                        fullWidth
                        required
                        select
                        variant="outlined"
                        {...register('expectedTypeWork')}
                    >
                        <MenuItem value="Na miejsc">Na miejscu</MenuItem>
                        <MenuItem value="Gotowość do przeprowadzki">
                            Gotowość do przeprowadzki
                        </MenuItem>
                        <MenuItem value="Wyłącznie zdalnie">
                            Wyłącznie zdalnie
                        </MenuItem>
                        <MenuItem value="Hybrydowo">Hybrydowo</MenuItem>
                        <MenuItem value="Bez znaczenia">Bez znaczenia</MenuItem>
                    </TextField>
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.expectedTypeWork?.message}
                    </FormHelperText>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="canTakeApprenticeship"
                        label="Mogę odbyć praktyki/staż"
                        type="text"
                        fullWidth
                        required
                        select
                        variant="outlined"
                        {...register('canTakeApprenticeship')}
                    >
                        <MenuItem value="Nie">Nie</MenuItem>
                        <MenuItem value="TAK">TAK</MenuItem>
                    </TextField>
                    <FormHelperText
                        sx={{
                            margin: 0,
                            paddingX: '1rem',
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        {errors.canTakeApprenticeship?.message}
                    </FormHelperText>
                </Grid>
            </Grid>
        </>
    )
}
