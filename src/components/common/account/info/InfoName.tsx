import React from 'react';
import { Link, Typography } from '@mui/material';
import theme from '../../../../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IUserProfileEntity } from 'types';

interface Props {
    firstName: IUserProfileEntity['firstName'];
    lastName: IUserProfileEntity['lastName'];
    githubUsername: IUserProfileEntity['githubUsername'];
}

export const InfoName = ({ firstName, lastName, githubUsername }: Props) => {
    return (
        <>
            <Typography
                sx={{
                    fontSize: '18px',
                    lineHeight: '39px',
                    color: theme.palette.text.primary,
                    margin: '0 auto',
                    textTransform: 'capitalize',
                    fontWeight: 'light',
                }}
            >
                {firstName} {lastName}
            </Typography>

            <Typography
                sx={{
                    fontSize: '14px',
                    lineHeight: '27px',
                    margin: '0 auto',
                    textTransform: 'lowercase',
                    fontWeight: 'normal',
                }}
            >
                <Link
                    href={`https://github.com/${githubUsername}`}
                    target={'_blank'}
                    sx={{
                        textDecoration: 'none',
                        color: theme.palette.info.main,
                    }}
                >
                    <FontAwesomeIcon icon={faGithub} /> {githubUsername}
                </Link>
            </Typography>
        </>
    );
};
