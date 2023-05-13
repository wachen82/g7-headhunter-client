import { ButtonsAndInputView } from '../ButtonAndInputView/ButtonsAndInputView'
import { Container, Divider } from '@mui/material';
import theme from '../../../../theme';
import { CustomAccordion } from '../../../common/Accordion/CustomAccordion';

export const AvailableUsers = () => {

    return (
        <>
            <ButtonsAndInputView />
            <Container>
                <Divider sx={{ bgcolor: theme.palette.grey['900'] }} />
                <CustomAccordion/>
            </Container>
        </>
    )
}
