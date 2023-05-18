import React, { useEffect } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import theme from '../../../theme';
import { ButtonMain } from '../Buttons/ButtonMain';
import { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../../../config/api';
import { ENDPOINTS } from '../../../services/endpoints/endpoints';
import { GridContainer } from './GridContainer';
import { useParams } from 'react-router-dom';
import { CustomPagination } from '../Pagination/CustomPagination';
import { Loading } from '../Loading/Loading';
import { CustomSnackBar } from '../CustomSnackBar/CustomSnackBar';
import { handleChange } from '../../../utils/handleChange';
import { renderTypographyGridItem } from '../../../utils/renderSkills';
import { UserAndSkills } from '../../../types/userAndSkills';

export const CustomAccordion = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalCount, setTotalCount] = useState(0);
    const [availableUsers, setAvailableUsers] = useState<UserAndSkills[]>([]);
    const [loading, setLoading] = useState(true);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarType, setSnackbarType] = useState('');
    const [expanded, setExpanded] = useState<string | false>(false);

    useEffect(() => {
        const fetchAvailableUsers = async () => {
            try {
                const response = await axios.get(`${apiUrl}/hr?page=${currentPage}&limit=${rowsPerPage}`, { withCredentials: true });
                const { users, totalCount } = response.data;
                setAvailableUsers(users);
                setTotalCount(totalCount)
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        setLoading(true);
        fetchAvailableUsers()
    }, [currentPage, rowsPerPage]);

    const { id } = useParams();
    const handleButtonClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, email: string, status: string) => {
        event.stopPropagation();
        try {
            await axios.patch(`${apiUrl}${ENDPOINTS.setStatus}/${id}`, {
                email: email,
                status: status,
            }, { withCredentials: true });
            setAvailableUsers((prevUsers) =>
                prevUsers.filter((user) => user.email !== email)
            );
            setSnackbarMessage('Kursant zarezerwowany');
            setSnackbarType('success');
            setSnackbarOpen(true);
            const newTotalCount = totalCount - 1;
            setTotalCount(newTotalCount);
            const currentRowCount = availableUsers.length;
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
        } catch (error:any) {
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
    const handlePageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setCurrentPage(newPage === currentPage - 1 ? currentPage - 1 : newPage === currentPage + 1 ? currentPage + 1 : newPage + 1);
    };

    const handleRowsPerPageChange = (newRowsPerPage: number) => {
        setRowsPerPage(newRowsPerPage);
        setCurrentPage(1);
    };

    if(loading) return <Loading/>
    return (<>
            { availableUsers ? availableUsers.map(user => (
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
            <Container sx={{
                maxWidth: '80%',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                { availableUsers.length > 0 ?
                    <CustomPagination
                        count={totalCount}
                        page={currentPage - 1}
                        rowsPerPage={rowsPerPage}
                        onPageChange={(page, event) => handlePageChange(event === undefined ? null : event, page)}
                        onRowsPerPageChange={handleRowsPerPageChange}
                    />
                    : null }
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
