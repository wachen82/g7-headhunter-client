import { ButtonsAndInputView } from '../ButtonAndInputView/ButtonsAndInputView';
import { CustomAccordionFilter } from '../../../common/Accordion/CustomAccordionFilter';
import { users } from '../AvailableStudents/AvailableStudents';
import { Container, Divider } from '@mui/material';
import theme from '../../../../theme';
import React from 'react';

export const ForConversation = () => {
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
