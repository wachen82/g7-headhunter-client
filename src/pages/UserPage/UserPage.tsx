import { useTitle } from '../../hooks/useTitle'
import { UsersAppBar } from '../../components/common/AppBar/UsersAppBar'
import { useAppSelector } from '../../hooks/reduxHooks'
import axios from 'axios'
import { apiUrl } from '../../config/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//TODO ściągnąć z BE po aktualizacji typów
interface Skills {
    courseCompletion: number
    courseEngagement: number
    projectDegree: number
    teamProjectDegree: number
}

interface Expectations {
    expectedTypeWork:
        | 'Na miejscu'
        | 'Gotowość do przeprowadzki'
        | 'Wyłącznie zdalnie'
        | 'Hybrydowo'
        | 'Bez znaczenia'
    targetWorkCity?: string
    expectedContractType:
        | 'Tylko UoP'
        | 'Możliwe B2B'
        | 'Możliwe UZ/UoD'
        | 'Brak preferencji'
    expectedSalary?: string
    canTakeApprenticeship: 'TAK' | 'NIE'
    monthsOfCommercialExp: number
}

export interface InfoResponse {
    avatar: string
    firstName: string
    lastName: string
    email: string
    phone?: string
    bio?: string
    status: 'Dostępny' | 'W trakcie rozmowy' | 'Zatrudniony'
}

export interface ProfileResponse {
    skills: Skills
    expectations: Expectations
    education?: string
    courses?: string
    workExperience?: string
    portfolioUrls?: [String]
    bonusProjectUrls: [String]
    projectUrls: [String]
}

interface Respons {
    info: InfoResponse
    profile: ProfileResponse
}

//@TODO Widok tak na szybko do sprawdzenia pobierania danych z BE, do usunięcia
export const UserPage = () => {
    useTitle('Strona Kursanta')
    const { id } = useParams<string>()
    const user = useAppSelector((state) => state.user)
    const [userProfile, setuUserProfile] = useState<Respons>()

    const fullName = `${userProfile?.info.firstName} ${userProfile?.info.lastName}`

    const getUser = async () => {
        const res = await axios(`${apiUrl}/user/${id}`, {
            method: 'GET',
            withCredentials: true,
        })

        setuUserProfile(res.data)
    }

    useEffect(() => {
        getUser()
    }, [])

    if (!user) {
        return null
    }

    return (
        <>
            <UsersAppBar
                avatarUrl={userProfile?.info.avatar as string}
                userName={fullName}
            />
            {user._id} - {user.role}
        </>
    )
}
