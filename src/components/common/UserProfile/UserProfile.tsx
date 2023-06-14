import React from 'react';
import { Box, Container } from '@mui/material';
import { UserProfilResponse } from 'types';
import { BackArrowLink } from '../BackArrowLink/BackArrowLink';
import { PortfolioBar } from '../UserPortfolio/PortfolioBar';
import { PortfolioContent } from '../UserPortfolio/PortfolioContent';
import { useLocation, useParams } from 'react-router-dom';
import { Grades } from './Grades';
import { Expectations } from './Expectations';
import { PortfolioUrls } from './PortfolioUrls';
import { Info } from './Info';

export interface UserProfileProps {
    userProfile?: UserProfilResponse;
}

export const UserProfile = ({ userProfile }: UserProfileProps) => {
    const { courses, education, workExperience } = userProfile?.profile || {};
    const location = useLocation();
    const { id } = useParams();

    return (
        <main
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100vw',
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    width: '80%',
                }}
            >
                {location.pathname.startsWith('/cv') ? <BackArrowLink url={`/hr/${id}`} /> : null}
                <Info userProfile={userProfile}/>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <PortfolioBar sectionName={'Oceny'} />
                    <Grades userProfile={userProfile} />
                    <PortfolioBar sectionName={'Oczekiwanie w stosunku do zatrudnienia'} />
                    <Expectations userProfile={userProfile} />
                    <PortfolioBar sectionName={'Edukacja'} />
                    <PortfolioContent content={education} />
                    <PortfolioBar sectionName={'Kursy'} />
                    <PortfolioContent content={courses} />
                    <PortfolioBar sectionName={'Doświadczenie zawodowe'} />
                    <PortfolioContent content={workExperience} />
                    <PortfolioUrls userProfile={userProfile} />
                </Box>
            </Container>
        </main>
    );
};
