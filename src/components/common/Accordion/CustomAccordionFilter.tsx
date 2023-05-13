import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Box, Avatar } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import theme from '../../../theme';
import { ButtonMain } from '../Buttons/ButtonMain';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../../../config/api';
import { UserAndSkills } from './CustomAccordion';
import { ENDPOINTS } from '../../../services/endpoints/endpoints';

const buttonStyles = {
    fontSize: '1rem',
    borderRadius: '0',
    textTransform: 'none',
    marginRight: '20px',
};

export const CustomAccordionFilter = () => {
    const [reservedUsers, setReservedUsers] = useState<UserAndSkills[]>([]);
    const { id } = useParams();
    useEffect(() => {
        const fetchReservedUsers = async (userId: string | undefined) => {
        if(!userId) return null
            try {
                const response = await axios.get(`${apiUrl}/hr/${userId}`, { withCredentials: true });
                const reservedUsers = response.data;
                setReservedUsers(reservedUsers);
            } catch (error) {
                console.error(error);
            }
        };
        fetchReservedUsers(id);
    }, [id]);

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

    const handleShowCV = () => {
        // @TODO: Logika obsługująca akcję "Pokaż CV"
    };
    const handleAction = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, email?: string, status?: string) => {
        event.stopPropagation();
        try {
            const response = await axios.patch(
                `${apiUrl}${ENDPOINTS.setStatus}/${id}`,
                {
                    email: email,
                    status: status,
                },
                { withCredentials: true }
            );
            console.log(response);
            setReservedUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));
        } catch (error) {
            console.error(error);
        }
    };

    type ButtonData = {
        text: string;
        action: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, email?: string, status?: string) => Promise<void> | void;
        status?: string;
    };
    const buttonData: ButtonData[] = [
        { text: 'Pokaż CV', action: handleShowCV },
        { text: 'Brak zainteresowania', status: 'Dostępny', action: handleAction },
        { text: 'Zatrudniony', status: 'Zatrudniony', action: handleAction },
    ];

    return (<>
            {reservedUsers ? reservedUsers.map((user) => (
                <Accordion key={user.email}
                           expanded={expanded === user.email}
                           onChange={handleChange(user.email)}
                           sx={{ bgcolor: theme.palette.grey['800'], textAlign: 'initial', paddingBottom: '1rem' }}>
                    <AccordionSummary sx={{
                        bgcolor: theme.palette.secondary.light,
                        color: theme.palette.text.primary,
                        display: 'flex',
                        alignItems: 'center',
                    }} expandIcon={<ExpandMore sx={{ color: theme.palette.grey['300'], height: '70px' }} />}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0 2px',
                            marginRight: '20px',
                        }}>
                            <p style={{ fontSize: '12px', fontWeight: 'normal', fontFamily: 'sans-serif' }}>Rezerwacja
                                do</p>
                            <p style={{ fontSize: '14px' }}>23.05.2023</p>
                        </Box>
                        {/*@TODO: user.reservationDate*/}
                        <Avatar key={user.id} src={user.avatar} />
                        <Typography
                            sx={{ width: '30px', height: '40px', lineHeight: '40px', flexShrink: 1, flexGrow: 1, marginLeft: '2px' }}>
                            {`${user.firstName} ${user.lastName}`}</Typography>
                        {buttonData.map((button, index) => (
                            <ButtonMain
                                key={index}
                                text={button.text}
                                sx={buttonStyles}
                                onClick={(event) => handleAction(event, user.email, button.status)}
                            />
                        ))}
                    </AccordionSummary>
                    <AccordionDetails
                        key={user.id}
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
            )) : []}
        </>
    );
};
