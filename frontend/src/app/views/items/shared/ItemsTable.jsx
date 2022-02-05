import React, { Fragment, useState, useEffect } from 'react'
import {
    Autocomplete,
    Table,
    TableHead,
    TableCell,
    TableBody,
    IconButton,
    Icon,
    TableRow,
} from '@mui/material'
import { Box, styled } from '@mui/system'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Switch from '@mui/material/Switch'
import Slide from '@mui/material/Slide'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper'
import axios from '../../../../axios'

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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const StyledTextField = styled(TextField)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const AppButtonRoot = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
    '& .button': {
        margin: theme.spacing(1),
    },
    '& .input': {
        display: 'none',
    },
}))

const DivUploadImages = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center'
}))

const SimpleTable = ({ items, setItems }) => {

    // Edit Dialog
    const initialCurrentItem = { desciption: '' }
    const [open, setOpen] = useState(false)
    const [state, setState] = useState(true)
    const [stateName, setStateName] = useState('Activo')
    const [itemPartNumber, setItemPartNumber] = useState('')
    const [itemName, setItemName] = useState('')
    const [itemPrice, setItemPrice] = useState(0)
    const [currentItem, setCurrentItem] = useState(initialCurrentItem)
    const [inputBrand, setInputBrand] = useState(null);
    const [inputComponent, setInputComponent] = useState(null);
    const [productPictures, setProductPictures] = useState([]);
    const [newPicturesList, setNewPicturesList] = useState([]);
    const [deletedPicturesList, setDeletedPicturesList] = useState([]);

    // Image dialog
    const endpointImages = 'http://localhost:8080/api/v1/images/';
    const endpointImagesNotAvailable = 'http://localhost:3000/assets/images/mqs/image_not_available.png';
    // const endpointImages = 'http://3.82.209.241:8080/api/v1/images/';
    // const endpointImagesNotAvailable = 'http://3.82.209.241:3000/assets/images/mqs/image_not_available.png';
    const [endpoint, setEndpoint] = useState(endpointImages);
    const [openDialogPhotos, setOpenDialogPhotos] = useState(false);

    const emptyProductImage = { photos: [], description: null, price: null, brand: { description: null }, component: { description: null } };
    const [productImageSelected, setProductImageSelected] = useState(emptyProductImage);

    const [brandSuggestions, setBrandSuggestions] = useState([]);
    const [componentSuggestions, setComponentSuggestions] = useState([]);

    // delete item
    const [openDeleteItem, setOpenDeleteItem] = useState(false);

    useEffect(() => {

        // Get all brands from backend
        axios.get('/api/v1/brands').then(res => {
            setBrandSuggestions(res.data)
        })

        // Get all components from backend
        axios.get('/api/v1/components').then(res => {
            setComponentSuggestions(res.data)
        })
    }, []);

    function handleClose() {
        setItemName('')
        setItemPartNumber('')
        setItemPrice(0)
        setCurrentItem(initialCurrentItem)
        setProductPictures([])
        setNewPicturesList([])
        setDeletedPicturesList([])
        setOpen(false)
    }

    function editItem(item) {
        setItemPartNumber(item.partNumber)
        setItemName(item.description)
        setItemPrice(item.price.toFixed(2))
        setState(item.status)
        setInputBrand(item.brand)
        setInputComponent(item.component)
        let currentState = item.status ? 'Activo' : 'Inactivo'
        setStateName(currentState)
        processPhotos(item)
        setCurrentItem(item)
        setOpen(true)
    }

    function processPhotos(item) {
        let list = [];
        item.photos.forEach(element => {
            list.push({ name: element.replace('items/', '') });
        });
        setProductPictures(list);
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
        setOpenDialogPhotos(true);
    }

    function handleClosePhotosDialog() {
        setProductImageSelected(emptyProductImage);
        setOpenDialogPhotos(false);
    }

    function handleUpdate() {

        const form = new FormData();
        form.append("partNumber", itemPartNumber);
        form.append("description", itemName);
        form.append("price", itemPrice);
        form.append("idBrand", inputBrand._id);
        form.append("idComponent", inputComponent._id);
        form.append("status", state ? 1 : 0);

        for (let pic of newPicturesList) {
            form.append("productPicture", pic);
        }

        form.append("deletedPictures", JSON.stringify(deletedPicturesList));

        axios.put('/api/v2/component-detail/' + currentItem._id, form, { headers: { 'Content-Type': 'multipart/form-data' } }).then(res => {
            const itemResponse = {
                _id: res.data._id,
                partNumber: res.data.partNumber,
                description: res.data.description,
                price: res.data.price,
                brand: {
                    _id: res.data.idBrand,
                    description: inputBrand.description
                },
                component: {
                    _id: res.data.idComponent,
                    description: inputComponent.description
                },
                status: res.data.status,
                photos: res.data.photos
            }

            let index_update = items.findIndex(x => x._id === currentItem._id);

            let newItems = items.slice();
            newItems[index_update] = itemResponse;
            setItems(newItems);
        })

        // TODO: mostrar snackbar cuando no se cumpla la condicion anterior

        handleClose()
    }

    function handlerInputItemPartNumber(event) {
        setItemPartNumber(event.target.value)
    }

    function handlerInputItemName(event) {
        setItemName(event.target.value)
    }

    function handlerInputItemPrice(event) {
        setItemPrice(event.target.value)
    }

    function handleChangeState() {
        if (state) {
            setStateName('Inactivo');
        } else {
            setStateName('Activo');
        }

        setState(!state);
    }

    function getStatus(id) {
        if (id === 1) {
            return 'Activo';
        } else if (id === 0) {
            return 'Inactivo';
        }
        return 'Estado desconocido';
    }

    function handleDeleteUploadedImage(pic) {
        let newProductPitures = productPictures.slice();
        newProductPitures = newProductPitures.filter(x => x !== pic);
        setProductPictures(newProductPitures);
        let newPic = { ...pic }
        newPic.name = 'items/' + pic.name;
        setDeletedPicturesList([...deletedPicturesList, ...[newPic]]);

        let newPictures = newProductPitures.slice();
        newPictures = newPictures.filter(x => x !== pic);
        setNewPicturesList(newPictures);
    }

    const handleProductPictures = (e) => {
        setProductPictures([...productPictures, ...e.target.files]);
        setNewPicturesList([...newPicturesList, ...e.target.files])
    };

    function handleDeleteItemClose() {
        setOpenDeleteItem(false);
        setCurrentItem(initialCurrentItem);
    }

    function deleteItem(item) {
        setCurrentItem(item);
        setOpenDeleteItem(true);
    }

    function handleDeleteItem() {
        axios.delete('/api/v1/component-detail/' + currentItem._id).then(res => {
            console.info(`Se eliminó item: ${JSON.stringify(res.data)}`);
        });
        let updateItems = items.slice();
        updateItems = updateItems.filter(x => x._id !== currentItem._id);
        setItems(updateItems);
        handleDeleteItemClose();
    }

    return (
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Numero de Parte</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Precio</TableCell>
                        <TableCell>Marca</TableCell>
                        <TableCell>Componente</TableCell>
                        <TableCell>Estado</TableCell>
                        <TableCell>Acción</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items && items.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell align="left">
                                {item.partNumber}
                            </TableCell>
                            <TableCell>{item.description}</TableCell>
                            <TableCell>S/ {item.price.toFixed(2)}</TableCell>
                            <TableCell>{item.brand.description}</TableCell>
                            <TableCell>{item.component.description}</TableCell>
                            <TableCell>{getStatus(item.status)}</TableCell>
                            <TableCell>
                                {item.photos.length > 0
                                    ? <IconButton onClick={() => handlePhoto(item)}>
                                        <Icon color="primary">image</Icon>
                                    </IconButton>
                                    : null}

                                <IconButton onClick={() => editItem(item)}>
                                    <Icon color="secondary">edit</Icon>
                                </IconButton>
                                <IconButton onClick={() => deleteItem(item)}>
                                    <Icon color="delete">delete</Icon>
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
                                <DialogTitle id="alert-dialog-slide-title">
                                    {"Modificar item"}
                                </DialogTitle>
                                <DialogContent>
                                    <StyledTextField
                                        id="outlined-basic"
                                        label="Numero de parte"
                                        variant="outlined"
                                        value={itemPartNumber}
                                        onChange={handlerInputItemPartNumber}
                                    />
                                    <br></br>
                                    <StyledTextField
                                        id="outlined-basic"
                                        label="Nombre"
                                        variant="outlined"
                                        value={itemName}
                                        onChange={handlerInputItemName}
                                    />
                                    <br></br>
                                    <StyledTextField
                                        id="outlined-basic"
                                        label="Precio"
                                        variant="outlined"
                                        value={itemPrice}
                                        onChange={handlerInputItemPrice}
                                    />
                                    <br></br>
                                    <Fragment>
                                        <Autocomplete
                                            isOptionEqualToValue={(option, value) => option.id === value.id}
                                            value={inputBrand}
                                            options={brandSuggestions}
                                            getOptionLabel={(option) => option.description}
                                            onChange={(event, newValue) => {
                                                if (newValue) {
                                                    setInputBrand(newValue);
                                                } else {
                                                    setInputBrand(null)
                                                }
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label={'Marca'}
                                                    variant="outlined"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </Fragment>
                                    <br></br>
                                    <Fragment>
                                        <Autocomplete
                                            isOptionEqualToValue={(option, value) => option.id === value.id}
                                            value={inputComponent}
                                            options={componentSuggestions}
                                            getOptionLabel={(option) => option.description}
                                            onChange={(event, newValue) => {
                                                if (newValue) {
                                                    setInputComponent(newValue);
                                                } else {
                                                    setInputComponent(null);
                                                }
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label={'Componente'}
                                                    variant="outlined"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </Fragment>
                                    <br></br>
                                    <StyledFormControlLabel
                                        control={
                                            <Switch
                                                checked={state}
                                                onChange={() => handleChangeState()}
                                                value="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label={stateName}
                                    />

                                    {productPictures.length > 0
                                        ? productPictures.map((pic, picIndex) => (
                                            <DivUploadImages>
                                                <IconButton className="button"
                                                    aria-label="Delete"
                                                    color='error'
                                                    onClick={() => handleDeleteUploadedImage(pic)}
                                                >
                                                    <Icon>clear</Icon>
                                                </IconButton>
                                                <div key={picIndex + pic.name}>{pic.name}</div>
                                            </DivUploadImages>
                                        ))
                                        : null}
                                    <AppButtonRoot>
                                        <input
                                            accept="image/*"
                                            className="input"
                                            id="upload-image-button"
                                            multiple
                                            type="file"
                                            onChange={handleProductPictures}
                                            onClick={(event) => {
                                                event.target.value = null
                                            }}
                                        />
                                        <label htmlFor="upload-image-button">
                                            <StyledButton component="span">Agregar imagen</StyledButton>
                                        </label>
                                    </AppButtonRoot>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="secondary">
                                        Cancelar
                                    </Button>
                                    <Button onClick={handleUpdate} color="primary">
                                        Actualizar
                                    </Button>
                                </DialogActions>
                            </Dialog>

                            <Dialog
                                open={openDialogPhotos}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleClosePhotosDialog}
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
                                    <Button onClick={handleClosePhotosDialog} color="secondary">
                                        Cerrar
                                    </Button>
                                </DialogActions>
                            </Dialog>
                            <Dialog
                                open={openDeleteItem}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleDeleteItemClose}
                                aria-labelledby="alert-dialog-delete"
                                aria-describedby="alert-dialog-delete-description"
                            >
                                <DialogTitle id="alert-dialog-slide-title">
                                    {"Desea eliminar " + currentItem.description + "?"}
                                </DialogTitle>
                                <DialogActions>
                                    <Button onClick={handleDeleteItemClose} color="secondary">
                                        Cancelar
                                    </Button>
                                    <Button onClick={handleDeleteItem} color="primary">
                                        Eliminar
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </Box>
    )
}

export default SimpleTable
