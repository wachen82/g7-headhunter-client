import { useTitle } from '../../hooks/useTitle';
import { NotFoundBox } from '../../components/common/NotFound/NotFoundBox';
import { AuthPage } from '../../components/common/AuthPage/AuthPage';

export const NotFoundPage = () => {
    useTitle('Błąd 404');

    return <AuthPage children={<NotFoundBox />} />;
};
