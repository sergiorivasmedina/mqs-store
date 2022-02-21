import React, { useState, useEffect } from 'react'
import ItemsTable from './shared/ItemsTable'
import { SimpleCard } from 'app/components'
import { Box, styled, alpha } from '@mui/system'
import CreateItemDialog from './shared/CreateItemDialog'
import { InputBase, Icon, IconButton, Tooltip } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import axios from '../../../axios'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const SearchContainer = styled('div')(() => ({
    width: 160,
    display: 'flex',
    justifyContent: 'space-between'
}))

const Items = () => {

    const [items, setItems] = useState([]);
    const [itemsFiltered, setItemsFiltered] = useState([]);
    const [brandNameFilterValue, setBrandNameFilterValue] = useState('');
    const [itemNameFilterValue, setItemNameFilterValue] = useState('');

    useEffect(() => {
        // Get all items from backend
        axios.get('/api/v1/component-details').then(res => {
            setItems(res.data);
            setItemsFiltered(res.data);
        })
    }, []);

    function handlerFilterItems() {
        let itemsAux = items.slice();
        itemsAux = itemsAux.filter(x => x.description.toLowerCase().includes(itemNameFilterValue.toLowerCase())
            && x.brand.description.toLowerCase().includes(brandNameFilterValue.toLowerCase()));
        setItemsFiltered(itemsAux);
    }

    return (
        <Container>
            <CreateItemDialog items={itemsFiltered} setItems={setItemsFiltered} />
            <SimpleCard title="Gestión de Items">
                <SearchContainer>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            id="name-search"
                            placeholder="Filtrar por nombre"
                            inputProps={{ 'aria-label': 'search' }}
                            onBlur={event => {
                                setItemNameFilterValue(event.target.value)
                            }}
                        />
                    </Search>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            id="brand-search"
                            placeholder="Filtrar por marca"
                            inputProps={{ 'aria-label': 'search' }}
                            onBlur={event => {
                                setBrandNameFilterValue(event.target.value)
                            }}
                        />
                    </Search>
                    <Tooltip title="Filtrar y buscar" fontSize="large">
                        <IconButton size="large" aria-label="search" color="primary" onClick={handlerFilterItems}>
                            <SendIcon />
                        </IconButton>
                    </Tooltip>
                </SearchContainer>

                <ItemsTable items={itemsFiltered} setItems={setItemsFiltered} />
            </SimpleCard>
            <Box py="12px" />
        </Container>
    )
}

export default Items