import { ResetPasswordForm } from '../../components/forms/ResetPasswordForm/ResetPasswordForm'
import { AuthPage } from '../../components/common/AuthPage/AuthPage'

export const ResetPasswordPage = () => {
    return <AuthPage children={<ResetPasswordForm />} />
}
