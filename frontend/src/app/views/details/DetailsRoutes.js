import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const Details = Loadable(lazy(() => import("./Details")));

const detailsRoutes = [
    {
        path: '/details',
        element: <Details />,
    },
]

export default detailsRoutes
