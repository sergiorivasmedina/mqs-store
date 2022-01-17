import React, { useState, useEffect } from 'react'
import { Paragraph } from 'app/components/Typography'
import { Box, styled } from '@mui/system'
import {
    Card,
    FormControl,
    InputLabel,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    MenuItem,
    Select,
} from '@mui/material'
import axios from '../../../../axios'

const CardHeader = styled('div')(() => ({
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'normal',
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

    const [components, setComponents] = useState([]);
    const [selectedComponent, setSelectedComponent] = useState('');
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        // Get all components from backend
        axios.get('/api/v1/components').then(res => {
            setComponents(res.data);
        })
        getAllItemsFromBrand();
    }, []);

    function getAllItemsFromBrand() {
        axios.get('/api/v1/component-details/brand/' + localStorage.getItem('brandSelected')).then(res => {
            setProductList(res.data);
        })
    }

    function handleComponentChange(event) {
        let componentId = event.target.value;
        setSelectedComponent(componentId)
        console.info(`componentId: ${JSON.stringify(componentId)}`)
        if (componentId) {
            axios.get('/api/v1/component-details/brand/' + localStorage.getItem('brandSelected') + '/component/' + componentId).then(res => {
                setProductList(res.data);
            })
        } else {
            // Se lista todo lo de la marca
            getAllItemsFromBrand();
        }
        
    }

    return (
        <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>

            <CardHeader>
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="select-helper-label-component">Filtrar por componente</InputLabel>
                    <Select
                        labelId="select-helper-label-component"
                        id="select-helper"
                        label="Age"
                        value={selectedComponent}
                        onChange={handleComponentChange}
                    >
                        <MenuItem value="">
                            <em>Mostrar Todo</em>
                        </MenuItem>
                        {components.map((component, index) => (
                            <MenuItem
                                key={index}
                                value={component._id}>
                                {component.description}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </CardHeader>
            <CardHeader>
                <Title>Catálogo de productos</Title>
            </CardHeader>

            <Box overflow="auto">
                <ProductTable>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ px: 3 }} colSpan={2}>
                                Código
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                Descripción
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                Marca
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                Componente
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
                                    align="left"
                                    colSpan={2}
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    {product._id}
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
                                    colSpan={2}
                                    align="left"
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    <Box display="flex" alignItems="center">
                                        <Paragraph sx={{ m: 0, ml: 0 }}>
                                            {product.brand.description}
                                        </Paragraph>
                                    </Box>
                                </TableCell>
                                <TableCell
                                    colSpan={2}
                                    align="left"
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    <Box display="flex" alignItems="center">
                                        <Paragraph sx={{ m: 0, ml: 0 }}>
                                            {product.component.description}
                                        </Paragraph>
                                    </Box>
                                </TableCell>
                                <TableCell
                                    align="left"
                                    colSpan={2}
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    S/ {product.price.toFixed(2)}
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

// const productList = [
//     {
//         imgUrl: '/assets/images/products/headphone-2.jpg',
//         partNumber: '10100',
//         idDetail: '123456',
//         description: 'Pistón',
//         price: 100,
//     },
//     {
//         imgUrl: '/assets/images/products/headphone-3.jpg',
//         partNumber: '10100',
//         idDetail: '123456',
//         description: 'Pistón',
//         price: 100,
//     },
//     {
//         imgUrl: '/assets/images/products/iphone-2.jpg',
//         partNumber: '10100',
//         idDetail: '123456',
//         description: 'Pistón',
//         price: 100,
//     },
//     {
//         imgUrl: '/assets/images/products/iphone-1.jpg',
//         partNumber: '10100',
//         idDetail: '123456',
//         description: 'Pistón',
//         price: 100,
//     },
//     {
//         imgUrl: '/assets/images/products/headphone-3.jpg',
//         partNumber: '10100',
//         idDetail: '123456',
//         description: 'Pistón',
//         price: 100,
//     },
// ]

export default TopSellingTable
