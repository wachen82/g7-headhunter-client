import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Box, Avatar, Container } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import theme from '../../../theme';
import { ButtonMain } from '../Buttons/ButtonMain';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../../../config/api';
import { ENDPOINTS } from '../../../services/endpoints/endpoints';
import { Loading } from '../Loading/Loading';
import { CustomPagination } from '../Pagination/CustomPagination';
import { handleChange } from '../../../utils/handleChange';
import { CustomSnackBar } from '../CustomSnackBar/CustomSnackBar';
import { renderTypographyGridItem } from '../../../utils/renderSkills';
import { UserAndSkills } from '../../../types/userAndSkills';
import { ButtonData } from 'src/types/buttonData';

const buttonStyles = {
    fontSize: '1rem',
    borderRadius: '0',
    textTransform: 'none',
    marginRight: '20px',
};

export const CustomAccordionFilter = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalCount, setTotalCount] = useState(0);
    const [reservedUsers, setReservedUsers] = useState<UserAndSkills[]>([]);
    const [loading, setLoading] = useState(true);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarType, setSnackbarType] = useState('');
    const [expanded, setExpanded] = useState<string | false>(false);

    const { id } = useParams();
    useEffect(() => {
        const fetchReservedUsers = async (userId: string | undefined) => {
        if(!userId) return null
            try {
                const response = await axios.get(`${apiUrl}/hr/${userId}?page=${currentPage}&limit=${rowsPerPage}`, { withCredentials: true });
                const { users, totalCount } = response.data;
                console.log(totalCount);
                setReservedUsers(users);
                setTotalCount(totalCount);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        setLoading(true);
        fetchReservedUsers(id);
    }, [id, currentPage, rowsPerPage]);

    const handleShowCV = () => {
        // @TODO: Logika obsługująca akcję "Pokaż CV"
    };
    const handleAction = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, email?: string, status?: string) => {
        event.stopPropagation();
        try {
            await axios.patch(
                `${apiUrl}${ENDPOINTS.setStatus}/${id}`,
                {
                    email: email,
                    status: status,
                },
                { withCredentials: true }
            );
            setReservedUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));
                setSnackbarType('success');
                setSnackbarOpen(true);
            if (status === 'Dostępny') {
                setSnackbarMessage('Kursant przestał być zarezerwowany');
            } else if (status === 'Zatrudniony') {
                setSnackbarMessage('Kursant został oznaczony jako zatrudniony');
            }
            const newTotalCount = totalCount - 1;
            setTotalCount(newTotalCount);
            const currentRowCount = reservedUsers.length;
            if (currentRowCount < rowsPerPage) {
                setRowsPerPage(currentRowCount);
            }
            const newPageCount = Math.ceil(newTotalCount / rowsPerPage);
            if (currentPage > newPageCount) {
                setCurrentPage(newPageCount);
            }
            if ((currentPage - 1) * rowsPerPage >= newTotalCount) {
                setCurrentPage(currentPage - 1);
            }
        } catch (error: any) {
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data.message;
                setSnackbarMessage(errorMessage);
                setSnackbarType('error');
                setSnackbarOpen(true);
            } else {
                console.log('Wystąpił inny błąd');
            }
        }
    };

    const buttonData: ButtonData[] = [
        { text: 'Pokaż CV', action: handleShowCV },
        { text: 'Brak zainteresowania', status: 'Dostępny', action: handleAction },
        { text: 'Zatrudniony', status: 'Zatrudniony', action: handleAction },
    ];

    const handlePageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setCurrentPage(newPage === currentPage - 1 ? currentPage - 1 : newPage === currentPage + 1 ? currentPage + 1 : newPage + 1);
    };

    const handleRowsPerPageChange = (newRowsPerPage: number) => {
        setRowsPerPage(newRowsPerPage);
        setCurrentPage(1);
    };

    if(loading) return <Loading/>

    return (<>
            {reservedUsers ? reservedUsers.map((user) => (
                <Accordion key={user.email}
                           expanded={expanded === user.email}
                           onChange={handleChange(user.email, setExpanded)}
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
                            <p style={{ fontSize: '14px' }}>{user.reservationExpiryDate}</p>
                        </Box>
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
            <Container sx={{
                maxWidth: '80%',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                { reservedUsers.length > 0 ?   <CustomPagination
                    count={totalCount}
                    page={currentPage - 1}
                    rowsPerPage={rowsPerPage}
                    onPageChange={(page, event) => handlePageChange(event === undefined ? null : event, page)}
                    onRowsPerPageChange={handleRowsPerPageChange}
                />: null }
            </Container>
            <CustomSnackBar
                actionState={snackbarOpen}
                setAction={setSnackbarOpen}
                type={snackbarType}
                message={snackbarMessage}
            />
        </>
    );
};
