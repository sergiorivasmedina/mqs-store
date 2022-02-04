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
import axios from '../../../axios'

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

const SimpleTable = ({ brands, setBrands }) => {
    const [open, setOpen] = useState(false)
    const [state, setState] = useState(true)
    const [stateName, setStateName] = useState('Activo')
    const [brandName, setBrandName] = useState('')
    const [currentBrand, setCurrentBrand] = useState(null)

    function handleClose() {
        setBrandName('')
        setCurrentBrand(null)
        setOpen(false)
    }

    function editBrand(brand) {
        setBrandName(brand.description)
        setState(brand.status)
        let currentState = brand.status ? 'Activo' : 'Inactivo'
        setStateName(currentState)
        setCurrentBrand(brand)
        setOpen(true)
    }

    function validateChange(brand, newBrand) {
        return brand.description !== newBrand.description || brand.status !== newBrand.status;
    }

    function handleUpdate() {
        if (brandName.length > 0 && validateChange(currentBrand, brandName)) {
            const request = {
                description: brandName,
                status: state ? 1 : 0
            }
            axios.put('/api/v1/brand/' + currentBrand._id, request).then(res => {
                let brandResponse = res.data;
                let index_update = brands.findIndex(x => x._id === currentBrand._id);
    
                let newBrands = brands.slice();
                newBrands[index_update].description = brandResponse.description;
                newBrands[index_update].status = brandResponse.status;
                setBrands(newBrands);
            })
        }

        // TODO: mostrar snackbar cuando no se cumpla la condicion anterior
        
        setCurrentBrand(null)
        setOpen(false)
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
                                <IconButton onClick={() => editBrand(brand)}>
                                    <Icon color="secondary">edit</Icon>
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
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </Box>
    )
}

export default SimpleTable
