import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { routes } from './routesMap'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage'
import { AdminPage } from '../pages/AdminPage/AdminPage'
import { RegisterInactivePage } from '../pages/RegisterInactivePage/RegisterInactivePage'
import { ResetPasswordPage } from '../pages/ResetPasswordPage/ResetPasswordPage'
import { ResetPasswordEmailPage } from '../pages/ResetPasswordEmailPage/ResetPasswordEmailPage'
import { UserPage } from '../pages/UserPage/UserPage'

const router = createBrowserRouter([
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
        element: <AdminPage />,
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
        path: routes.student,
        element: <UserPage />,
    },
    {
        path: routes.notFound,
        element: <NotFoundPage />,
    },
])

export const AppRoutes = () => {
    return <RouterProvider router={router} />
}
