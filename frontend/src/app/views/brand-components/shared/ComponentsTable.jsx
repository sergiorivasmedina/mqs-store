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

const SimpleTable = ({ components, setComponents }) => {
    const [open, setOpen] = useState(false)
    const [state, setState] = useState(true)
    const [stateName, setStateName] = useState('Activo')
    const [componentName, setcomponentName] = useState('')
    const [currentComponent, setCurrentComponent] = useState(null)

    function handleClose() {
        setcomponentName('')
        setCurrentComponent(null)
        setOpen(false)
    }

    function editComponent(component) {
        setcomponentName(component.description)
        setState(component.status)
        let currentState = component.status ? 'Activo' : 'Inactivo'
        setStateName(currentState)
        setCurrentComponent(component)
        setOpen(true)
    }

    function validateChange(component, newComponent) {
        return component.description !== newComponent.description || component.status !== newComponent.status;
    }

    function handleUpdate() {
        if (componentName.length > 0 && validateChange(currentComponent, componentName)) {
            const request = {
                description: componentName,
                status: state ? 1 : 0
            }
            axios.put('/api/v1/component/' + currentComponent._id, request).then(res => {
                let componentResponse = res.data;
                let index_update = components.findIndex(x => x._id === currentComponent._id);
    
                let newComponents = components.slice();
                newComponents[index_update].description = componentResponse.description;
                newComponents[index_update].status = componentResponse.status;
                setComponents(newComponents);
            })
        }

        // TODO: mostrar snackbar cuando no se cumpla la condicion anterior
        
        setCurrentComponent(null)
        setOpen(false)
    }

    function handleInputChange(event) {
        setcomponentName(event.target.value)
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
                    {components && components.map((component, index) => (
                        <TableRow key={index}>
                            <TableCell align="left">
                                {component.description}
                            </TableCell>
                            <TableCell>{getStatus(component.status)}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => editComponent(component)}>
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
                                    {"Modificar componente"}
                                </DialogTitle>
                                <DialogContent>
                                    <StyledTextField
                                        id="outlined-basic"
                                        label="Nombre"
                                        variant="outlined"
                                        value={componentName}
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
