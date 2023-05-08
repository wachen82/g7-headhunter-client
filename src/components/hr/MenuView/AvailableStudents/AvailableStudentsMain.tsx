import { Container, Divider } from '@mui/material';
import theme from '../../../../theme';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ButtonMain } from '../../../common/Buttons/ButtonMain';

export const AvailableStudentsMain = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <Container sx={{ height: '50vh' }}>
            <Divider sx={{ bgcolor: theme.palette.grey['900'] }} />
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                       sx={{ bgcolor: theme.palette.grey['800'], textAlign: 'initial',   paddingBottom: '1rem', }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.grey['300'] }} />}
                    aria-controls='panel1bh-content'
                    id='panel1bh-header'
                    sx={{
                        bgcolor: theme.palette.secondary.light,
                        color: theme.palette.text.primary,
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                    <Typography sx={{ width: '30px', height: '40px', lineHeight: '40px', flexShrink: 1, flexGrow: 1 }}>
                        Jan K.
                    </Typography>
                    <ButtonMain text='Zarezerwuj rozmowę' sx={{
                        fontSize: '1rem',
                        borderRadius: '0',
                        textTransform: 'none',
                        marginRight: '20px',
                    }} />
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: theme.palette.grey['600'], color: theme.palette.text.primary }}>
                    <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                       sx={{ bgcolor: theme.palette.grey['800'], textAlign: 'initial',   paddingBottom: '1rem', }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.grey['300'] }} />}
                    aria-controls='panel2bh-content'
                    id='panel2bh-header'
                    sx={{
                        bgcolor: theme.palette.secondary.light,
                        color: theme.palette.text.primary,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Typography sx={{ width: '30px', height: '40px', lineHeight: '40px', flexShrink: 1, flexGrow: 1 }}>
                        Ania O. </Typography>
                    <ButtonMain text='Zarezerwuj rozmowę' sx={{
                        fontSize: '1rem',
                        borderRadius: '0',
                        textTransform: 'none',
                        marginRight: '20px',
                    }} />
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: theme.palette.grey['600'], color: theme.palette.text.primary }}>
                    <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                        laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
                       sx={{ bgcolor: theme.palette.grey['800'], textAlign: 'initial',  paddingBottom: '1rem', }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.grey['300'] }} />}
                    aria-controls='panel3bh-content'
                    id='panel3bh-header'
                    sx={{
                        bgcolor: theme.palette.secondary.light,
                        color: theme.palette.text.primary,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Typography sx={{width: '30px', height: '40px', lineHeight: '40px', flexShrink: 1, flexGrow: 1 }}>
                        Gosia B.
                    </Typography>
                    <ButtonMain text='Zarezerwuj rozmowę' sx={{
                        fontSize: '1rem',
                        borderRadius: '0',
                        textTransform: 'none',
                        marginRight: '20px',
                    }} />
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: theme.palette.grey['600'], color: theme.palette.text.primary }}>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
};
