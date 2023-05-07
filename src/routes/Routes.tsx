import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { routes } from './routesMap'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage'
import { AdminPage } from '../pages/AdminPage/AdminPage'
import { RegisterInactivePage } from '../pages/RegisterInactivePage/RegisterInactivePage'
import { ResetPasswordPage } from '../pages/ResetPasswordPage/ResetPasswordPage'
import { ResetPasswordEmailPage } from '../pages/ResetPasswordEmailPage/ResetPasswordEmailPage'
import { UserPage } from '../pages/UserPage/UserPage'
import { HrPage } from '../pages/HrPage/HrPage'
import { useAppSelector } from '../hooks/reduxHooks'

const router = (user: string) =>
    createBrowserRouter([
        {
            path: routes.home,
            element: <Navigate to="/sign-in" replace />,
        },
        {
            path: routes.signIn,
            element: <LoginPage />,
        },
        {
            path: routes.signUp,
            element: <RegisterInactivePage />,
        },
        {
            path: routes.admin,
            element: user === 'Admin' ? <AdminPage /> : <Navigate to="/" />,
        },
        {
            path: routes.user,
            element: user === 'Kursant' ? <UserPage /> : <Navigate to="/" />,
        },
        {
            path: routes.hr,
            element: user === 'HR' ? <HrPage /> : <Navigate to="/" />,
        },
        {
            path: routes.resetPassword,
            element: <ResetPasswordEmailPage />,
        },
        {
            path: routes.setNewPassword,
            element: <ResetPasswordPage />,
        },
        {
            path: routes.notFound,
            element: <NotFoundPage />,
        },
    ])

export const AppRoutes = () => {
    const user = useAppSelector((state) => state.user?.role)
    return <RouterProvider router={router(user as string)} />
}
