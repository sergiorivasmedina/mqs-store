import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const Items = Loadable(lazy(() => import("./Items")));

const itemsRoutes = [
    {
        path: '/items',
        element: <Items />,
    },
]

export default itemsRoutes
