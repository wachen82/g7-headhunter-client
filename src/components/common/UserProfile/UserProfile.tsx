import React from 'react';
import { Box, Container } from '@mui/material';
import {
    IUserProfileEntity,
    UserProfilResponse,
} from 'types';
import { InfoBox } from '../account/info/InfoBox';
import { BackArrowLink } from '../BackArrowLink/BackArrowLink';
import { PortfolioBar } from '../UserPortfolio/PortfolioBar';
import { GradesBox } from '../UserPortfolio/Grades/GradesBox';
import { ExpectationsBox } from '../UserPortfolio/Expectations/ExpectationsBox';
import { PortfolioContent } from '../UserPortfolio/PortfolioContent';
import { PortfolioLink } from '../UserPortfolio/PortfolioLink/PortfolioLink';
import { useLocation, useParams } from 'react-router-dom';
import theme from '../../../theme';

interface Props {
    userProfile?: UserProfilResponse;
}

export const UserProfile: React.FC<Props> = ({ userProfile }) => {
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
                {location.pathname.startsWith('/cv') ?  <BackArrowLink url={`/hr/${id}`} /> : null}
                <InfoBox
                    avatarUrl={userProfile?.info.avatar as string}
                    firstName={userProfile?.info.firstName as string}
                    lastName={userProfile?.info.lastName as string}
                    githubUsername={
                        userProfile?.info.githubUsername as string
                    }
                    phone={userProfile?.info.phone as string}
                    email={userProfile?.info.email as string}
                    bio={userProfile?.info.bio as string}
                    jobStatus={
                        userProfile?.info
                            .status as UserProfilResponse['info']['status']
                    }
                />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <PortfolioBar sectionName={'Oceny'} />
                    <GradesBox
                        courseCompletion={
                            userProfile?.profile.skills
                                .courseCompletion as number
                        }
                        courseEngagement={
                            userProfile?.profile.skills
                                .courseEngagement as number
                        }
                        projectDegree={
                            userProfile?.profile.skills
                                .projectDegree as number
                        }
                        teamProjectDegree={
                            userProfile?.profile.skills
                                .teamProjectDegree as number
                        }
                    />

                    <PortfolioBar
                        sectionName={
                            'Oczekiwanie w stosunku do zatrudnienia'
                        }
                    />
                    <ExpectationsBox
                        expectedTypeWork={
                            userProfile?.profile.expectations
                                .expectedTypeWork as IUserProfileEntity['expectedTypeWork']
                        }
                        targetWorkCity={
                            userProfile?.profile.expectations
                                .targetWorkCity as string
                        }
                        expectedContractType={
                            userProfile?.profile.expectations
                                .expectedContractType as IUserProfileEntity['expectedContractType']
                        }
                        expectedSalary={
                            userProfile?.profile.expectations
                                .expectedSalary as any
                        }
                        canTakeApprenticeship={
                            userProfile?.profile.expectations
                                .canTakeApprenticeship as IUserProfileEntity['canTakeApprenticeship']
                        }
                        monthsOfCommercialExp={
                            userProfile?.profile.expectations
                                .monthsOfCommercialExp as number
                        }
                    />

                    <PortfolioBar sectionName={'Edukacja'} />
                    <PortfolioContent
                        content={userProfile?.profile.education}
                    />

                    <PortfolioBar sectionName={'Kursy'} />
                    <PortfolioContent
                        content={userProfile?.profile.courses}
                    />

                    <PortfolioBar sectionName={'Doświadczenie zawodowe'} />
                    <PortfolioContent
                        content={userProfile?.profile.workExperience}
                    />

                    <PortfolioBar sectionName={'Portfolio'} />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            bgcolor: theme.palette.grey['600'],
                            width: '1000px',
                            padding: '17px 26px 15px 26px',
                            margin: '0 0 12px 4px',
                        }}
                    >
                        {userProfile?.profile.portfolioUrls!.map((link) => (
                            <PortfolioLink url={link} key={link} />
                        ))}
                    </Box>

                    <PortfolioBar
                        sectionName={'Projekt w zespole Scrumowym'}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            bgcolor: theme.palette.grey['600'],
                            width: '1000px',
                            padding: '17px 26px 15px 26px',
                            margin: '0 0 12px 4px',
                        }}
                    >
                        {userProfile?.profile.bonusProjectUrls!.map(
                            (link) => (
                                <PortfolioLink url={link} key={link} />
                            ),
                        )}
                    </Box>

                    <PortfolioBar sectionName={'Projekt na zaliczenie'} />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            bgcolor: theme.palette.grey['600'],
                            width: '1000px',
                            padding: '17px 26px 15px 26px',
                            margin: '0 0 12px 4px',
                        }}
                    >
                        {userProfile?.profile.projectUrls!.map((link) => (
                            <PortfolioLink url={link} key={link} />
                        ))}
                    </Box>
                </Box>
            </Container>
        </main>
    );
};
