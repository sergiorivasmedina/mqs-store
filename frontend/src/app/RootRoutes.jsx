import React from 'react'
import { Redirect } from 'react-router-dom'
import chartsRoute from './views/charts/ChartsRoute'
import dashboardRoutes from './views/dashboard/DashboardRoutes'
import materialRoutes from './views/material-kit/MaterialRoutes'

// MQS
import brandRoutes from './views/brand/BrandRoutes'
import detailsRoutes from './views/details/Details'

const redirectRoute = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/brand" />,
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
    ...brandRoutes,
    ...detailsRoutes,
]

export default routes
