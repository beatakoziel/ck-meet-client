import People from "../components/people/People"
import UserProfile from "../components/people/UserProfile"
import ProfileSettings from "../components/people/ProfileSettings"
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
