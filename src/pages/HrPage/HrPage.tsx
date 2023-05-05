import { useTitle } from '../../hooks/useTitle'
import { UsersAppBar } from '../../components/common/AppBar/UsersAppBar'
import { useAppSelector } from '../../hooks/reduxHooks'
import { useParams } from 'react-router-dom'

export const HrPage = () => {
    useTitle('Strona HR')
    const { id } = useParams<string>()
    const user = useAppSelector((state) => state.user)

    if (!user) {
        return null
    }

    return (
        <>
            <UsersAppBar avatarUrl={'avatarUrl'} userName={'imię nazwisko'} />
            {id} - {user._id} - {user.role}
        </>
    )
}
