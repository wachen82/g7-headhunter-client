import { ButtonsAndInputView } from '../ButtonAndInputView/ButtonsAndInputView'
import { Container, Divider } from '@mui/material';
import theme from '../../../../theme';
import { CustomAccordion, UserListProps } from '../../../common/Accordion/CustomAccordion';

export const AvailableUsers = ({users}:UserListProps) => {

    return (
        <>
            <ButtonsAndInputView />
            <Container>
                <Divider sx={{ bgcolor: theme.palette.grey['900'] }} />
                <CustomAccordion users={users}/>
            </Container>
        </>
    )
}
