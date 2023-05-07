import { useTitle } from '../../hooks/useTitle'
import { UsersAppBar } from '../../components/common/AppBar/UsersAppBar'
import { useAppSelector } from '../../hooks/reduxHooks'
import axios from 'axios'
import { apiUrl } from '../../config/api'
import { useEffect, useState } from 'react'
import { UserProfilResponse, UserRespons } from 'types'

//@TODO Widok tak na szybko do sprawdzenia pobierania danych z BE, do usunięcia
export const UserPage = () => {
    useTitle('Strona Kursanta')
    const user = useAppSelector((state) => state.user) as UserRespons
    const [userProfile, setuUserProfile] = useState<UserProfilResponse>()

    const fullName = `${userProfile?.info.firstName} ${userProfile?.info.lastName}`

    useEffect(() => {
        ;(async () => {
            if (!user) return null
            const res = await axios(`${apiUrl}/user/${user._id}`, {
                method: 'GET',
                withCredentials: true,
            })
            setuUserProfile(res.data)
        })()
    }, [user])

    if (!user) {
        return null
    }

    return (
        <>
            <UsersAppBar
                avatarUrl={userProfile?.info.avatar as string}
                userName={fullName}
            />
            {user._id} - {user.role} - {user.email} - {user.active} -{' '}
            {user.status}
        </>
    )
}
