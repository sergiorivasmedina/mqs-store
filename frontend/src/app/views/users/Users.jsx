import React, { useState, useEffect } from 'react'
import ItemsTable from './shared/UsersTable'
import { SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
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

    useEffect(() => {
        // Get all items from backend
        axios.get('/api/v1/users').then(res => {
            setUsers(res.data);
        })
    }, []);

    return (
        <Container>
            <SimpleCard title="Gestión de Items">
                <ItemsTable users={users} setUsers={setUsers} />
            </SimpleCard>
            <Box py="12px" />
        </Container>
    )
}

export default Users