import People from "../components/People"
import UserProfile from "../components/UserProfile"

export const routes = [
    {
        path: "/users",
        component: People
    },
    {
        path: "/users/profile",
        component: UserProfile
    },
    {
        path: "*",
        component: People
    }
]
