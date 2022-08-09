import React from 'react'
import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
} from '@mui/material'
import { Box, styled } from '@mui/system'

const StyledTable = styled(Table)(({ theme }) => ({
    whiteSpace: 'pre',
    '& thead': {
        '& tr': {
            '& th': {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
    },
    '& tbody': {
        '& tr': {
            '& td': {
                paddingLeft: 0,
                textTransform: 'capitalize',
            },
        },
    },
}))

const SimpleTable = ({ ordersRequested }) => {

    return (
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Código</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Marca</TableCell>
                        <TableCell>Componente</TableCell>
                        <TableCell>Cantidad</TableCell>
                        <TableCell>Precio Unitario</TableCell>
                        <TableCell>Subtotal</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ordersRequested && ordersRequested.map((order, index) => (
                        <TableRow key={index}>
                            <TableCell align="left">
                                {order.code}
                            </TableCell>
                            <TableCell>{order.title}</TableCell>
                            <TableCell>{order.brandName}</TableCell>
                            <TableCell>{order.componentName}</TableCell>
                            <TableCell>{order.amount}</TableCell>
                            <TableCell>S/ {order.price}</TableCell>
                            <TableCell>S/ {order.amount * order.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </Box>
    )
}

export default SimpleTable
