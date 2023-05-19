import React from 'react';
import { styled } from '@mui/system';
import TablePagination, { TablePaginationProps } from '@mui/material/TablePagination';
import theme from '../../../theme';

const StyledTablePagination = styled(TablePagination)<TablePaginationProps>`
  .css-i4bv87-MuiSvgIcon-root {
    background-color: ${theme.palette.grey['100']};
  ;
  }

  button:nth-of-type(1) .MuiSvgIcon-root {
    background-color: ${theme.palette.grey['300']};
  }

  .css-vnofp3-MuiInputBase-root-MuiTablePagination-select {
    color: ${theme.palette.grey['500']} !important;
    background-color: ${theme.palette.grey['100']};
  }
`;

interface PaginationProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (page: number, event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onRowsPerPageChange: (rowsPerPage: number) => void;
}

export const CustomPagination: React.FC<PaginationProps> = ({
                                                                count,
                                                                page,
                                                                rowsPerPage,
                                                                onPageChange,
                                                                onRowsPerPageChange,
                                                            }) => {
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
        newPage: number,
    ) => {
        onPageChange(newPage, event === null ? undefined : event);
    };


    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const newRowsPerPage = parseInt(event.target.value, 10);

        if (newRowsPerPage <= count || newRowsPerPage === count) {
            onRowsPerPageChange(newRowsPerPage);
        }
    };
    const validRowsPerPageOptions = [10, 25, 50].filter(option => option <= count);

    return (
        <StyledTablePagination
            count={count}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage='Ilość elementów'
            labelDisplayedRows={({ from, to, count }) => (
                `Ilość elementów ${from}-${to} z ${count}`
            )}
            rowsPerPageOptions={validRowsPerPageOptions}
        />
    );
};
