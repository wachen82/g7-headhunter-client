import { ButtonMain } from '../ButtonMain';
import { SearchIcon } from '../../../icon/SearchIcon';
import theme from '../../../../theme';
import { Dispatch, SetStateAction, useState } from 'react';
import { CustomModal } from '../../Modal/CustomModal';


export const FilterButton = () => {
    const [open, setOpen] = useState(false);

    const handleClick = (setOpen: Dispatch<SetStateAction<boolean>>) => {
        setOpen((prevState) => !prevState);
    };

    const handleButtonClick = () => {
        handleClick(setOpen);
    };
    return (<>
            <CustomModal open={open} setOpen={setOpen} />
            <ButtonMain
                onClick={handleButtonClick}
                icon={<SearchIcon />}
                text='Filtrowanie'
                sx={{
                    textTransform: 'none',
                    width: '111px',
                    height: '38px',
                    display: 'flex',
                    fontWeight: 'normal',
                    color: theme.palette.text.primary,
                    bgcolor: theme.palette.grey['800'],
                    borderRadius: '0',
                }}
            />
        </>
    );
};
