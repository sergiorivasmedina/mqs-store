import React, { useState } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Icon,
    Slide,
    TextField,
    FormControlLabel,
    Switch
} from '@mui/material'
import { styled } from '@mui/system'
import axios from '../../../../axios'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const DivUploadImages = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center'
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

export default function CreateBrandDialog({ brands, setBrands }) {
    const [open, setOpen] = useState(false);
    const [state, setState] = useState(true);
    const [stateName, setStateName] = useState('Activo');
    const [brandName, setBrandName] = useState('');
    const [productPictures, setProductPictures] = useState([]);

    function handleClickOpen() {
        setOpen(true)
    }

    function handleClose() {
        setBrandName('')
        setProductPictures([]);
        setOpen(false)
    }

    function handleChangeState() {
        if (state) {
            setStateName('Inactivo');
        } else {
            setStateName('Activo');
        }

        setState(!state);
    }

    function handleInputChange(event) {
        setBrandName(event.target.value)
    }

    function addBrand() {
        if (brandName.length > 0) {
            const form = new FormData();
            form.append("description", brandName);
            form.append("status", state ? 1 : 0);

            for (let pic of productPictures) {
                form.append("productPicture", pic);
            }

            axios.post('/api/v2/brand', form, { headers: {'Content-Type': 'multipart/form-data' } }).then(res => {
                const brandResponse = {
                    _id: res.data._id,
                    description: res.data.description,
                    status: res.data.status,
                    photos: res.data.photos
                }

                let newBrands = brands.slice();
                newBrands.unshift(brandResponse);
                setBrands(newBrands);
                handleClose();
            })
        } else {
            console.log('Completear nombre de la marca');
        }
    }

    const handleProductPictures = (e) => {
        setProductPictures([...productPictures, ...e.target.files]);
    };

    function handleDeleteUploadedImage(pic) {
        let newProductPitures = productPictures.slice();
        newProductPitures = newProductPitures.filter(x => x !== pic);
        setProductPictures(newProductPitures);
    }

    return (
        <div>
            <StyledButton variant="contained" color="primary" onClick={handleClickOpen}>
                Agregar
            </StyledButton>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {"Agregar una nueva marca"}
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
                    {productPictures.length
                        ? productPictures.map((pic, index) => (
                            <DivUploadImages>
                                <IconButton className="button"
                                    aria-label="Delete"
                                    color='error'
                                    onClick={() => handleDeleteUploadedImage(pic)}
                                >
                                    <Icon>clear</Icon>
                                </IconButton>
                                <div key={index}>{pic.name}</div>
                            </DivUploadImages>
                        ))
                        : null}
                    <AppButtonRoot>
                        <input
                            accept="image/*"
                            className="input"
                            id="upload-new-image-brand-button"
                            multiple
                            type="file"
                            onChange={handleProductPictures}
                            onClick={(event) => {
                                event.target.value = null
                            }}
                        />
                        {productPictures.length > 0
                            ? <label htmlFor="upload-new-image-brand-button-disable">
                                <StyledButton component="span" disabled>Agregar imagen</StyledButton>
                            </label>
                            : <label htmlFor="upload-new-image-brand-button">
                                <StyledButton component="span">Agregar imagen</StyledButton>
                            </label>}
                    </AppButtonRoot>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancelar
                    </Button>
                    <Button onClick={addBrand} color="primary">
                        Crear
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
