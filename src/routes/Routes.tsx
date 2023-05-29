import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from 'react-router-dom';
import { routes } from './routesMap';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { AdminPage } from '../pages/AdminPage/AdminPage';
import { ResetPasswordPage } from '../pages/ResetPasswordPage/ResetPasswordPage';
import { ResetPasswordEmailPage } from '../pages/ResetPasswordEmailPage/ResetPasswordEmailPage';
import { UserPage } from '../pages/UserPage/UserPage';
import { HrPage } from '../pages/HrPage/HrPage';
import { useAppSelector } from '../hooks/reduxHooks';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { ROLES } from '../types/router';
import { AccountPageHr } from '../pages/AccountPage/AccountPageHr';
import { CVPage } from '../pages/CVPage/CVPage';
import { AccountPageUser } from '../pages/AccountPage/AccountPageUser';
import { AccountPageAdmin } from '../pages/AccountPage/AccountPageAdmin';

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
            path: routes.register,
            element: <RegisterPage />,
        },
        {
            path: routes.admin,
            element: user === ROLES.ADMIN ? <AdminPage /> : <Navigate to="/" />,
        },
        {
            path: routes.user,
            element: user === ROLES.USER ? <UserPage /> : <Navigate to="/" />,
        },
        {
            path: routes.hr,
            element: user === ROLES.HR ? <HrPage /> : <Navigate to="/" />,
        },
        {
            path: routes.accountHr,
            element: user === ROLES.HR ? <AccountPageHr /> : <Navigate to="/" />,
        },
        {
            path: routes.accountUser,
            element: user === ROLES.USER ? <AccountPageUser /> : <Navigate to="/" />,
        },
        {
            path: routes.accountAdmin,
            element: user === ROLES.ADMIN ? <AccountPageAdmin /> : <Navigate to="/" />,
        },
        {
            path: routes.cv,
            element: user === ROLES.HR ? <CVPage /> : <Navigate to="/" />,
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
    ]);

export const AppRoutes = () => {
    const user = useAppSelector((state) => state.user?.role);
    return <RouterProvider router={router(user as string)} />;
};
