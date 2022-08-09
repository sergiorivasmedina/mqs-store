import AuthGuard from "app/auth/AuthGuard";
import NotFound from "app/views/sessions/NotFound";
import chartsRoute from "app/views/charts/ChartsRoute";
import materialRoutes from "app/views/material-kit/MaterialRoutes";
import dashboardRoutes from "app/views/dashboard/DashboardRoutes";
import sessionRoutes from "app/views/sessions/SessionRoutes";
import MatxLayout from '../components/MatxLayout/MatxLayout'

// MQS
import productCatalogRoutes from "app/views/product-catalog/ProductCatalogRoutes";
import detailsRoutes from "app/views/details/DetailsRoutes";
import brandsRoutes from "app/views/brands/BrandsRoutes";
import componetsRoutes from "app/views/brand-components/ComponentsRoutes";
import itemsRoutes from "app/views/items/ItemsRoutes";
import usersRoutes from "app/views/users/UsersRoutes";
import orderRequestRoutes from "app/views/order-request/OrderRequestRoutes";

export const AllPages = () => {
  return [
    {
      path: "/",
      element: (
        <AuthGuard>
          <MatxLayout />
        </AuthGuard>
      ),
      children: [
        ...dashboardRoutes,
        ...chartsRoute,
        ...materialRoutes,
        ...productCatalogRoutes,
        ...detailsRoutes,
        ...brandsRoutes,
        ...componetsRoutes,
        ...itemsRoutes,
        ...usersRoutes,
        ...orderRequestRoutes,
      ],
    },
    ...sessionRoutes,
    {
      path: "*",
      element: <NotFound />,
    },
  ];
}