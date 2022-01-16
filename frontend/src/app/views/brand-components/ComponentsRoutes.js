import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const Components = Loadable(lazy(() => import("./Components")));

const componentsRoutes = [
    {
        path: '/components',
        element: <Components />,
    },
]

export default componentsRoutes
