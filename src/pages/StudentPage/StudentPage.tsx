import React from 'react'
import { useTitle } from '../../hooks/useTitle'
import { UsersAppBar } from '../../components/common/AppBar/UsersAppBar'
import { InfoBox } from '../../components/common/account/info/InfoBox'
import { BackArrowLink } from '../../components/common/BackArrowLink/BackArrowLink'
import { Box } from '@mui/material'
import { PortfolioBar } from '../../components/common/StudentPortfolio/PortfolioBar'
import { PortfolioContent } from '../../components/common/StudentPortfolio/PortfolioContent'
import { GradesBox } from '../../components/common/StudentPortfolio/Grades/GradesBox'
import { ExpectationsBox } from '../../components/common/StudentPortfolio/Expectations/ExpectationsBox'
import { PortfolioLink } from '../../components/common/StudentPortfolio/PortfolioLink/PortfolioLink'

export const StudentPage = () => {
    useTitle('MegaK HeadHunter - Kursant i jego CV')

    const [
        avatarUrl,
        firstName,
        lastName,
        githubUsername,
        phone,
        email,
        bio,
        workExpectations,
        portfolioContent,
        portfolioUrl,
        scrumUrl,
        finalProjectUrl,
    ] = [
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/118124271_10224604112957191_6232217390682151742_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGZRrCSGbBKnDhFLPrmFDMTS0hGwM3YatVLSEbAzdhq1b-F83hHow85cjsPBJIU6GQ&_nc_ohc=LqtPhPwTXoIAX95j5tZ&_nc_ht=scontent-vie1-1.xx&oh=00_AfCPE96i_mxSjn_VTfNdXHh1QkTiVAsn-2h1PlfuPOCM-A&oe=647CDCDE',
        'Jakub',
        'Markiewicz',
        'xkrsx',
        '+48 999 999 999',
        'xkrsx@gmail.com',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet aperiam beatae cupiditate dignissimos explicabo illum laudantium magnam maxime modi nihil officiis provident reiciendis, sequi sit, tempora, ut voluptate!',
        {
            expectedTypeWork: 'Biuro',
            targetWorkCity: 'Warszawa',
            expectedContractType: 'Umowa o pracę',
            expectedSalary: '8000',
            canTakeApprenticeship: 'TAK',
            monthsOfCommercialExp: 6,
        },
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        ['https://Loremipsum/dolor/sit/amet'],
        [
            'https://github.com/Ami777/MegaKursTest/commits?author=Ami777',
            'https://github.com/Ami777/MegaKursTest/pulls?q=is%3Apr+reviewed-by%3AAmi777',
        ],
        [
            'https://Loremipsum/dolor/sit/amet',
            'https://Loremipsum/dolor/sit/amet2',
        ],
    ]

    const {
        expectedTypeWork,
        targetWorkCity,
        expectedContractType,
        expectedSalary,
        canTakeApprenticeship,
        monthsOfCommercialExp,
    } = workExpectations

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
                    avatarUrl={avatarUrl}
                    firstName={firstName}
                    lastName={lastName}
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
                            avatarUrl={avatarUrl}
                            firstName={firstName}
                            lastName={lastName}
                            githubUsername={githubUsername}
                            phone={phone}
                            email={email}
                            bio={bio}
                        />
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <PortfolioBar sectionName={'Oceny'} />
                        <GradesBox />

                        <PortfolioBar
                            sectionName={
                                'Oczekiwanie w stosunku do zatrudnienia'
                            }
                        />
                        <ExpectationsBox
                            expectedTypeWork={expectedTypeWork}
                            targetWorkCity={targetWorkCity}
                            expectedContractType={expectedContractType}
                            expectedSalary={expectedSalary}
                            canTakeApprenticeship={canTakeApprenticeship}
                            monthsOfCommercialExp={monthsOfCommercialExp}
                        />

                        <PortfolioBar sectionName={'Edukacja'} />
                        <PortfolioContent content={portfolioContent} />

                        <PortfolioBar sectionName={'Kursy'} />
                        <PortfolioContent content={portfolioContent} />

                        <PortfolioBar sectionName={'Doświadczenie zawodowe'} />
                        <PortfolioContent content={portfolioContent} />

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
                            {portfolioUrl.map((link) => (
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
                            {scrumUrl.map((link) => (
                                <PortfolioLink url={link} key={link} />
                            ))}
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
                            {finalProjectUrl.map((link) => (
                                <PortfolioLink url={link} key={link} />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </main>
    )
}
