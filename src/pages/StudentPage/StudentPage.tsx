import React from 'react'
import { useTitle } from '../../hooks/useTitle'
import { UsersAppBar } from '../../components/common/AppBar/UsersAppBar'
import { InfoBox } from '../../components/common/account/info/InfoBox'
import { Link } from '@mui/material'

export const StudentPage = () => {
    useTitle('MegaK HeadHunter - Kursant i jego CV')

    const [avatarUrl, userName, gitHubName, phoneNumber, mailAddress, about] = [
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/118124271_10224604112957191_6232217390682151742_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGZRrCSGbBKnDhFLPrmFDMTS0hGwM3YatVLSEbAzdhq1b-F83hHow85cjsPBJIU6GQ&_nc_ohc=LqtPhPwTXoIAX95j5tZ&_nc_ht=scontent-vie1-1.xx&oh=00_AfCPE96i_mxSjn_VTfNdXHh1QkTiVAsn-2h1PlfuPOCM-A&oe=647CDCDE',
        'Jakub Markiewicz',
        'xkrsx',
        '+48 999 999 999',
        'xkrsx@gmail.com',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet aperiam beatae cupiditate dignissimos explicabo illum laudantium magnam maxime modi nihil officiis provident reiciendis, sequi sit, tempora, ut voluptate!',
    ]

    return (
        <main
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <UsersAppBar avatarUrl={avatarUrl} userName={userName} />

            <Link>Wróć</Link>
            <InfoBox
                avatarUrl={avatarUrl}
                userName={userName}
                gitHubName={gitHubName}
                phoneNumber={phoneNumber}
                mailAddress={mailAddress}
                about={about}
            />
        </main>
    )
}
