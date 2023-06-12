import React, { useContext, useEffect } from 'react';
import { ButtonMain } from '../Buttons/ButtonMain';
import { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../../../config/api';
import { ENDPOINTS } from '../../../services/endpoints/endpoints';
import { useParams } from 'react-router-dom';
import { CustomPagination } from '../Pagination/CustomPagination';
import { Loading } from '../Loading/Loading';
import { CustomSnackBar } from '../CustomSnackBar/CustomSnackBar';
import { UserAndSkills } from '../../../types/userAndSkills';
import { useSnackBar } from '../../../hooks/useSnackBar';
import { SnackBarEnum } from '../../../types/formValues';
import { ButtonData } from '../../../types/buttonData';
import { SearchValueContext } from '../../../context/SearchValueContext';
import { FilterDataContext } from '../../../context/FilterDataContext';
import { useNavigate } from 'react-router-dom';
import { handleErrorResponse } from '../../../utils/handleErrorSnackBarResponse';
import { AccordionItem } from './AccordionItem';
import { setStatus } from '../../../utils/setStatus';

interface Props {
    url: string;
    tab: number;
    add?: string;
}

export const buttonStyles = {
    fontSize: '1rem',
    borderRadius: '0',
    textTransform: 'none',
    marginRight: '20px',
};

export const BasicAccordion = ({ url, tab, add }: Props) => {
    const { searchValue, setSearchValue } = useContext(SearchValueContext);
    const { params, setParams } = useContext(FilterDataContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [users, setUsers] = useState<UserAndSkills[]>([]);
    const [loading, setLoading] = useState(true);
    const [expanded, setExpanded] = useState<string | false>(false);
    const { id } = useParams();
    const { snackBarMessage, snackBarType, isSnackBarOpen, hideSnackBar, showSnackBar } = useSnackBar();

    useEffect(() => {
        const fetchAvailableUsers = async (url: string) => {
            try {
                const urlProps = `${url}?page=${currentPage}&limit=${rowsPerPage}`;
                const urlSearch = `${apiUrl}${ENDPOINTS.search}/${id}/?search=${searchValue}&tab=${tab}`;
                const urlFilter = `${apiUrl}${ENDPOINTS.filter}/${id}/?${params}&tab=${tab}`;
                const availableUrl = searchValue ? urlSearch : (params ? urlFilter : urlProps);
                const response = await axios.get(availableUrl, { withCredentials: true });
                const { users, totalCount, totalPages } = response.data;
                setUsers(users);
                setTotalCount(totalCount);
                if (totalCount === 0) {
                    showSnackBar('Brak kursantów', SnackBarEnum.ERROR_MESSAGE);
                }
                setTotalPages(totalPages);
                setLoading(false);
            } catch (error: any) {
                setLoading(false);
                handleErrorResponse(error, showSnackBar);
            }
        };
        setLoading(true);
        fetchAvailableUsers(url);
    }, [currentPage, rowsPerPage, searchValue, params]);

    const navigate = useNavigate();
    const handleShowCV = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, email?: string) => {
        navigate(`/cv/${id}/${email}`);
    };
    const handleAction = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, email?: string, status?: string) => {
        event.stopPropagation();
        await setStatus(users,totalCount,totalPages, currentPage,rowsPerPage,setUsers,setCurrentPage,setTotalCount,setRowsPerPage, showSnackBar, id,email,status,)
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

    const handleShowAllResults = () => {
        setSearchValue('');
        setParams('');
    };
    if (loading) return <Loading />;
    return (<>
            {(searchValue || params) && (
                <ButtonMain
                    text='Pokaż wszystkie wyniki'
                    sx={buttonStyles}
                    onClick={handleShowAllResults}
                />)}
                {users ?
                    users.map(user =>
                        <AccordionItem key={user.email} user={user} expanded={expanded}
                                       setExpanded={setExpanded} buttonData={buttonData}
                                       handleShowCV={handleShowCV} handleAction={handleAction} />) : null}
                {users.length > 0 ?
                    <CustomPagination
                        count={totalCount}
                        page={currentPage - 1}
                        rowsPerPage={rowsPerPage}
                        onPageChange={(page, event) => handlePageChange(event === undefined ? null : event, page)}
                        onRowsPerPageChange={handleRowsPerPageChange}
                    /> : null}
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
