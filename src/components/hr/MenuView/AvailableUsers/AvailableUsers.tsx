import { ButtonsAndInputView } from '../ButtonAndInputView/ButtonsAndInputView';
import { Container, Divider } from '@mui/material';
import theme from '../../../../theme';
import { AvailableAccordion } from '../../../common/Accordion/AvailableAccordion';
import { SearchValueProvider } from '../../../../context/SearchValueContext';
import { FilterDataProvider } from '../../../../context/FilterDataContext';

export const AvailableUsers = () => {

    return (
        <SearchValueProvider>
            <FilterDataProvider>
                <ButtonsAndInputView />
                <Container>
                    <Divider sx={{ bgcolor: theme.palette.grey['900'] }} />
                    <AvailableAccordion />
                </Container>
            </FilterDataProvider>
        </SearchValueProvider>
    );
};
