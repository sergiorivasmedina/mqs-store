import React, { useState, useEffect } from 'react'
import BrandsTable from './shared/BrandsTable'
import { SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import CreateBrandDialog from './shared/CreateBrandDialog'
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

const AppTable = () => {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get('/api/v1/brands').then(res => {
            setBrands(res.data);
        })
    }, []);

    return (
        <Container>
            <CreateBrandDialog brands={brands} setBrands={setBrands} />
            <SimpleCard title="Gestión de Marcas">
                <BrandsTable brands={brands} setBrands={setBrands} />
            </SimpleCard>
            <Box py="12px" />
        </Container>
    )
}

export default AppTable