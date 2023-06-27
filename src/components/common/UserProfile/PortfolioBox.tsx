import theme from '../../../theme';
import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const PortfolioBox = ({children}: Props) => {
  return <Box
      sx={{
          display: 'flex',
          flexDirection: 'column',
          bgcolor: theme.palette.grey['600'],
          width: '1000px',
          padding: '17px 26px 15px 26px',
          margin: '0 0 12px 4px',
      }}
  >
      {children}
  </Box>
}
