import People from "../components/People"
import UserProfile from "../components/UserProfile"

export const peopleRoutes = [
    {
        path: "/users",
        name: 'People',
        component: People
    },
    {
        path: '/users/profile/:id',
        name: 'Profile',
        component: UserProfile
    },
    {
        path: "/",
        component: People
    },
    {
        path: "*",
        component: People
    }
]
