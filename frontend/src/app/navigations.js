export const navigations = [
    {
        name: 'Inicio',
        path: '/product-catalog',
        icon: 'dashboard',
        permission: ['ALL']
    },
    {
        name: 'Administrar',
        icon: 'security',
        children: [
            {
                name: 'Marcas',
                path: '/brands',
                permission: ['61cf52d0038836db155ecc42']
            },
            {
                name: 'Componentes',
                path: '/components',
                permission: ['61cf52d0038836db155ecc42']
            },
            {
                name: 'Items',
                path: '/items',
                permission: ['61cf52d0038836db155ecc42']
            },
            {
                name: 'Usuarios',
                path: '/users',
                permission: ['61cf52d0038836db155ecc42']
            },
        ],
        permission: ['61cf52d0038836db155ecc42']
    },
    {
        name: 'Dashboard',
        path: '/dashboard/default',
        icon: 'dashboard',
        permission: ['61cf52d0038836db155ecc42']
    },
    {
        label: 'PAGES',
        type: 'label',
        permission: ['61cf52d0038836db155ecc42']
    },
    {
        name: 'Session/Auth',
        icon: 'security',
        children: [
            {
                name: 'Sign in',
                iconText: 'SI',
                path: '/session/signin',
            },
            {
                name: 'Sign up',
                iconText: 'SU',
                path: '/session/signup',
            },
            {
                name: 'Forgot Password',
                iconText: 'FP',
                path: '/session/forgot-password',
            },
            {
                name: 'Error',
                iconText: '404',
                path: '/session/404',
            },
        ],
        permission: ['61cf52d0038836db155ecc42']
    },
    {
        label: 'Components',
        type: 'label',
        permission: ['61cf52d0038836db155ecc42']
    },
    {
        name: 'Components',
        icon: 'favorite',
        badge: { value: '30+', color: 'secondary' },
        children: [
            {
                name: 'Auto Complete',
                path: '/material/autocomplete',
                iconText: 'A',
            },
            {
                name: 'Buttons',
                path: '/material/buttons',
                iconText: 'B',
            },
            {
                name: 'Checkbox',
                path: '/material/checkbox',
                iconText: 'C',
            },
            {
                name: 'Dialog',
                path: '/material/dialog',
                iconText: 'D',
            },
            {
                name: 'Expansion Panel',
                path: '/material/expansion-panel',
                iconText: 'E',
            },
            {
                name: 'Form',
                path: '/material/form',
                iconText: 'F',
            },
            {
                name: 'Icons',
                path: '/material/icons',
                iconText: 'I',
            },
            {
                name: 'Menu',
                path: '/material/menu',
                iconText: 'M',
            },
            {
                name: 'Progress',
                path: '/material/progress',
                iconText: 'P',
            },
            {
                name: 'Radio',
                path: '/material/radio',
                iconText: 'R',
            },
            {
                name: 'Switch',
                path: '/material/switch',
                iconText: 'S',
            },
            {
                name: 'Slider',
                path: '/material/slider',
                iconText: 'S',
            },
            {
                name: 'Snackbar',
                path: '/material/snackbar',
                iconText: 'S',
            },
            {
                name: 'Table',
                path: '/material/table',
                iconText: 'T',
            },
        ],
        permission: ['61cf52d0038836db155ecc42']
    },
    {
        name: 'Charts',
        icon: 'trending_up',
        children: [
            {
                name: 'Echarts',
                path: '/charts/echarts',
                iconText: 'E',
            },
        ],
        permission: ['61cf52d0038836db155ecc42']
    },
    {
        name: 'Documentation',
        icon: 'launch',
        type: 'extLink',
        path: 'http://demos.ui-lib.com/matx-react-doc/',
    },
]