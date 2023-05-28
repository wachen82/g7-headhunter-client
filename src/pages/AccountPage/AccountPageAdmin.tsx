import { useTitle } from '../../hooks/useTitle';
import { useAppSelector } from '../../hooks/reduxHooks';
import { UserResponse } from 'types';
import { BackArrowLink } from '../../components/common/BackArrowLink/BackArrowLink';
import { AccountContent } from './AccountContent';

export const AccountPageAdmin = () => {
    useTitle('Panel zarządzania kontem administatora');
    const user = useAppSelector((state) => state.user) as UserResponse;
    return (<>
        <BackArrowLink url={`/admin/${user._id}`} />
        <AccountContent user={user} />
    </>);
};
