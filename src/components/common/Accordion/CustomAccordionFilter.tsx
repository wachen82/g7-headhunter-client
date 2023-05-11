import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Box } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import theme from '../../../theme';
import { ButtonMain } from '../Buttons/ButtonMain';
import React, { useState } from 'react';
import { UserListProps } from './CustomAccordion';

const buttonStyles = {
    fontSize: '1rem',
    borderRadius: '0',
    textTransform: 'none',
    marginRight: '20px',
};

export const CustomAccordionFilter = ({ users }: UserListProps) => {
    const [expanded, setExpanded] = useState<string | false>(false);
    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const grade = ['Ocena przejścia kursu:', 'Ocena aktywności i zaangażowania w kursie:', 'Ocena kodu w projekcie własnym:', 'Ocena pracy w zespole w Scrum:'];
    const renderTypographyGridItem = (label: string, value: string) => (
        <Grid item>
            <Typography variant='h1'
                        sx={{
                            fontSize: '12px',
                            paddingTop: '5px',
                            height: '34px',
                            color: theme.palette.grey['100'],
                        }}>{label}</Typography>
            <Typography variant='body1'
                        sx={{
                            fontSize: '12px',
                            height: '24px',
                        }}>{grade.includes(label) ?
                <span>{value}<span style={{ color: theme.palette.grey['200'] }}>/5</span></span> : value} </Typography>
        </Grid>
    );
    const buttonData = [
        { text: 'Pokaż CV', action: () => handleShowCV() },
        { text: 'Brak zainteresowania', action: () => handleNoInterest() },
        { text: 'Zatrudniony', action: () => handleEmployed() },
    ];

    const handleShowCV = () => {
        // Logika obsługująca akcję "Pokaż CV"
    };

    const handleNoInterest = () => {
        // Logika obsługująca akcję "Brak zainteresowania"
    };

    const handleEmployed = () => {
        // Logika obsługująca akcję "Zatrudniony"
    };

    return (<>
            {users.map(user => (
                <Accordion key={user.id}
                           expanded={expanded === user.id}
                           onChange={handleChange(user.id)}
                           sx={{ bgcolor: theme.palette.grey['800'], textAlign: 'initial', paddingBottom: '1rem' }}>
                    <AccordionSummary sx={{
                        bgcolor: theme.palette.secondary.light,
                        color: theme.palette.text.primary,
                        display: 'flex',
                        alignItems: 'center',
                    }} expandIcon={<ExpandMore sx={{ color: theme.palette.grey['300'], height: '70px' }} />}>
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '0 2px', marginRight: '20px'}}>
                            <p style={{fontSize: '12px', fontWeight: 'normal', fontFamily: 'sans-serif'}}>Rezerwacja do</p>
                            <p style={{fontSize: '14px'}}>23.05.2023</p>
                        </Box>
                        {/*@TODO: user.reservationDate*/}
                        <Typography
                            sx={{ width: '30px', height: '40px', lineHeight: '40px', flexShrink: 1, flexGrow: 1 }}>
                            {`${user.firstName} ${user.lastName}`}</Typography>
                        {buttonData.map((button, index) => (
                            <ButtonMain
                                key={index}
                                text={button.text}
                                sx={buttonStyles}
                                onClick={button.action}
                            />
                        ))}
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            bgcolor: theme.palette.grey['600'],
                            color: theme.palette.text.primary,
                            height: '130px',
                            '&.css-10ao48g-MuiAccordionDetails-root': {
                                padding: '0px',
                            },
                        }}>
                        <Grid container
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
                              }}>
                            {renderTypographyGridItem('Ocena przejścia kursu:', `${user.courseCompletion}`)}
                            {renderTypographyGridItem('Ocena aktywności i zaangażowania w kursie:', `${user.courseEngagement}`)}
                            {renderTypographyGridItem('Ocena kodu w projekcie własnym:', `${user.projectDegree}`)}
                            {renderTypographyGridItem('Ocena pracy w zespole w Scrum:', `${user.teamProjectDegree}`)}
                            {renderTypographyGridItem('Preferowane miejsce pracy:', user.expectedTypeWork)}
                            {renderTypographyGridItem('Docelowe miasto, gdzie chce pracować kandydat:', user.targetWorkCity)}
                            {renderTypographyGridItem('Oczekiwany typ kontraktu:', user.expectedContractType)}
                            {renderTypographyGridItem('Oczekiwane wynagrodzenie miesięczne netto:', user.expectedSalary)}
                            {renderTypographyGridItem('Zgoda na odbycie bezpłatnych praktyk/stażu na początek:', user.canTakeApprenticeship)}
                            {renderTypographyGridItem('Komercyjne doświadczenie w programowaniu:', user.monthsOfCommercialExp.toString())}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            ))}
                 </>
    );
};
