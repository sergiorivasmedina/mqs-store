import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const ProductCatalog = Loadable(lazy(() => import("./productCatalog")));

const brandRoutes = [
    {
        path: '/product-catalog',
        element: <ProductCatalog />,
    },
]

export default brandRoutes
