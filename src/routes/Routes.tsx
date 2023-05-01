import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage'
import { routes } from './routesMap'
import {AdminPage} from "../pages/AdminPage/AdminPage";

const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Navigate to="/sign-in" replace />,
    },
    {
        path: routes.signIn,
        element: <LoginPage />,
        children: [],
    },
    {
        path: routes.signUp,
        element: <LoginPage />,
        children: [],
    },
    {
        path: routes.admin,
        element: <AdminPage />,
        children: [],
    },
    {
        path: routes.notFound,
        element: <NotFoundPage />,
        children: [],
    },
])

export const AppRoutes = () => {
    return <RouterProvider router={router} />
}
