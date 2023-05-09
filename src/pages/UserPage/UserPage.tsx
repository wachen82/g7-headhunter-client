import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import { UsersAppBar } from '../../components/common/AppBar/UsersAppBar';
import { useAppSelector } from '../../hooks/reduxHooks';
import axios from 'axios';
import { apiUrl } from '../../config/api';
import { useEffect, useState } from 'react';
import { IUserProfileEntity, UserProfilResponse, UserRespons } from 'types';
import { Box } from '@mui/material';
import { BackArrowLink } from '../../components/common/BackArrowLink/BackArrowLink';
import { InfoBox } from '../../components/common/account/info/InfoBox';
import { PortfolioBar } from '../../components/common/StudentPortfolio/PortfolioBar';
import { PortfolioContent } from '../../components/common/StudentPortfolio/PortfolioContent';
import { GradesBox } from '../../components/common/StudentPortfolio/Grades/GradesBox';
import { ExpectationsBox } from '../../components/common/StudentPortfolio/Expectations/ExpectationsBox';
import { PortfolioLink } from '../../components/common/StudentPortfolio/PortfolioLink/PortfolioLink';

export const UserPage = () => {
    useTitle('Strona Kursanta');
    const user = useAppSelector((state) => state.user) as UserRespons;
    const [userProfile, setUserProfile] = useState<UserProfilResponse>();

    const fullName = `${userProfile?.info.firstName} ${userProfile?.info.lastName}`;
    const githubUsername = 'xkrsx';

    useEffect(() => {
        (async () => {
            if (!user) return null;
            const res = await axios(`${apiUrl}/user/${user._id}`, {
                method: 'GET',
                withCredentials: true,
            });
            setUserProfile(res.data);
        })();
    }, [user]);

    if (!user) {
        return null;
    }

    // console.log(userProfile?.profile.projectUrls[1].url);

    return (
        <main
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box sx={{ width: '100%' }}>
                <UsersAppBar
                    avatarUrl={userProfile?.info.avatar as string}
                    userName={fullName}
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '80%',
                }}
            >
                <BackArrowLink url={'#'} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'center',
                    }}
                >
                    <Box>
                        <InfoBox
                            avatarUrl={userProfile?.info.avatar as string}
                            firstName={userProfile?.info.firstName as string}
                            lastName={userProfile?.info.lastName as string}
                            githubUsername={githubUsername}
                            phone={userProfile?.info.phone as string}
                            email={userProfile?.info.email as string}
                            bio={userProfile?.info.bio as string}
                        />
                    </Box>

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
                                    .expectedSalary as string
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
                                backgroundColor: '#222324',
                                width: '1176px',
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
                                backgroundColor: '#222324',
                                width: '1176px',
                                padding: '17px 26px 15px 26px',
                                margin: '0 0 12px 4px',
                            }}
                        >
                            {userProfile?.profile.bonusProjectUrls!.map(
                                (link) => (
                                    <PortfolioLink url={link} key={link} />
                                )
                            )}
                        </Box>

                        <PortfolioBar sectionName={'Projekt na zaliczenie'} />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: '#222324',
                                width: '1176px',
                                padding: '17px 26px 15px 26px',
                                margin: '0 0 12px 4px',
                            }}
                        >
                            {/*{(userProfile?.profile.projectUrls[0][*/}
                            {/*    'url'*/}
                            {/*] as any)!.map((link: string) => (*/}
                            {/*    <PortfolioLink url={link} key={link} />*/}
                            {/*))}*/}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </main>
    );
};
