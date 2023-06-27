import { ENDPOINTS } from '../services/endpoints/endpoints';
import { apiUrl } from '../config/api';
import { SnackBarEnum } from '../types/formValues';
import axios from 'axios';
import { UserAndSkills } from '../types/userAndSkills';
import React from 'react';
import { handleErrorResponse } from './handleErrorSnackBarResponse';
import { Status } from '../types/status';

export const setStatus = async (users: UserAndSkills[], totalCount: number, totalPages: number,
                                currentPage: number, rowsPerPage: number, setUsers: React.Dispatch<React.SetStateAction<UserAndSkills[]>>,
                                setCurrentPage: React.Dispatch<React.SetStateAction<number>>, setTotalCount: React.Dispatch<React.SetStateAction<number>>,
                                setRowsPerPage: React.Dispatch<React.SetStateAction<number>>, showSnackBar: (message: string, type: SnackBarEnum) => void,
                                id?: string, email?: string, status?: string) => {
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
            case Status.RESERVED:
                showSnackBar('Kursant zarezerwowany', SnackBarEnum.SUCCESS_MESSAGE);
                break;
            case Status.AVAILABLE:
                showSnackBar('Kursant przestał być zarezerwowany', SnackBarEnum.SUCCESS_MESSAGE);
                break;
            case Status.EMPLOYED:
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
        handleErrorResponse(error, showSnackBar);
    }
};

