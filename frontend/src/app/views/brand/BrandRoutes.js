import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const Brand = Loadable(lazy(() => import("./brand")));

const brandRoutes = [
    {
        path: '/brand',
        element: <Brand />,
    },
]

export default brandRoutes
