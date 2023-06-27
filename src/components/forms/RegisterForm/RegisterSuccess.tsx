import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as React from 'react';

export const RegisterSuccess = () => {
  return (<>
          <Box
              sx={{
                  display: 'flex',
                  justifyContent: 'center',
              }}
          >
              <CheckCircleIcon
                  color='success'
                  fontSize='large'
                  sx={{ mb: 4, width: 120, height: 120 }}
              />
          </Box>
          <Typography
              variant='h4'
              gutterBottom
              justifyContent='center'
              align='center'
              mb={4}
          >
              Dziękujemy za wypełnienie formularza rejestracyjnego.
          </Typography>
          <Box
              sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
              }}
          >
              <Button
                  variant='contained'
                  href={'/sign-in'}
                  sx={{ mt: 3, ml: 1 }}
                  type='button'
              >
                  Zaloguj się
              </Button>
          </Box>
      </>)
}
