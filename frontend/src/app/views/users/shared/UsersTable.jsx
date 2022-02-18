import React, { Fragment, useState } from 'react'
import {
    Autocomplete,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    Grid,
    Table,
    TableHead,
    TableCell,
    TableBody,
    IconButton,
    Icon,
    TableRow,
    TextField,
    Slide,
    Switch
} from '@mui/material'
import { Box, styled } from '@mui/system'
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

const SimpleTable = ({ users, setUsers, roleSuggestion, brandsAvailable }) => {
    const [userId, setUserId] = useState('')
    const [currentName, setCurrentName] = useState('');
    const [currentLastName, setCurrentLastName] = useState('');
    const [currentEmail, setCurrentEmail] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [ruc, setRuc] = useState('');
    const [stateName, setStateName] = useState('Activo');
    const [openEdit, setOpenEdit] = useState(false);
    const [state, setState] = useState(1);
    const [inputUserRole, setInputUserRole] = useState(null);
    const [currentAvailableBrands, setcurrentAvailableBrands] = useState([]);
    const [currentAvailableBrandsSuggestions, setCurrentAvailableBrandsSuggestions] = useState([]);

    // delete user variables
    const [openDeleteUser, setOpenDeleteUser] = useState(false);

    function getStatus(id) {
        if (id === 1) {
            return 'Activo';
        } else if (id === 0) {
            return 'Inactivo';
        }
        return 'Estado desconocido';
    }

    function editUser(user) {
        setUserId(user._id);
        setCurrentName(user.name);
        setCurrentLastName(user.lastName);
        setCurrentEmail(user.email);
        setCompanyName(user.companyName);
        setCellphone(user.cellphone);
        setRuc(user.ruc);
        setState(user.status);
        setcurrentAvailableBrands(user.availableBrands)
        let availableBrandsFiltered = brandsAvailable.filter(function (array_el) {
            return user.availableBrands.filter(function (anotherOne_el) {
                return anotherOne_el._id === array_el._id;
            }).length === 0
        });
        setCurrentAvailableBrandsSuggestions(availableBrandsFiltered);
        let currentState = user.status ? 'Activo' : 'Inactivo'
        setStateName(currentState)
        setInputUserRole(user.role)
        setOpenEdit(true);
    }

    function handleCloseEdit() {
        setUserId('');
        setCurrentName('');
        setCurrentLastName('');
        setCurrentEmail('');
        setCompanyName('');
        setCellphone('');
        setRuc('');
        setState(1);
        setcurrentAvailableBrands([])
        setInputUserRole(null)
        setOpenEdit(false);
    }

    function handleInputNameChange(event) {
        setCurrentName(event.target.value);
    }

    function handleInputEmailChange(event) {
        setCurrentEmail(event.target.value);
    }

    function handleLastNameChange(event) {
        setCurrentLastName(event.target.value);
    }

    function handleCellphoneChange(event) {
        setCellphone(event.target.value);
    }

    function handleCompanyName(event) {
        setCompanyName(event.target.value);
    }

    function handleRucChange(event) {
        setRuc(event.target.value);
    }

    function handleChangeEditState() {
        if (state) {
            setStateName('Inactivo');
        } else {
            setStateName('Activo');
        }

        setState(!state);
    }

    function updateUser() {
        const request = {
            name: currentName,
            lastName: currentLastName,
            email: currentEmail,
            cellphone: cellphone,
            companyName: companyName,
            ruc: ruc,
            status: state,
            idRole: inputUserRole,
            availableBrands: currentAvailableBrands
        }

        axios.put('/api/v1/user/' + userId, request).then(res => {
            // actualizar fila en tabla
            let userResponse = res.data;
            let index_update = users.findIndex(x => x._id === userId);

            let newUsers = users.slice();
            newUsers[index_update] = userResponse;
            setUsers(newUsers);

            handleCloseEdit();
        }).catch(err => {
            alert('No se pudo editar. Contactar administrador');
            console.log(err);
        })
    }

    function openDeleteUserDialog(user) {
        setUserId(user._id);
        setCurrentName(user.name);
        setCurrentEmail(user.email);
        setOpenDeleteUser(true);
    }

    function handleDeleteUserClose() {
        setUserId('');
        setCurrentName('');
        setCurrentEmail('');
        setOpenDeleteUser(false);
    }

    function handleDeleteUser() {
        axios.delete('/api/v1/user/' + userId).then(res => {
            console.info(`Se eliminó usuario con id: ${userId}`);
        });
        let updateUsers = users.slice();
        updateUsers = updateUsers.filter(x => x._id !== userId);
        setUsers(updateUsers);
        handleDeleteUserClose();
    }

    return (
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Apellido</TableCell>
                        <TableCell>Correo</TableCell>
                        <TableCell>Celular</TableCell>
                        <TableCell>Empresa</TableCell>
                        <TableCell>RUC</TableCell>
                        <TableCell>Rol</TableCell>
                        <TableCell>Estado</TableCell>
                        <TableCell>Acción</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users && users.map((user, index) => (
                        <TableRow key={index}>
                            <TableCell align="left">
                                {user.name}
                            </TableCell>
                            <TableCell>{user.lastName}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.cellphone}</TableCell>
                            <TableCell>{user.companyName}</TableCell>
                            <TableCell>{user.ruc}</TableCell>
                            <TableCell>{user.role.description}</TableCell>
                            <TableCell>{getStatus(user.status)}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => editUser(user)}>
                                    <Icon color="secondary">edit</Icon>
                                </IconButton>
                                <IconButton onClick={() => openDeleteUserDialog(user)}>
                                    <Icon color="delete">delete</Icon>
                                </IconButton>
                            </TableCell>
                            <Dialog
                                open={openEdit}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleCloseEdit}
                                aria-labelledby="alert-dialog-slide-title"
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle id="alert-dialog-slide-title">
                                    {"Modificar usuario"}
                                </DialogTitle>
                                <DialogContent>
                                    <Grid container spacing={6}>
                                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                            <StyledTextField
                                                id="outlined-basic"
                                                label="Nombre"
                                                variant="outlined"
                                                value={currentName}
                                                onChange={handleInputNameChange}
                                            />
                                            <br></br>
                                            <StyledTextField
                                                id="outlined-basic"
                                                label="Apellido"
                                                variant="outlined"
                                                value={currentLastName}
                                                onChange={handleLastNameChange}
                                            />
                                            <br></br>
                                            <StyledTextField
                                                id="outlined-basic"
                                                label="Correo"
                                                variant="outlined"
                                                type="email"
                                                value={currentEmail}
                                                onChange={handleInputEmailChange}
                                            />
                                            <br></br>
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                            <StyledTextField
                                                id="outlined-basic"
                                                label="Celular"
                                                variant="outlined"
                                                value={cellphone}
                                                onChange={handleCellphoneChange}
                                            />
                                            <br></br>
                                            <StyledTextField
                                                id="outlined-basic"
                                                label="Nombre de empresa"
                                                variant="outlined"
                                                value={companyName}
                                                onChange={handleCompanyName}
                                            />
                                            <br></br>
                                            <StyledTextField
                                                id="outlined-basic"
                                                label="RUC"
                                                variant="outlined"
                                                value={ruc}
                                                onChange={handleRucChange}
                                            />
                                            <br></br>
                                        </Grid>
                                        <Grid item lg={12} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                            <Fragment>
                                                <Autocomplete
                                                    isOptionEqualToValue={(option, value) => option._id === value._id}
                                                    value={inputUserRole}
                                                    options={roleSuggestion}
                                                    getOptionLabel={(option) => option.description}
                                                    onChange={(event, newValue) => {
                                                        if (newValue) {
                                                            setInputUserRole(newValue);
                                                        } else {
                                                            setInputUserRole(null)
                                                        }
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
                                                        onChange={() => handleChangeEditState()}
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
                                    <Button onClick={handleCloseEdit} color="secondary">
                                        Cancelar
                                    </Button>
                                    <Button onClick={updateUser} color="primary">
                                        Actualizar
                                    </Button>
                                </DialogActions>
                            </Dialog>
                            <Dialog
                                open={openDeleteUser}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleDeleteUserClose}
                                aria-labelledby="alert-dialog-delete"
                                aria-describedby="alert-dialog-delete-description"
                            >
                                <DialogTitle id="alert-dialog-slide-title">
                                    {`Desea eliminar usuario "${currentName} (${currentEmail})" ?`}
                                </DialogTitle>
                                <DialogActions>
                                    <Button onClick={handleDeleteUserClose} color="secondary">
                                        Cancelar
                                    </Button>
                                    <Button onClick={handleDeleteUser} color="primary">
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
