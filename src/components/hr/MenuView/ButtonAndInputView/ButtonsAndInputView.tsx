import { Container } from '@mui/material';
import { InputSearch } from '../../../common/Inputs/InputSearch';
import { FilterButton } from '../../../common/Buttons/FilterButton/FilterButton';

export const ButtonsAndInputView = () => {
    return (
        <>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '14px 20px',
                }}
            >
                <InputSearch />
                <FilterButton />
            </Container>
        </>
    );
};
