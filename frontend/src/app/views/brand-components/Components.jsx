import React, { useState, useEffect } from 'react'
import ComponentsTable from './shared/ComponentsTable'
import { SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import CreateComponentDialog from './shared/CreateComponentDialog'
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

const Components = () => {

    const [components, setComponents] = useState([]);

    useEffect(() => {
        // Get all components from backend
        axios.get('/api/v1/components').then(res => {
            setComponents(res.data);
        })
    }, []);

    return (
        <Container>
            <CreateComponentDialog components={components} setComponents={setComponents} />
            <SimpleCard title="Gestión de Componentes">
                <ComponentsTable components={components} setComponents={setComponents} />
            </SimpleCard>
            <Box py="12px" />
        </Container>
    )
}

export default Components