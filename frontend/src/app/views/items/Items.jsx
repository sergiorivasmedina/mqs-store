import React, { useState, useEffect } from 'react'
import ItemsTable from './shared/ItemsTable'
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

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        // Get all items from backend
        axios.get('/api/v1/component-details').then(res => {
            setItems(res.data);
        })
    }, []);

    return (
        <Container>
            <CreateItemDialog items={items} setItems={setItems} />
            <SimpleCard title="Gestión de Items">
                <ItemsTable items={items} setItems={setItems} />
            </SimpleCard>
            <Box py="12px" />
        </Container>
    )
}

export default Items