import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const Brands = Loadable(lazy(() => import("./Brands")));

const brandsRoutes = [
    {
        path: '/brands',
        element: <Brands />,
    },
]

export default brandsRoutes
