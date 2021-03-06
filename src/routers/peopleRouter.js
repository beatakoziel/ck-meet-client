import People from "@/components/people/People";
import UserProfile from "@/components/people/UserProfile";
import ProfileSettings from "@/components/people/ProfileSettings";
import Contacts from "@/components/people/Contacts";
export const peopleRoutes = [
    {
        path: "/people",
        name: 'People',
        component: People
    },
    {
        path: "/settings",
        name: 'ProfileSettings',
        component: ProfileSettings
    },
    {
        path: '/people/profile/:id',
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
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts
    }
]
