import { useTitle } from '../../hooks/useTitle'
import { UsersAppBar } from '../../components/common/AppBar/UsersAppBar'
import { useAppSelector } from '../../hooks/reduxHooks'

export const HrPage = () => {
    useTitle('Strona HR')
    const user = useAppSelector((state) => state.user)

    if (!user) {
        return null
    }

    return (
        <>
            <UsersAppBar avatarUrl={'avatarUrl'} userName={'imię nazwisko'} />
            {user._id} - {user.role}
        </>
    )
}
