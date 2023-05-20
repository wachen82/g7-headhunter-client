import { Grid } from '@mui/material';

interface GridContainerProps {
    children: React.ReactNode;
}

export const GridContainer = ({ children }: GridContainerProps) => {
    return (
        <Grid
            container
            spacing={{ xs: 1, md: 3 }}
            sx={{
                gap: 1,
                paddingLeft: 1,
                paddingRight: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: { xs: 'wrap', md: 'nowrap' },
                '@media (min-width: 900px)': {
                    '& > .MuiGrid-item': {
                        paddingLeft: '0px',
                    },
                },
            }}
        >
            {children}
        </Grid>
    );
};
