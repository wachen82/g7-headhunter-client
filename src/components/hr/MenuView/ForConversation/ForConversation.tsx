import { ButtonsAndInputView } from '../ButtonAndInputView/ButtonsAndInputView';
import { Container, Divider } from '@mui/material';
import theme from '../../../../theme';
import { ReservedAccordion } from '../../../common/Accordion/ReservedAccordion';


export const ForConversation = () => {

    return (
        <>
            <ButtonsAndInputView />
            <Container>
                <Divider sx={{ bgcolor: theme.palette.grey['900'] }} />
                <ReservedAccordion/>
            </Container>
        </>
    );
};
