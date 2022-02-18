import React, { Fragment, useState } from 'react'
import { styled } from '@mui/system'
import Switch from '@mui/material/Switch'
import {
    Autocomplete,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Slide,
    TextField,
    FormControlLabel
} from '@mui/material'
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

export default function CreateItemDialog({ users, setUsers, roleSuggestion, brandsAvailable }) {
    const [open, setOpen] = useState(false)
    const [currentName, setCurrentName] = useState('');
    const [currentLastName, setCurrentLastName] = useState('');
    const [currentEmail, setCurrentEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [ruc, setRuc] = useState('');
    const [stateName, setStateName] = useState('Activo');
    const [state, setState] = useState(1);
    const [inputUserRole, setInputUserRole] = useState(null);
    const [currentAvailableBrands, setcurrentAvailableBrands] = useState([]);
    const [currentAvailableBrandsSuggestions, setCurrentAvailableBrandsSuggestions] = useState(brandsAvailable);


    function handleClickOpen() {
        setOpen(true)
    }

    function handleChangeState() {
        if (state) {
            setStateName('Inactivo');
        } else {
            setStateName('Activo');
        }

        setState(!state);
    }

    function handleClose() {
        setOpen(false);
        setCurrentName('');
        setCurrentLastName('');
        setCurrentEmail('');
        setPassword('');
        setCellphone('');
        setCompanyName('');
        setRuc('');
        setStateName('Activo');
        setState(1);
        setInputUserRole(null);
        setcurrentAvailableBrands([]);
        setCurrentAvailableBrandsSuggestions(brandsAvailable);
    }

    function addUser() {
        if (currentName && currentEmail && password && state && inputUserRole) {
            const request = {
                name: currentName,
                lastName: currentLastName,
                mail: currentEmail,
                password: password,
                cellphone: cellphone,
                companyName,
                ruc,
                status: state,
                idRole: inputUserRole._id,
                availableBrands: currentAvailableBrands
            }

            axios.post('/api/v1/user', request).then(res => {
                const userResponse = {
                    _id: res.data._id,
                    name: res.data.name,
                    lastName: res.data.lastName,
                    email: res.data.mail,
                    cellphone: res.data.cellphone,
                    companyName: res.data.companyName,
                    ruc: res.data.ruc,
                    role: {
                        _id: res.data.idRole,
                        description: inputUserRole.description
                    },
                    status: res.data.status
                }
                let newUsers = users.slice();
                newUsers.unshift(userResponse);
                setUsers(newUsers);
                handleClose();
            });
            
        } else {
            alert('Por favor llenar campos requeridos: nombre, correo, contraseña, rol.');
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
                aria-labelledby="create_user-dialog"
                aria-describedby="create_user-dialog-description"
            >
                <DialogTitle id="create_user-dialog">
                    {"Agregar un nuevo usuario"}
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                            <StyledTextField
                                id="outlined-basic"
                                label="Nombre"
                                variant="outlined"
                                value={currentName}
                                onChange={(event, value) => {
                                    setCurrentName(event.target.value);
                                }}
                            />
                            <br></br>
                            <StyledTextField
                                id="outlined-basic"
                                label="Apellido"
                                variant="outlined"
                                value={currentLastName}
                                onChange={(event, value) => {
                                    setCurrentLastName(event.target.value);
                                }}
                            />
                            <br></br>
                            <StyledTextField
                                id="outlined-basic"
                                label="Correo"
                                variant="outlined"
                                type="email"
                                value={currentEmail}
                                onChange={(event, value) => {
                                    setCurrentEmail(event.target.value);
                                }}
                            />
                            <br></br>
                            <StyledTextField
                                id="outlined-basic"
                                label="Contraseña"
                                variant="outlined"
                                value={password}
                                onChange={(event, value) => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                            <StyledTextField
                                id="outlined-basic"
                                label="Celular"
                                variant="outlined"
                                value={cellphone}
                                onChange={(event, value) => {
                                    setCellphone(event.target.value);
                                }}
                            />
                            <br></br>
                            <StyledTextField
                                id="outlined-basic"
                                label="Nombre de empresa"
                                variant="outlined"
                                value={companyName}
                                onChange={(event, value) => {
                                    setCompanyName(event.target.value);
                                }}
                            />
                            <br></br>
                            <StyledTextField
                                id="outlined-basic"
                                label="RUC"
                                variant="outlined"
                                value={ruc}
                                onChange={(event, value) => {
                                    setRuc(event.target.value);
                                }}
                            />
                            <br></br>
                            <Fragment>
                                <Autocomplete
                                    isOptionEqualToValue={(option, value) => option._id === value._id}
                                    value={inputUserRole}
                                    options={roleSuggestion}
                                    getOptionLabel={(option) => option.description}
                                    onChange={(event, newValue) => {
                                        setInputUserRole(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label={'Rol'}
                                            variant="outlined"
                                            fullWidth
                                        />
                                    )}
                                />
                            </Fragment>
                        </Grid>
                        <Grid item lg={12} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                            <br></br>
                            <Autocomplete
                                multiple
                                id="tags-standard"
                                options={currentAvailableBrandsSuggestions}
                                getOptionLabel={(option) => option.description}
                                value={currentAvailableBrands}
                                onChange={(event, newValue) => {
                                    setcurrentAvailableBrands(newValue);
                                    let availableBrandsFiltered = brandsAvailable.filter(function (array_el) {
                                        return newValue.filter(function (anotherOne_el) {
                                            return anotherOne_el._id === array_el._id;
                                        }).length === 0
                                    });
                                    setCurrentAvailableBrandsSuggestions(availableBrandsFiltered);
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="standard"
                                        label="Marcas habilitadas"
                                        placeholder="Buscar"
                                        fullWidth
                                    />
                                )}
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
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancelar
                    </Button>
                    <Button onClick={addUser} color="primary">
                        Crear
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
