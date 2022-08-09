import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const OrderRequest = Loadable(lazy(() => import("./orderRequest")));

const oderRequestRoutes = [
    {
        path: '/ecommerce/checkout',
        element: <OrderRequest />,
    },
]

export default oderRequestRoutes
