import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const Brands = Loadable(lazy(() => import("./Brands")));

const brandsRoutes = [
    {
        path: '/brand',
        element: <Brands />,
    },
]

export default brandsRoutes
