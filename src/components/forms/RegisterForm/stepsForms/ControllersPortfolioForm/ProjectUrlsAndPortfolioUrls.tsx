import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { IUserProfileEntity } from 'types';
import Grid from '@mui/material/Grid';
import { defaultValues } from '../../FormDefaultValues';
import TextField from '@mui/material/TextField';
import { Button, IconButton } from '@mui/material';
import theme from '../../../../../theme';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import * as React from 'react';
import { helperTextStyles } from '../PortfolioForm';

export const ProjectUrlsAndPortfolioUrls = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<IUserProfileEntity>();
    const { fields, append, remove } = useFieldArray({
        name: 'portfolioUrls',
    });

  return (<>
      <Grid item xs={12} sm={6}>
          <Controller
              name='projectUrls'
              control={control}
              defaultValue={defaultValues.projectUrls}
              render={({ ...field }) => (
                  <TextField
                      {...field}
                      id='projectUrls2'
                      label='Projekt zaliczeniowy BE - url'
                      type='url'
                      fullWidth
                      required
                      variant='outlined'
                      {...register('projectUrls.1')}
                      error={!!errors.projectUrls?.[1]}
                      helperText={
                          errors.projectUrls &&
                          errors.projectUrls?.[1] &&
                          errors.projectUrls?.[1].message &&
                          errors.projectUrls?.[1].message.toString()
                      }
                      FormHelperTextProps={{
                          sx: helperTextStyles,
                      }}
                  />
              )}
          />
      </Grid>

      <Grid container mt={2} ml={3} direction='row'>
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
                          name='portfolioUrls'
                          control={control}
                          defaultValue={defaultValues.portfolioUrls}
                          render={({ ...field }) => (
                              <TextField
                                  {...field}
                                  id='portfolioUrls'
                                  label='Projekt z portfolio - url'
                                  type='url'
                                  fullWidth
                                  variant='outlined'
                                  {...register(
                                      `portfolioUrls.${index}`,
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
                                      sx: helperTextStyles,
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
              variant='outlined'
              size='small'
              sx={{ mt: 1, ml: 1, textTransform: 'none' }}
              type='button'
              onClick={() => append('')}
          >
              Dodaj nowy url
          </Button>
      </Grid>
  </>)
}
