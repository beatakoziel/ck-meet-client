import Auth from "../components/Auth"
import RegisterData from "../components/RegisterData"

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
