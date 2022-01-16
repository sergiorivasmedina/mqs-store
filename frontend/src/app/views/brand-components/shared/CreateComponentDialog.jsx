import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { styled } from '@mui/system'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
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

export default function CreateComponentDialog({ components, setComponents }) {
    const [open, setOpen] = useState(false)
    const [state, setState] = useState(true)
    const [stateName, setStateName] = useState('Activo')
    const [componentName, setComponentName] = useState('')

    function handleClickOpen() {
        setOpen(true)
    }

    function handleClose() {
        setComponentName('')
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
        setComponentName(event.target.value)
    }

    function addComponent() {
        if (componentName.length > 0) {
            const request = {
                description: componentName,
                status: state ? 1 : 0
            }
            axios.post('/api/v1/component', request).then(res => {
                const componentResponse = {
                    _id: res.data._id,
                    description: res.data.description,
                    status: res.data.status
                }
    
                let newComponents = components.slice();
                newComponents.unshift(componentResponse);
                setComponents(newComponents)
                handleClose();
            })
        } else {
            // TODO: Mostrar toggle snackbar
            console.log('Completar nombre del componente');
        }
        
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
                    {"Agregar un nuevo componente"}
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
                    <Button onClick={addComponent} color="primary">
                        Crear
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
