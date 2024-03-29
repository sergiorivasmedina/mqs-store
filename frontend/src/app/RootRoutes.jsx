import React from 'react'
import { Redirect } from 'react-router-dom'
import chartsRoute from './views/charts/ChartsRoute'
import dashboardRoutes from './views/dashboard/DashboardRoutes'
import materialRoutes from './views/material-kit/MaterialRoutes'

// MQS
import productCatalogRoutes from './views/product-catalog/ProductCatalogRoutes'
import detailsRoutes from './views/details/DetailsRoutes'
import brandsRoutes from './views/brands/BrandsRoutes'
import componentsRoutes from './views/brand-components/ComponentsRoutes'
import itemsRoutes from './views/items/ItemsRoutes'
import usersRoutes from './views/users/UsersRoutes'
import orderRequest from './views/order-request/OrderRequestRoutes'

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
    ...componentsRoutes,
    ...itemsRoutes,
    ...usersRoutes,
    ...orderRequest,
]

export default routes
