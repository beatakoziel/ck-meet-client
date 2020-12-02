import People from "../components/People"
import UserProfile from "../components/UserProfile"
import ProfileSettings from "../components/ProfileSettings"
export const peopleRoutes = [
    {
        path: "/users",
        name: 'People',
        component: People
    },
    {
        path: "/settings",
        name: 'ProfileSettings',
        component: ProfileSettings
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
