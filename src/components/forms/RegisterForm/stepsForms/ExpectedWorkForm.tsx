import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { FormHelperText, InputAdornment, MenuItem } from '@mui/material'
import theme from '../../../../theme'
import { useForm, useFormContext } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { expectedWorkForm } from '../register.schema'
import { defaultValues } from '../FormDefaultValues'

// import { IUserProfileEntity1 } from '../types'
import { IUserProfileEntity } from 'types'

export const ExpectedWorkForm = () => {
    const {
        formState: { errors },
    } = useForm<IUserProfileEntity>({
        resolver: yupResolver(expectedWorkForm),
        defaultValues,
    })
    const { register } = useFormContext()

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
                        variant="outlined"
                        error={Boolean(errors.targetWorkCity)}
                        {...register('targetWorkCity')}
                        helperText={errors.targetWorkCity?.message}
                    />
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
