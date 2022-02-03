import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const Users = Loadable(lazy(() => import("./Users")));

const usersRoutes = [
    {
        path: '/users',
        element: <Users />,
    },
]

export default usersRoutes
