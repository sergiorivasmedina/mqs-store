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

const SimpleTable = ({ items, setItems }) => {
    const [open, setOpen] = useState(false)
    const [state, setState] = useState(true)
    const [stateName, setStateName] = useState('Activo')
    const [itemName, setitemName] = useState('')
    const [currentItem, setCurrentItem] = useState(null)

    function handleClose() {
        setitemName('')
        setCurrentItem(null)
        setOpen(false)
    }

    function editItem(item) {
        // setitemName(item.description)
        // setState(item.status)
        // let currentState = item.status ? 'Activo' : 'Inactivo'
        // setStateName(currentState)
        // setCurrentItem(item)
        // setOpen(true)
        alert('Funcionalidad en contrucción')
    }

    function validateChange(item, newItem) {
        return item.description !== newItem.description || item.status !== newItem.status;
    }

    function handleUpdate() {
        if (itemName.length > 0 && validateChange(currentItem, itemName)) {
            const request = {
                description: itemName,
                status: state ? 1 : 0
            }
            axios.put('/api/v1/component-detail/' + currentItem._id, request).then(res => {
                let itemResponse = res.data;
                let index_update = items.findIndex(x => x._id === currentItem._id);

                let newItems = items.slice();
                newItems[index_update].description = itemResponse.description;
                newItems[index_update].status = itemResponse.status;
                setItems(newItems);
            })
        }

        // TODO: mostrar snackbar cuando no se cumpla la condicion anterior

        setCurrentItem(null)
        setOpen(false)
    }

    function handleInputChange(event) {
        setitemName(event.target.value)
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
                        <TableCell>Numero de Parte</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Precio</TableCell>
                        <TableCell>Componente</TableCell>
                        <TableCell>Marca</TableCell>
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
                            <TableCell>S/ {item.price}</TableCell>
                            <TableCell>{item.brand.description}</TableCell>
                            <TableCell>{item.component.description}</TableCell>
                            <TableCell>{getStatus(item.status)}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => editItem(item)}>
                                    <Icon color="primary">edit</Icon>
                                </IconButton>
                                <IconButton onClick={() => editItem(item)}>
                                    <Icon color="error">delete</Icon>
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
                                        label="Nombre"
                                        variant="outlined"
                                        value={itemName}
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
