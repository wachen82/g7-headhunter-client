import * as React from 'react';
import { Box, Container } from '@mui/material';
import { BasicPanel } from './BasicPanel';
import { AvailableUsers } from '../AvailableUsers/AvailableUsers';
import { ForConversation } from '../ForConversation/ForConversation';
import { CustomTabs } from './CustomTabs';
import { CustomPagination } from '../../../common/Pagination/CustomPagination';
import { useEffect, useState } from 'react';
import { HrRespons } from 'types';
import axios from 'axios';
import { apiUrl } from '../../../../config/api';
import { ENDPOINTS } from '../../../../services/endpoints/endpoints';
import { useParams } from 'react-router-dom';

interface MenuProps {
    user: HrRespons;
}

export const Menu = ({ user }: MenuProps) => {
    const [availableUsers, setAvailableUsers] = useState([]);
    useEffect(() => {
        const fetchAvailableUsers = async () => {
            try {
                const response = await axios.get(`${apiUrl}${ENDPOINTS.availableUsers}`, { withCredentials: true });
                const availableUsers = response.data;
                console.log(availableUsers);
                setAvailableUsers(availableUsers);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAvailableUsers();
    }, []);


    const [reservedUsers, setReservedUsers] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const fetchReservedUsers = async (userId: string | undefined) => {
            try {
                const response = await axios.get(`${apiUrl}${ENDPOINTS.reservedUsers}/${user}/${userId}`, { withCredentials: true });
                const reservedUsers = response.data;
                console.log(reservedUsers);
                setReservedUsers(reservedUsers);
            } catch (error) {
                console.error(error);
            }
        };

        fetchReservedUsers(id);
    }, [id]);

    const [value, setValue] = React.useState(0);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (newRowsPerPage: number) => {
        setRowsPerPage(newRowsPerPage);
        setPage(0);
    };
    const data = value === 0 ? availableUsers : reservedUsers;
    const totalCount = data.length;

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', padding: 0 }}>
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    padding: '0',
                    margin: '0',
                }}
            >
                <CustomTabs
                    tabs={[
                        {
                            label: 'Dostępni kursanci',
                            index: 0,
                            value: 0,
                        },
                        {
                            label: 'Do rozmowy',
                            index: 1,
                            value: 1,
                        },
                    ]}
                    value={value}
                    onChange={handleChange}
                />
            </Box>
            <BasicPanel value={value} index={0}>
                <AvailableUsers users={availableUsers} />
            </BasicPanel>
            <BasicPanel value={value} index={1}>
                <ForConversation users={reservedUsers} />
            </BasicPanel>
            <Container sx={{
                maxWidth: '80%',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                <CustomPagination
                    count={totalCount}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleRowsPerPageChange}
                />
            </Container>
        </Box>
    );
};
