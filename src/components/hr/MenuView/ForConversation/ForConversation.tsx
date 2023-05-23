import { ButtonsAndInputView } from '../ButtonAndInputView/ButtonsAndInputView';
import { Container, Divider } from '@mui/material';
import theme from '../../../../theme';
import { ReservedAccordion } from '../../../common/Accordion/ReservedAccordion';
import { SearchValueProvider } from '../../../../context/SearchValueContext';


export const ForConversation = () => {

    return (
        <><SearchValueProvider>
            <ButtonsAndInputView />
            <Container>
                <Divider sx={{ bgcolor: theme.palette.grey['900'] }} />
                <ReservedAccordion />
            </Container>
        </SearchValueProvider>
        </>
    );
};
