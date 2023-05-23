import { ButtonsAndInputView } from '../ButtonAndInputView/ButtonsAndInputView';
import { Container, Divider } from '@mui/material';
import theme from '../../../../theme';
import { AvailableAccordion } from '../../../common/Accordion/AvailableAccordion';
import { SearchValueProvider } from '../../../../context/SearchValueContext';

export const AvailableUsers = () => {

    return (
        <>
            <SearchValueProvider>
                <ButtonsAndInputView />
                <Container>
                    <Divider sx={{ bgcolor: theme.palette.grey['900'] }} />
                    <AvailableAccordion />
                </Container>
            </SearchValueProvider>
        </>
    );
};
