import React, { useState, useEffect } from 'react'
import { H2, Paragraph } from 'app/components/Typography'
import { Box, styled } from '@mui/system'
import {
    Avatar,
    AvatarGroup,
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
    DialogTitle,
} from '@mui/material'
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper'
import Slide from '@mui/material/Slide'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from 'react-redux'
import { addProductToCart } from 'app/redux/actions/EcommerceActions'
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

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    '& span': {
        color: theme.palette.text.primary,
    },
    '& #disable': {
        color: theme.palette.text.disabled,
    },
}))

const TopSellingTable = () => {
    const dispatch = useDispatch()

    const endpointImages = axios.defaults.baseURL + '/api/v1/images/';
    const endpointImagesNotAvailable = `${axios.defaults.baseURL.slice(0, -4)}${window.location.port}/assets/images/mqs/image_not_available.png`;
    // const endpointImages = 'http://localhost:8080/api/v1/images/';
    // const endpointImagesNotAvailable = 'http://localhost:3000/assets/images/mqs/image_not_available.png';
    // const endpointImages = 'http://3.82.209.241:8080/api/v1/images/';
    // const endpointImagesNotAvailable = 'http://3.82.209.241:3000/assets/images/mqs/image_not_available.png';
    const [endpoint, setEndpoint] = useState(endpointImages);

    const [open, setOpen] = useState(false)
    const [components, setComponents] = useState([]);
    const [selectedComponent, setSelectedComponent] = useState('');
    const [productList, setProductList] = useState([]);

    const initialProductSelected = { id: '', imgUrl: '', price: '', title: '', amount: 0 };
    const [openAddToCart, setOpenAddToCart] = useState(false);
    const [productSelected, setProductSelected] = useState(initialProductSelected);
    const [currentProductAmount, setCurrentProductAmount] = useState(1);

    const emptyProductImage = { photos: [], description: null, price: null, brand: { description: null }, component: { description: null } };
    const [productImageSelected, setProductImageSelected] = useState(emptyProductImage);

    const [isCartRole, setIsCartRole] = useState(false);

    useEffect(() => {
        // Get idRole for show or not Cart icon
        const idRole = JSON.parse(localStorage.getItem('user')).role;
        axios.get('/api/v1/role/description/DISTRIBUIDOR').then(res => {
            if (res.data._id === idRole) {
                setIsCartRole(true);
            }
        }).catch(error => {
            console.error(`Error for getting isCartRole role - ${error}`);
        })

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

    function handleAddTocartOpenDialog(product) {
        setProductSelected(product);
        setOpenAddToCart(true);
    }

    function handleAddToCartClose() {
        setOpenAddToCart(false);
        setProductSelected(initialProductSelected);
        setCurrentProductAmount(1);
    }

    function handleAddProductToCart() {
        const product = {
            id: productSelected._id,
            imgUrl: productSelected.photos && productSelected.photos.length ? endpointImages + productSelected.photos[0].replace('/', '%2F') : endpointImagesNotAvailable,
            price: productSelected.price,
            title: productSelected.description,
            amount: currentProductAmount
        }

        dispatch(addProductToCart(product));
        handleAddToCartClose();
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
                            <TableCell sx={{ px: 3 }} colSpan={1}>
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
                            <TableCell sx={{ px: 0 }} colSpan={1}>
                                Precio
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={1}>
                                Foto
                            </TableCell>
                            {isCartRole
                                ? <TableCell sx={{ px: 0 }} colSpan={1}>
                                </TableCell>
                                : null}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productList.map((product, index) => (
                            <TableRow key={index} hover>
                                <TableCell
                                    align="left"
                                    colSpan={1}
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    {product.code}
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
                                    colSpan={1}
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    S/ {product.price.toFixed(2)}
                                </TableCell>
                                <TableCell
                                    colSpan={1}
                                    align="left"
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    <IconButton onClick={() => handlePhoto(product)}>
                                        <AvatarGroup max={3}>
                                            {product.photos && product.photos.length > 0
                                                ? product.photos.map((photo, indexPhoto) => (
                                                    <Avatar
                                                        key={indexPhoto}
                                                        src={endpointImages + photo.replace('/', '%2F')}
                                                    />
                                                ))
                                                : <Avatar
                                                    src={endpointImagesNotAvailable}
                                                    sx={{ width: 24, height: 24 }}
                                                />}
                                        </AvatarGroup>
                                    </IconButton>
                                </TableCell>
                                {isCartRole
                                    ? <TableCell
                                        align="center"
                                        colSpan={1}
                                        sx={{ px: 0 }}
                                    >
                                        <IconButton onClick={() => handleAddTocartOpenDialog(product)}>
                                            <ShoppingCartIcon color="primary" />
                                        </IconButton>
                                    </TableCell>
                                    : null}

                                <Dialog
                                    open={openAddToCart}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleAddToCartClose}
                                    aria-labelledby="alert-dialog-add-to-cart"
                                    aria-describedby="alert-dialog-add-to-cart-description"
                                >
                                    <DialogTitle>
                                        {`¿Cuántos ${productSelected.description} agregar al carrito de compras?`}
                                    </DialogTitle>
                                    <DialogContent>
                                        <Box
                                            mr="4px"
                                            display="flex"
                                        >
                                            <StyledIconButton
                                                disabled={!(currentProductAmount - 1)}
                                                size="small"
                                                onClick={() => {
                                                    setCurrentProductAmount(currentProductAmount - 1)
                                                }}
                                            >
                                                <Icon id={!(currentProductAmount - 1) && 'disable'}>
                                                    remove
                                                </Icon>
                                            </StyledIconButton>
                                            <H2>{currentProductAmount}</H2>
                                            <StyledIconButton
                                                size="small"
                                                onClick={() => {
                                                    setCurrentProductAmount(currentProductAmount + 1)
                                                }}
                                            >
                                                <Icon sx={{ cursor: 'pinter' }}>
                                                    add
                                                </Icon>
                                            </StyledIconButton>
                                        </Box>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleAddToCartClose} color="secondary">
                                            Cancelar
                                        </Button>
                                        <Button onClick={handleAddProductToCart} color="primary">
                                            Agregar
                                        </Button>
                                    </DialogActions>
                                </Dialog>

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
