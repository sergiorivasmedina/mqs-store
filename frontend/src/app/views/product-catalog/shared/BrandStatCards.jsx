import React, { useEffect, useState } from 'react'
import { Grid, Card, Icon, IconButton, Tooltip } from '@mui/material'
import { Box, styled } from '@mui/system'
import { Small } from 'app/components/Typography'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import axios from '../../../../axios'

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px !important',
    background: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
        padding: '16px !important',
    },
}))

const StyledButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    margin: theme.spacing(-1),
}))

const ContentBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    '& small': {
        color: theme.palette.text.secondary,
    },
    '& .icon': {
        opacity: 0.6,
        fontSize: '44px',
        color: theme.palette.primary.main,
    },
}))

const Heading = styled('h6')(({ theme }) => ({
    margin: 0,
    marginTop: '4px',
    fontWeight: '500',
    fontSize: '14px',
    color: theme.palette.primary.main,
}))

const IMG = styled('img')(() => ({
    width: '30%',
    maxHeight: 200,
    borderRadius: '10%'
}))

const BransStatCards = () => {
    let navigate = useNavigate()

    const [availableBrands, setAvailableBrands] = useState([]);

    function clickMe(brandId) {
        localStorage.setItem('brandSelected', brandId);
        navigate('/details', { state: 'Sergio' })
    }

    useEffect(() => {
        // Get brands available from current user
        axios.get('/auth/v1/user/availableBrands', { headers: { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` } }).then(res => {
            setAvailableBrands(res.data);
        })
    }, []);


    return (
        <Grid container spacing={3} sx={{ mb: '24px' }}>
            {availableBrands.length > 0 && availableBrands.map((availableBrand, index) => (
                <Grid item xs={12} md={6}>
                    <StyledButton onClick={() => clickMe(availableBrand._id)}>
                        <StyledCard elevation={6}>
                            <ContentBox>
                                <IMG
                                    src={`http://localhost:8080/api/v1/brand/${availableBrand._id}/image`}
                                    // src={`http://3.82.209.241:8080/api/v1/brand/${availableBrand._id}/image`}
                                    alt={availableBrand.description}
                                />
                                <Box ml="12px">
                                    <Small>Marca</Small>
                                    <Heading>{availableBrand.description}</Heading>
                                </Box>
                            </ContentBox>
                            <Tooltip title="View Details" placement="top">
                                <IconButton>
                                    <Icon>arrow_right_alt</Icon>
                                </IconButton>
                            </Tooltip>
                        </StyledCard>
                    </StyledButton>
                </Grid>
            ))}
        </Grid>
    )
}

export default BransStatCards
