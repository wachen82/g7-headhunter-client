import { ButtonsAndInputView } from '../ButtonAndInputView/ButtonsAndInputView';
import { Container, Divider } from '@mui/material';
import theme from '../../../../theme';
import { ReservedAccordion } from '../../../common/Accordion/ReservedAccordion';
import { SearchValueProvider } from '../../../../context/SearchValueContext';
import { FilterDataProvider } from '../../../../context/FilterDataContext';


export const ForConversation = () => {

    return (
        <SearchValueProvider>
            <FilterDataProvider>
                <ButtonsAndInputView />
                <Container>
                    <Divider sx={{ bgcolor: theme.palette.grey['900'] }} />
                    <ReservedAccordion />
                </Container>
            </FilterDataProvider>
        </SearchValueProvider>
    );
};
