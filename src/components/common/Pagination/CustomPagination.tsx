import React from 'react';
import { styled } from '@mui/system';
import TablePagination, { TablePaginationProps } from '@mui/material/TablePagination';

const StyledTablePagination = styled(TablePagination)<TablePaginationProps>`
  .css-i4bv87-MuiSvgIcon-root {
    background-color: #CFCFCF;
  }

  button:nth-child(1) .MuiSvgIcon-root {
    background-color: #666666;
  }

  .css-vnofp3-MuiInputBase-root-MuiTablePagination-select {
    color: #333333 !important;
    background-color: #CFCFCF;
  }

  .css-k5r1by-MuiTableCell-root-MuiTablePagination-root {
    border-bottom: none !important;
  }
`;

interface PaginationProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (page: number) => void;
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
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        onPageChange(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        onRowsPerPageChange(parseInt(event.target.value, 10));
    };

    return (
        <StyledTablePagination
            count={count}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage='Ilość elementów'
        />
    );
};
