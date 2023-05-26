import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Dispatch, SetStateAction } from 'react';
import { FilterBox } from '../../hr/UserFilter/FilterBox';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    maxHeight: '80vh',
    overflowY: 'auto',
};
interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}
export const CustomModal = ({open, setOpen}: Props) => {

    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <FilterBox closeModal={handleClose}/>
                </Box>
            </Modal>
        </div>
    );
}
