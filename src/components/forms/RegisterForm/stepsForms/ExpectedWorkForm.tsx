import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { InputAdornment, MenuItem } from '@mui/material'

import { useFormContext, Controller } from 'react-hook-form'
import { defaultValues } from '../FormDefaultValues'

export const ExpectedWorkForm = () => {
    const {
        register,
        watch,
        control,
        formState: { errors },
    } = useFormContext()

    console.log(watch('expectedTypeWork'))
    console.log('errors:', errors)
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Preferowane zatrudnienie
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Controller
                        name="targetWorkCity"
                        control={control}
                        defaultValue={defaultValues.targetWorkCity}
                        render={({ ...field }) => (
                            <TextField
                                {...field}
                                id="targetWorkCity"
                                label="Miasto"
                                type="text"
                                fullWidth
                                variant="outlined"
                                {...register('targetWorkCity')}
                                error={!!errors.targetWorkCity}
                                helperText={errors.targetWorkCity?.message?.toString()}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="expectedSalary"
                        control={control}
                        defaultValue={defaultValues.expectedSalary}
                        render={({ ...field }) => (
                            <TextField
                                {...field}
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
                                error={!!errors.expectedSalary}
                                helperText={errors.expectedSalary?.message?.toString()}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="expectedContractType"
                        control={control}
                        defaultValue={defaultValues.expectedContractType}
                        render={({ ...field }) => (
                            <TextField
                                {...field}
                                id="expectedContractType"
                                label="Rodzaj Kontractu"
                                type="text"
                                fullWidth
                                required
                                select
                                variant="outlined"
                                {...register('expectedContractType')}
                                error={!!errors.expectedContractType}
                                helperText={errors.expectedContractType?.message?.toString()}
                            >
                                <MenuItem value="Hybrydowo">
                                    Brak preferencji
                                </MenuItem>
                                <MenuItem value="Tylko UoP">Tylko UoP</MenuItem>
                                <MenuItem value="Możliwe B2B">
                                    Możliwe B2B
                                </MenuItem>
                                <MenuItem value="Możliwe UZ/UoD">
                                    Możliwe UZ/UoD
                                </MenuItem>
                            </TextField>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="expectedTypeWork"
                        control={control}
                        defaultValue={defaultValues.expectedTypeWork}
                        render={({ ...field }) => (
                            <TextField
                                {...field}
                                id="expectedTypeWork"
                                label="Rodzaj pracy"
                                type="text"
                                fullWidth
                                required
                                select
                                variant="outlined"
                                {...register('expectedTypeWork')}
                                error={!!errors.expectedTypeWork}
                                helperText={errors.expectedTypeWork?.message?.toString()}
                            >
                                <MenuItem value="Na miejsc">
                                    Na miejscu
                                </MenuItem>
                                <MenuItem value="Gotowość do przeprowadzki">
                                    Gotowość do przeprowadzki
                                </MenuItem>
                                <MenuItem value="Wyłącznie zdalnie">
                                    Wyłącznie zdalnie
                                </MenuItem>
                                <MenuItem value="Hybrydowo">Hybrydowo</MenuItem>
                                <MenuItem value="Bez znaczenia">
                                    Bez znaczenia
                                </MenuItem>
                            </TextField>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="canTakeApprenticeship"
                        control={control}
                        defaultValue={defaultValues.canTakeApprenticeship}
                        render={({ ...field }) => (
                            <TextField
                                {...field}
                                id="canTakeApprenticeship"
                                label="Mogę odbyć praktyki/staż"
                                type="text"
                                fullWidth
                                required
                                select
                                variant="outlined"
                                {...register('canTakeApprenticeship')}
                                error={!!errors.canTakeApprenticeship}
                                helperText={errors.canTakeApprenticeship?.message?.toString()}
                            >
                                <MenuItem value="Nie">Nie</MenuItem>
                                <MenuItem value="TAK">TAK</MenuItem>
                            </TextField>
                        )}
                    />
                </Grid>
            </Grid>
        </>
    )
}
