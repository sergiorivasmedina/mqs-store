import React, { Fragment } from 'react'
import { Grid } from '@mui/material'
import { styled } from '@mui/system'
import TopSellingTable from './shared/TopSellingTable'

import BrandStatCards from './shared/BrandStatCards'

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

const Home = () => {

    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={12} md={8} sm={12} xs={512}>
                        <BrandStatCards />
                        <TopSellingTable />
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    )
}

export default Home
