import React, { useState } from 'react'
import {
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

const SimpleTable = ({ brands, setBrands }) => {
    const [open, setOpen] = useState(false)
    const [state, setState] = useState(true)
    const [stateName, setStateName] = useState('Activo')
    const [brandName, setBrandName] = useState('')
    const [currentBrand, setCurrentBrand] = useState(null)
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

    const emptyProductImage = { photos: [], description: null, status: null };
    const [productImageSelected, setProductImageSelected] = useState(emptyProductImage);

    function handleClose() {
        setBrandName('')
        setCurrentBrand(null)
        setProductPictures([]);
        setNewPicturesList([]);
        setDeletedPicturesList([]);
        setOpen(false)
    }

    function editBrand(brand) {
        console.log(brand)
        setBrandName(brand.description)
        setState(brand.status)
        let currentState = brand.status ? 'Activo' : 'Inactivo'
        setStateName(currentState)
        setCurrentBrand(brand)
        processPhotos(brand);
        setOpen(true)
    }

    function handleUpdate() {
        const form = new FormData();
        form.append("description", brandName);
        form.append("status", state ? 1 : 0);

        for (let pic of newPicturesList) {
            form.append("productPicture", pic);
        }

        form.append("deletedPictures", JSON.stringify(deletedPicturesList));

        axios.put('/api/v2/brand/' + currentBrand._id, form, { headers: { 'Content-Type': 'multipart/form-data' } }).then(res => {
            const brandResponse = {
                _id: res.data._id,
                description: res.data.description,
                status: res.data.status,
                photos: res.data.photos
            }

            let index_update = brands.findIndex(x => x._id === currentBrand._id);

            let newBrands = brands.slice();
            newBrands[index_update] = brandResponse;
            setBrands(newBrands);
        })

        handleClose();
    }

    function handleInputChange(event) {
        setBrandName(event.target.value)
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

    function processPhotos(brand) {
        let list = [];
        brand.photos.forEach(element => {
            list.push({ name: element.replace('brands/', '') });
        });
        setProductPictures(list);
    }

    const handleProductPictures = (e) => {
        console.log(e.target.files)
        setProductPictures([...productPictures, ...e.target.files]);
        setNewPicturesList([...newPicturesList, ...e.target.files]);
    };

    function handleDeleteUploadedImage(pic) {
        let newProductPitures = productPictures.slice();
        newProductPitures = newProductPitures.filter(x => x !== pic);
        setProductPictures(newProductPitures);
        let newPic = { ...pic }
        newPic.name = 'brands/' + pic.name;
        setDeletedPicturesList([...deletedPicturesList, ...[newPic]]);

        let newPictures = newProductPitures.slice();
        newPictures = newPictures.filter(x => x !== pic);
        setNewPicturesList(newPictures);
    }

    function handlePhoto(brand) {
        let auxBrand = JSON.parse(JSON.stringify(brand)) // copy object
        if (brand.photos.length === 0) {
            auxBrand.photos.push('')
            setEndpoint(endpointImagesNotAvailable);
        } else {
            setEndpoint(endpointImages);
        }
        setProductImageSelected(auxBrand);
        setOpenDialogPhotos(true);
    }

    function handleClosePhotosDialog() {
        setProductImageSelected(emptyProductImage);
        setOpenDialogPhotos(false);
    }

    function deleteBrand(brand) {
        axios.delete('/api/v1/brand/' + brand._id).then(res => {
            console.info(`Se eliminó marca: ${JSON.stringify(res.data)}`);

            let updateBrands = brands.slice();
            updateBrands = updateBrands.filter(x => x._id !== brand._id);
            setBrands(updateBrands);
            handleClosePhotosDialog();

        }).catch(error => {
            console.log(error)
            if (error.response.status === 412) {
                alert(JSON.stringify(error.response.data.message));
            }
        });
    }

    return (
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Estado</TableCell>
                        <TableCell>Acción</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {brands && brands.map((brand, index) => (
                        <TableRow key={index}>
                            <TableCell align="left">
                                {brand.description}
                            </TableCell>
                            <TableCell>{getStatus(brand.status)}</TableCell>
                            <TableCell>
                                {brand.photos.length > 0
                                    ? <IconButton onClick={() => handlePhoto(brand)}>
                                        <Icon color="primary">image</Icon>
                                    </IconButton>
                                    : null}
                                <IconButton onClick={() => editBrand(brand)}>
                                    <Icon color="secondary">edit</Icon>
                                </IconButton>
                                <IconButton onClick={() => deleteBrand(brand)}>
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
                                    {"Modificar marca"}
                                </DialogTitle>
                                <DialogContent>
                                    <StyledTextField
                                        id="outlined-basic"
                                        label="Nombre"
                                        variant="outlined"
                                        value={brandName}
                                        onChange={handleInputChange}
                                    />
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
                                            id="upload-image-brand-button"
                                            multiple
                                            type="file"
                                            onChange={handleProductPictures}
                                            onClick={(event) => {
                                                event.target.value = null
                                            }}
                                        />
                                        {productPictures.length > 0
                                            ? <label htmlFor="upload-image-brand-button-disable">
                                                <StyledButton component="span" disabled>Agregar imagen</StyledButton>
                                            </label>
                                            : <label htmlFor="upload-image-brand-button">
                                                <StyledButton component="span">Agregar imagen</StyledButton>
                                            </label>}
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
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClosePhotosDialog} color="secondary">
                                        Cerrar
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
