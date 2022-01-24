import React, { useState } from 'react'
import { styled } from '@mui/system'
import Switch from '@mui/material/Switch'
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
    FormControlLabel
} from '@mui/material'
import AutocompleteCombo from './AutocompleteCombo'
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

const StyledAutocompleteCombo = styled(AutocompleteCombo)(({ theme }) => ({
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

export default function CreateItemDialog({ items, setItems }) {
    const [open, setOpen] = useState(false)
    const [state, setState] = useState(true)
    const [stateName, setStateName] = useState('Activo')
    const [itemName, setItemName] = useState('')
    const [itemPartNumber, setItemPartNumber] = useState('')
    const [itemPrice, setItemPrice] = useState(0.00)
    const [inputBrandValue, setInputBrandValue] = useState(null);
    const [inputComponentValue, setInputComponentValue] = useState(null);
    const [productPictures, setProductPictures] = useState([]);

    function handleClickOpen() {
        setOpen(true)
    }

    function handleClose() {
        setItemName('')
        setItemPartNumber('')
        setItemPrice(0.00)
        setInputBrandValue(null)
        setInputComponentValue(null)
        setProductPictures([])
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

    function handleInputPartNumberChange(event) {
        setItemPartNumber(event.target.value)
    }

    function handleInputChange(event) {
        setItemName(event.target.value)
    }

    function handleInputItemPriceChange(event) {
        setItemPrice(event.target.value)
    }

    function addItem() {
        if (itemPartNumber.length > 0 && itemName.length > 0 && !isNaN(itemPrice) && inputBrandValue !== null && inputComponentValue !== null) {
            const form = new FormData();
            form.append("partNumber", itemPartNumber);
            form.append("description", itemName);
            form.append("price", itemPrice);
            form.append("idBrand", inputBrandValue._id);
            form.append("idComponent", inputComponentValue._id);
            form.append("status", state ? 1 : 0);

            for (let pic of productPictures) {
                form.append("productPicture", pic);
            }

            axios.post('/api/v2/component-detail', form, { headers: {'Content-Type': 'multipart/form-data' } }).then(res => {
                const itemResponse = {
                    _id: res.data._id,
                    partNumber: res.data.partNumber,
                    description: res.data.description,
                    price: res.data.price,
                    brand: {
                        _id: res.data.idBrand,
                        description: inputBrandValue.description
                    },
                    component: {
                        _id: res.data.idComponent,
                        description: inputComponentValue.description
                    },
                    status: res.data.status,
                    photos: res.data.photos
                }

                let newItems = items.slice();
                newItems.unshift(itemResponse);
                console.log(newItems)
                setItems(newItems)
                handleClose();
            })
        } else {
            // TODO: Mostrar toggle snackbar
            console.log('Completar nombre del item');
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
                    {"Agregar un nuevo item"}
                </DialogTitle>
                <DialogContent>
                    <StyledTextField
                        id="outlined-basic"
                        label="Número de parte"
                        variant="outlined"
                        value={itemPartNumber}
                        onChange={handleInputPartNumberChange}
                    />
                    <br></br>
                    <StyledTextField
                        id="outlined-basic"
                        label="Nombre"
                        variant="outlined"
                        value={itemName}
                        onChange={handleInputChange}
                    />
                    <br></br>
                    <StyledTextField
                        id="outlined-basic"
                        label="Precio"
                        variant="outlined"
                        value={itemPrice}
                        onChange={handleInputItemPriceChange}
                    />
                    <br></br>
                    <br></br>
                    <StyledAutocompleteCombo getPath={'/api/v1/brands'} label={'Marca'} setInputFormValue={setInputBrandValue} />
                    <br></br>
                    <StyledAutocompleteCombo getPath={'/api/v1/components'} label={'Componentes'} setInputFormValue={setInputComponentValue} />
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
                            id="icon-button-file"
                            multiple
                            type="file"
                            onChange={handleProductPictures}
                        />
                        <label htmlFor="icon-button-file">
                            <StyledButton component="span">Agregar imagen</StyledButton>
                        </label>
                    </AppButtonRoot>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancelar
                    </Button>
                    <Button onClick={addItem} color="primary">
                        Crear
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
