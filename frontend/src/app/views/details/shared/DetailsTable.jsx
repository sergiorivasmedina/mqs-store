import React, { useState, useEffect } from 'react'
import { Paragraph } from 'app/components/Typography'
import { Box, styled } from '@mui/system'
import {
    Button,
    Card,
    FormControl,
    Icon,
    IconButton,
    InputLabel,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    MenuItem,
    Select,
} from '@mui/material'
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper'
import Slide from '@mui/material/Slide'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const TopSellingTable = () => {

    // const endpointImages = 'http://localhost:8080/api/v1/images/';
    // const endpointImagesNotAvailable = 'http://localhost:3000/assets/images/mqs/image_not_available.png';
    const endpointImages = 'http://3.82.209.241:8080/api/v1/images/';
    const endpointImagesNotAvailable = 'http://3.82.209.241:3000/assets/images/mqs/image_not_available.png';
    const [endpoint, setEndpoint] = useState(endpointImages);

    const [open, setOpen] = useState(false)
    const [components, setComponents] = useState([]);
    const [selectedComponent, setSelectedComponent] = useState('');
    const [productList, setProductList] = useState([]);

    const emptyProductImage = { photos: [], description: null, price: null, brand: { description: null }, component: { description: null } };
    const [productImageSelected, setProductImageSelected] = useState(emptyProductImage);

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

    function handlePhoto(product) {
        let auxProduct = JSON.parse(JSON.stringify(product)) // copy object
        if (product.photos.length === 0) {
            auxProduct.photos.push('')
            setEndpoint(endpointImagesNotAvailable);
        } else {
            setEndpoint(endpointImages);
        }
        setProductImageSelected(auxProduct);
        setOpen(true);
    }

    function handleClose() {
        setProductImageSelected(emptyProductImage);
        setOpen(false);
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
                                    <IconButton onClick={() => handlePhoto(product)}>
                                        <Icon color="primary">photo</Icon>
                                    </IconButton>
                                </TableCell>
                                <Dialog
                                    open={open}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-slide-title"
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <DialogContent>
                                        <SwipeableTextMobileStepper
                                            endpoint={endpoint}
                                            photos={productImageSelected.photos}
                                            description={productImageSelected.description}
                                            price={productImageSelected.price}
                                            brandName={productImageSelected.brand.description}
                                            componentName={productImageSelected.component.description}
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} color="secondary">
                                            Cerrar
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </TableRow>
                        ))}
                    </TableBody>
                </ProductTable>
            </Box>
        </Card>
    )
}

export default TopSellingTable
