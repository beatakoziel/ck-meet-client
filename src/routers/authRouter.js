import Auth from "../components/auth/Auth"
import RegisterData from "../components/auth/RegisterData"

export const authRoutes = [
    {
        path: "/auth",
        name: 'Auth',
        component: Auth
    },
    {
        path: "/register",
        name: 'RegisterData',
        component: RegisterData
    }
]
