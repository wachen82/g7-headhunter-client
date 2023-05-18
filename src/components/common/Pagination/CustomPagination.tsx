import React from 'react';
import { styled } from '@mui/system';
import TablePagination, { TablePaginationProps } from '@mui/material/TablePagination';

const StyledTablePagination = styled(TablePagination)<TablePaginationProps>`
  .css-i4bv87-MuiSvgIcon-root {
    background-color: #CFCFCF;
  }

  button:nth-of-type(1) .MuiSvgIcon-root {
    background-color: #666666;
  }

  .css-vnofp3-MuiInputBase-root-MuiTablePagination-select {
    color: #333333 !important;
    background-color: #CFCFCF;
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
