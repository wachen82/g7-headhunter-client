import { ButtonsAndInputView } from '../ButtonAndInputView/ButtonsAndInputView';
import { CustomAccordionFilter } from '../../../common/Accordion/CustomAccordionFilter';
import { Container, Divider } from '@mui/material';
import theme from '../../../../theme';
import { UserListProps } from '../../../common/Accordion/CustomAccordion';


export const ForConversation = ({users}:UserListProps) => {

    return (
        <>
            <ButtonsAndInputView />
            <Container>
                <Divider sx={{ bgcolor: theme.palette.grey['900'] }} />
                <CustomAccordionFilter users={users} />
            </Container>
        </>
    );
};
