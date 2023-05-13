import React, { useEffect } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import theme from '../../../theme';
import { ButtonMain } from '../Buttons/ButtonMain';
import { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../../../config/api';
import { ENDPOINTS } from '../../../services/endpoints/endpoints';
import { GridContainer } from './GridContainer';
import { useParams } from 'react-router-dom';

export interface UserAndSkills {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
    courseCompletion: number;
    courseEngagement: number;
    projectDegree: number;
    teamProjectDegree: number;
    expectedTypeWork: string;
    targetWorkCity: string;
    expectedContractType: string;
    expectedSalary: string;
    canTakeApprenticeship: string;
    monthsOfCommercialExp: number;
}


export const CustomAccordion = () => {
    const [availableUsers, setAvailableUsers] = useState<UserAndSkills[]>([]);
    useEffect(() => {
        const fetchAvailableUsers = async () => {
            try {
                const response = await axios.get(`${apiUrl}/hr`, { withCredentials: true });
                const availableUsers = response.data;
                console.log(availableUsers);
                setAvailableUsers(availableUsers);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAvailableUsers();
    }, []);

    const [expanded, setExpanded] = useState<string | false>(false);
    const { id } = useParams();
    const handleButtonClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, email: string, status: string) => {
        event.stopPropagation();
        try {
            const response = await axios.patch(`${apiUrl}${ENDPOINTS.setStatus}/${id}`, {
                email: email,
                status: status,
            }, { withCredentials: true });
            console.log(response);
            setAvailableUsers((prevUsers) =>
                prevUsers.filter((user) => user.email !== email)
            );
        } catch (error) {
            console.error(error);
        }
    };

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
    return (<>
            { availableUsers ? availableUsers.map(user => (
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
                        <Typography
                            sx={{ width: '30px', height: '40px', lineHeight: '40px', flexShrink: 1, flexGrow: 1 }}>
                            {`${user.firstName} ${user.lastName.charAt(0)}.`}</Typography>
                        <ButtonMain text='Zarezerwuj rozmowę'
                                    onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => handleButtonClick(event, user.email, 'W trakcie rozmowy')}
                                    sx={{
                            fontSize: '1rem',
                            borderRadius: '0',
                            textTransform: 'none',
                            marginRight: '20px',
                        }} />
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
                        <GridContainer>
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
                        </GridContainer>
                    </AccordionDetails>
                </Accordion>
            )) : [] }
        </>
    );
};
