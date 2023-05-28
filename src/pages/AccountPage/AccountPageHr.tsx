import { useTitle } from '../../hooks/useTitle';
import { useAppSelector } from '../../hooks/reduxHooks';
import { HrResponse } from 'types';
import { AccountContent } from './AccountContent';
import { BackArrowLink } from '../../components/common/BackArrowLink/BackArrowLink';

export const AccountPageHr = () => {
    useTitle('Panel zarządzania kontem headhuntera');
    const user = useAppSelector((state) => state.user) as HrResponse;

    return (<>
        <BackArrowLink url={`/hr/${user._id}`} />
        <AccountContent user={user} />
    </>);
};
