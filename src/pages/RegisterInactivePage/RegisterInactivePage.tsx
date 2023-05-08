import { RegisterInactiveForm } from '../../components/forms/RegisterInactiveForm/RegisterInactiveForm';
import { AuthPage } from '../../components/common/AuthPage/AuthPage';

export const RegisterInactivePage = () => {
    return <AuthPage children={<RegisterInactiveForm />} />;
};
