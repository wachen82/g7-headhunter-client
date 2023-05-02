import { LoginForm } from '../../components/forms/LoginForm/LoginForm'
import { AuthPage } from '../../components/common/AuthPage/AuthPage'

export const LoginPage = () => {
    return <AuthPage children={<LoginForm />} />
}
