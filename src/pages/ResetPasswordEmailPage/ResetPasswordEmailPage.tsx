import { AuthPage } from '../../components/common/AuthPage/AuthPage';
import { ResetPasswordEmailForm } from '../../components/forms/ResetPasswordEmailForm/ResetPasswordEmailForm';

export const ResetPasswordEmailPage = () => {
    return <AuthPage children={<ResetPasswordEmailForm />} />;
};
