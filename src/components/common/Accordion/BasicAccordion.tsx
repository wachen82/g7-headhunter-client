import React, { useContext, useEffect } from 'react';
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
import { useSnackBar } from '../../../hooks/useSnackBar';
import { SnackBarEnum } from '../../../types/formValues';
import { ButtonData } from '../../../types/buttonData';
import { useNavigate } from 'react-router-dom';
import { SearchValueContext } from '../../../context/SearchValueContext';

interface Props {
    url: string;
    tab: number;
    add?: string;
}

const buttonStyles = {
    fontSize: '1rem',
    borderRadius: '0',
    textTransform: 'none',
    marginRight: '20px',
};
export const BasicAccordion = ({ url, tab, add }: Props) => {
    const { searchValue } = useContext(SearchValueContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [users, setUsers] = useState<UserAndSkills[]>([]);
    const [loading, setLoading] = useState(true);
    const [expanded, setExpanded] = useState<string | false>(false);
    const {
        snackBarMessage,
        snackBarType,
        isSnackBarOpen,
        hideSnackBar,
        showSnackBar,
    } = useSnackBar();
    useEffect(() => {
        const fetchAvailableUsers = async (url: string) => {
            try {
                const pagesAndLimit = `page=${currentPage}&limit=${rowsPerPage}`;
                const urlProps = `${url}?${pagesAndLimit}`;
                const urlSearch = `${apiUrl}${ENDPOINTS.search}/?search=${searchValue}&tab=${tab}&${pagesAndLimit}`;
                const availableUrl = searchValue ? urlSearch : urlProps;
                const response = await axios.get(availableUrl, { withCredentials: true });
                const { users, totalCount, totalPages } = response.data;
                setUsers(users);
                setTotalCount(totalCount);
                if (totalCount === 0) {
                    showSnackBar('Brak kursantów', SnackBarEnum.ERROR_MESSAGE);
                }
                setTotalPages(totalPages);
                setLoading(false);
            } catch (error) {
                showSnackBar('Przepraszamy spróbuj ponownie później', SnackBarEnum.ERROR_MESSAGE);
            }
        };
        setLoading(true);
        fetchAvailableUsers(url);
    }, [currentPage, rowsPerPage, searchValue]);
    const navigate = useNavigate();
    const handleShowCV = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, userId?: string) => {
        navigate(`/user/${userId}`);
    };
    const { id } = useParams();
    const handleAction = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, email?: string, status?: string) => {
        event.stopPropagation();
        try {
            await axios.patch(
                `${apiUrl}${ENDPOINTS.setStatus}/${id}`,
                {
                    email: email,
                    status: status,
                },
                { withCredentials: true },
            );
            setUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));
            switch (status) {
                case 'W trakcie rozmowy':
                    showSnackBar('Kursant zarezerwowany', SnackBarEnum.SUCCESS_MESSAGE);
                    break;
                case 'Dostępny':
                    showSnackBar('Kursant przestał być zarezerwowany', SnackBarEnum.SUCCESS_MESSAGE);
                    break;
                case 'Zatrudniony':
                    showSnackBar('Kursant został oznaczony jako zatrudniony', SnackBarEnum.SUCCESS_MESSAGE);
                    break;
                default:
                    break;
            }
            const newTotalCount = totalCount - 1;
            setTotalCount(newTotalCount);
            const currentRowCount = users.length;
            if (currentRowCount < rowsPerPage) {
                setRowsPerPage(currentRowCount);
            }

            if (currentPage > totalPages) {
                setCurrentPage(totalPages);
            }
            if ((currentPage - 1) * rowsPerPage >= newTotalCount) {
                setCurrentPage(currentPage - 1);
            }
        } catch (error: any) {
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data.message;
                showSnackBar(errorMessage, SnackBarEnum.ERROR_MESSAGE);
            } else {
                showSnackBar('Przepraszamy spróbuj ponownie później', SnackBarEnum.ERROR_MESSAGE);
            }
        }
    };
    const threeButtonData: ButtonData[] = [
        { text: 'Pokaż CV', action: handleShowCV },
        { text: 'Brak zainteresowania', status: 'Dostępny', action: handleAction },
        { text: 'Zatrudniony', status: 'Zatrudniony', action: handleAction },
    ];
    const oneButtonData: ButtonData[] = [
        { text: 'Zarezerwuj', status: 'W trakcie rozmowy', action: handleAction },
    ];
    const buttonData: ButtonData[] = add ? threeButtonData : oneButtonData;

    const handlePageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setCurrentPage(newPage === currentPage - 1 ? currentPage - 1 : newPage === currentPage + 1 ? currentPage + 1 : newPage + 1);
    };

    const handleRowsPerPageChange = (newRowsPerPage: number) => {
        setRowsPerPage(newRowsPerPage);
        setCurrentPage(1);
    };
    const showCVIndex = buttonData.findIndex(button => button.text === 'Pokaż CV');

    if (loading) return <Loading />;
    return (<>
            {users ? users.map(user => (
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
                        {buttonData.map((button, index) => (
                            <ButtonMain
                                key={index}
                                text={button.text}
                                sx={buttonStyles}
                                onClick={(event) => {
                                    if (index === showCVIndex) {
                                        handleShowCV(event, user.id);
                                    } else {
                                        handleAction(event, user.email, button.status);
                                    }
                                }} />
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
            )) : []}
            <Container sx={{
                maxWidth: '80%',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                {users.length > 0 ?
                    <CustomPagination
                        count={totalCount}
                        page={currentPage - 1}
                        rowsPerPage={rowsPerPage}
                        onPageChange={(page, event) => handlePageChange(event === undefined ? null : event, page)}
                        onRowsPerPageChange={handleRowsPerPageChange}
                    />
                    : null}
            </Container>
            {isSnackBarOpen && (
                <CustomSnackBar
                    setAction={hideSnackBar}
                    actionState={isSnackBarOpen}
                    message={snackBarMessage}
                    type={snackBarType}
                />
            )}
        </>
    );
};
