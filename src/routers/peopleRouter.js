import People from "../components/People"
import UserProfile from "../components/UserProfile"

export const routes = [
    {
        path: "/users",
        component: People
    },
    {
        path: '/users/profile/:id',
        name: 'Profile',
        component: UserProfile
    },
    {
        path: "*",
        component: People
    }
]
