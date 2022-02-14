import React from 'react'
import { Span } from '../../components/Typography'
import { styled, Box } from '@mui/system'
import useSettings from 'app/hooks/useSettings'

const BrandRoot = styled(Box)(({ theme }) => ({
    alignItems: 'center',
    padding: '0px 18px 20px 29px',
}))

const StyledSpan = styled(Span)(({ theme, mode }) => ({
    fontSize: 18,
    marginLeft: '.5rem',
    display: mode === 'compact' ? 'none' : 'block',
}))

const IMG = styled('img')(() => ({
    width: 150,
    height: 120
}))

const Brand = ({ children }) => {
    const { settings } = useSettings()
    const leftSidebar = settings.layout1Settings.leftSidebar
    const { mode } = leftSidebar

    return (
        <BrandRoot>
            <IMG
                src="/assets/images/mqs/maquisoporte_white_logo.png"
                alt="Maquisoporte Logo"
            />
            <Box display="flex" alignItems="center" justifyContent='space-between'>
                <Box display="flex" alignItems="center">
                    <StyledSpan mode={mode} className="sidenavHoverShow">
                        Maquisoporte
                    </StyledSpan>
                </Box>
                <Box
                    className="sidenavHoverShow"
                    sx={{ display: mode === 'compact' ? 'none' : 'block' }}
                >
                    {children || null}
                </Box>
            </Box>
        </BrandRoot>
    )
}

export default Brand
