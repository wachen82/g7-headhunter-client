import { useTitle } from '../../hooks/useTitle';
import { UsersAppBar } from '../../components/common/AppBar/UsersAppBar';
import { useAppSelector } from '../../hooks/reduxHooks';
import { HrRespons } from 'types';

export const HrPage = () => {
    useTitle('Strona HR');
    const user = useAppSelector((state) => state.user) as HrRespons;

    if (!user) {
        return null;
    }

    return (
        <>
            <UsersAppBar avatarUrl={'avatarUrl'} userName={user.fullName} />
            {user._id} - {user.role} - {user.fullName} - {user.company}
        </>
    );
};
