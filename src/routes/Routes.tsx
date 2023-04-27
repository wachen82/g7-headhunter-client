import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { RegisterPage } from '../pages/RegisterPage/RegisterPage'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { routes } from './routesMap'

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
        path: routes.register,
        element: <RegisterPage />,
        children: [],
    },
])

export const AppRoutes = () => {
    return <RouterProvider router={router} />
}
