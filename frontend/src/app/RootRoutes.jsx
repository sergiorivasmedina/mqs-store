import React from 'react'
import { Redirect } from 'react-router-dom'
import chartsRoute from './views/charts/ChartsRoute'
import dashboardRoutes from './views/dashboard/DashboardRoutes'
import materialRoutes from './views/material-kit/MaterialRoutes'

// MQS
import productCatalogRoutes from './views/product-catalog/ProductCatalogRoutes'
import detailsRoutes from './views/details/DetailsRoutes'
import brandsRoutes from './views/brands/BrandsRoutes'

const redirectRoute = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/product-catalog" />,
    },
]

const errorRoute = [
    {
        component: () => <Redirect to="/session/404" />,
    },
]

const routes = [
    ...dashboardRoutes,
    ...materialRoutes,
    ...chartsRoute,
    ...redirectRoute,
    ...errorRoute,
    ...productCatalogRoutes,
    ...detailsRoutes,
    ...brandsRoutes,
]

export default routes
