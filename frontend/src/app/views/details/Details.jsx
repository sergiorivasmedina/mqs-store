import React, { Fragment } from 'react'
import { Grid } from '@mui/material'
import { styled } from '@mui/system'
import DetailsTable from './shared/DetailsTable'
import { useLocation } from "react-router-dom";

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

function Details() {
    const { state } = useLocation();
    console.log(state);

    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={12} md={8} sm={12} xs={512}>
                        <DetailsTable />
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    )
}

export default Details
