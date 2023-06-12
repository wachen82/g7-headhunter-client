import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { handleChange } from '../../../utils/handleChange';
import theme from '../../../theme';
import { ExpandMore } from '@mui/icons-material';
import { ButtonMain } from '../Buttons/ButtonMain';
import React from 'react';
import { buttonStyles } from './BasicAccordion';
import { UserAndSkills } from '../../../types/userAndSkills';
import { ButtonData } from '../../../types/buttonData';
import { UserSkills } from './UserSkills';

interface Props {
    user: UserAndSkills;
    expanded: string | false;
    setExpanded: React.Dispatch<React.SetStateAction<string | false>>;
    buttonData: ButtonData[];
    handleShowCV: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, email?: string) => void;
    handleAction: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, email?: string, status?: string) => void;
}

export const AccordionItem = ({ user, expanded, setExpanded, buttonData, handleShowCV, handleAction }: Props) => {
    const showCVIndex = buttonData.findIndex(button => button.text === 'Pokaż CV');
    return (
        <Accordion key={user.email}
                   expanded={expanded === user.email}
                   onChange={handleChange(user.email, setExpanded)}
                   sx={{ bgcolor: theme.palette.grey['800'], textAlign: 'initial', paddingBottom: '1rem' }}>
            <AccordionSummary
                sx={{
                    bgcolor: theme.palette.secondary.light,
                    color: theme.palette.text.primary,
                    display: 'flex',
                    alignItems: 'center',
                }}
                expandIcon={<ExpandMore sx={{ color: theme.palette.grey['300'], height: '70px' }} />}
            >
                <Typography
                    sx={{ width: '30px', height: '40px', lineHeight: '40px', flexShrink: 1, flexGrow: 1 }}>
                    {`${user.firstName} ${user.lastName.charAt(0)}.`}
                </Typography>
                {buttonData.map((button, index) => (
                    <ButtonMain
                        key={index}
                        text={button.text}
                        sx={buttonStyles}
                        onClick={(event) => {
                            index === showCVIndex ? handleShowCV(event, user.email) : handleAction(event, user.email, button.status);
                        }}
                    />
                ))}
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    bgcolor: theme.palette.grey['600'],
                    color: theme.palette.text.primary,
                    height: '130px',
                    '&.css-10ao48g-MuiAccordionDetails-root': { padding: '0px' },
                }}
            >
                <UserSkills user={user} />
            </AccordionDetails>
        </Accordion>
    );
};
