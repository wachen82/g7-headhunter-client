import { ButtonsAndInputView } from '../ButtonAndInputView/ButtonsAndInputView';
import { CustomAccordionFilter } from '../../../common/Accordion/CustomAccordionFilter';
import { Container, Divider } from '@mui/material';
import theme from '../../../../theme';


export const ForConversation = () => {

    return (
        <>
            <ButtonsAndInputView />
            <Container>
                <Divider sx={{ bgcolor: theme.palette.grey['900'] }} />
                <CustomAccordionFilter />
            </Container>
        </>
    );
};
