import Meetings from "../components/meetings/Meetings";
import MeetingProfile from "../components/meetings/MeetingProfile";

export const meetingsRoutes = [
    {
        path: "/meetings",
        name: 'Meetings',
        component: Meetings
    },
    {
        path: '/meetings/profile/:id',
        name: 'MeetingProfile',
        component: MeetingProfile
    },
]
