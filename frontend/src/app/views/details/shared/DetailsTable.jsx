import React from 'react'
import { Paragraph } from 'app/components/Typography'
import { Box, styled } from '@mui/system'
import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    MenuItem,
    Select,
} from '@mui/material'

const CardHeader = styled('div')(() => ({
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const ProductTable = styled(Table)(() => ({
    minWidth: 400,
    whiteSpace: 'pre',
    '& small': {
        height: 15,
        width: 50,
        borderRadius: 500,
        boxShadow:
            '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
    },
    '& td': {
        borderBottom: 'none',
    },
    '& td:first-of-type': {
        paddingLeft: '16px !important',
    },
}))

const TopSellingTable = () => {

    return (
        <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
            <CardHeader>
                <Title>Catálogo de productos</Title>
                <Select size="small" defaultValue="motor">
                    <MenuItem value="motor">Motor</MenuItem>
                    <MenuItem value="transmision">Transmisión</MenuItem>
                    <MenuItem value="electric_sistem">Sistema Eléctrico</MenuItem>
                    <MenuItem value="brake_sistem">Sistema Frenos</MenuItem>
                    <MenuItem value="chasis">Chasis</MenuItem>
                    <MenuItem value="embrague">Embrague</MenuItem>
                </Select>
            </CardHeader>
            <Box overflow="auto">
                <ProductTable>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ px: 3 }} colSpan={2}>
                                N° Parte
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                Código
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                Descripción
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                Precio
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                Foto
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productList.map((product, index) => (
                            <TableRow key={index} hover>
                                <TableCell
                                    colSpan={2}
                                    align="left"
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    <Box display="flex" alignItems="center">
                                        <Paragraph sx={{ m: 0, ml: 0 }}>
                                            {product.partNumber}
                                        </Paragraph>
                                    </Box>
                                </TableCell>
                                <TableCell
                                    align="left"
                                    colSpan={2}
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    {product.idDetail}
                                </TableCell>
                                <TableCell
                                    colSpan={2}
                                    align="left"
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    <Box display="flex" alignItems="center">
                                        <Paragraph sx={{ m: 0, ml: 0 }}>
                                            {product.description}
                                        </Paragraph>
                                    </Box>
                                </TableCell>
                                <TableCell
                                    align="left"
                                    colSpan={2}
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    $
                                    {product.price > 999
                                        ? (product.price / 1000).toFixed(1) +
                                        'k'
                                        : product.price}
                                </TableCell>
                                <TableCell
                                    colSpan={2}
                                    align="left"
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    <Box display="flex" alignItems="center">
                                        <Avatar src={product.imgUrl} />
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </ProductTable>
            </Box>
        </Card>
    )
}

const productList = [
    {
        imgUrl: '/assets/images/products/headphone-2.jpg',
        partNumber: '10100',
        idDetail: '123456',
        description: 'Pistón',
        price: 100,
    },
    {
        imgUrl: '/assets/images/products/headphone-3.jpg',
        partNumber: '10100',
        idDetail: '123456',
        description: 'Pistón',
        price: 100,
    },
    {
        imgUrl: '/assets/images/products/iphone-2.jpg',
        partNumber: '10100',
        idDetail: '123456',
        description: 'Pistón',
        price: 100,
    },
    {
        imgUrl: '/assets/images/products/iphone-1.jpg',
        partNumber: '10100',
        idDetail: '123456',
        description: 'Pistón',
        price: 100,
    },
    {
        imgUrl: '/assets/images/products/headphone-3.jpg',
        partNumber: '10100',
        idDetail: '123456',
        description: 'Pistón',
        price: 100,
    },
]

export default TopSellingTable
