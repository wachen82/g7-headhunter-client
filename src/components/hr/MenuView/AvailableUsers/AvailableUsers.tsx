import { ButtonsAndInputView } from '../ButtonAndInputView/ButtonsAndInputView'
import { Container, Divider } from '@mui/material';
import theme from '../../../../theme';
import { AvailableAccordion } from '../../../common/Accordion/AvailableAccordion';

export const AvailableUsers = () => {

    return (
        <>
            <ButtonsAndInputView />
            <Container>
                <Divider sx={{ bgcolor: theme.palette.grey['900'] }} />
                <AvailableAccordion/>
            </Container>
        </>
    )
}
