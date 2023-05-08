import { LoginForm } from '../../components/forms/LoginForm/LoginForm';
import { AuthPage } from '../../components/common/AuthPage/AuthPage';
import { useTitle } from '../../hooks/useTitle';

export const LoginPage = () => {
    useTitle('Logowanie do portalu MegaK Head Hunters');

    return <AuthPage children={<LoginForm />} />;
};
