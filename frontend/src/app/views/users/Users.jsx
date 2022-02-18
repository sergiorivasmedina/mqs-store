import React, { useState, useEffect } from 'react'
import ItemsTable from './shared/UsersTable'
import { SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import CreateItemDialog from './shared/CreateItemDialog'
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

const Users = () => {

    const [users, setUsers] = useState([]);
    const [roleSuggestion, setRoleSuggestion] = useState([]);
    const [brandsAvailable, setBrandsAvailable] = useState([]);

    useEffect(() => {
        // Get all items from backend
        axios.get('/api/v1/users').then(res => {
            setUsers(res.data);
        })

        // Get all roles from backend
        axios.get('/api/v1/roles').then(res => {
            setRoleSuggestion(res.data)
        })

        // Get all brands from backend
        axios.get('/api/v1/brands').then(res => {
            setBrandsAvailable(res.data)
        })
    }, []);

    return (
        <Container>
            <CreateItemDialog 
                users={users}
                setUsers={setUsers}
                roleSuggestion={roleSuggestion}
                brandsAvailable={brandsAvailable}
            />
            <SimpleCard title="Gestión de usuarios">
                <ItemsTable
                    users={users}
                    setUsers={setUsers}
                    roleSuggestion={roleSuggestion}
                    brandsAvailable={brandsAvailable}
                />
            </SimpleCard>
            <Box py="12px" />
        </Container>
    )
}

export default Users