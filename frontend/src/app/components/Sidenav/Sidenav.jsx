import React, { Fragment, useState } from 'react'
import Scrollbar from 'react-perfect-scrollbar'
import { MatxVerticalNav } from 'app/components'
import useSettings from 'app/hooks/useSettings'
import { styled } from '@mui/system'
import AuthService from '../../services/AuthService'
import { useNavigate } from 'react-router-dom'
import axios from '../../../axios'

const StyledScrollBar = styled(Scrollbar)(() => ({
    paddingLeft: '1rem',
    paddingRight: '1rem',
    position: 'relative',
}))

const SideNavMobile = styled('div')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100vw',
    background: 'rgba(0, 0, 0, 0.54)',
    zIndex: -1,
    [theme.breakpoints.up('lg')]: {
        display: 'none',
    },
}))

const Sidenav = ({ children }) => {
    const redirect = useNavigate();
    const { settings, updateSettings } = useSettings()
    const [navigations, setNavigations] = useState([]);

    React.useEffect(async () => {
        const user = await AuthService.getUser(localStorage.getItem('accessToken'));
        
        if (!user || !user.idRole) return redirect("/session/signin");

        axios.get(`/api/v1/parameter/group/navigations/role/${user.idRole}`).then(res => {
            setNavigations(res.data.value);
        })
    }, [])
    

    const updateSidebarMode = (sidebarSettings) => {
        let activeLayoutSettingsName = settings.activeLayout + 'Settings'
        let activeLayoutSettings = settings[activeLayoutSettingsName]

        updateSettings({
            ...settings,
            [activeLayoutSettingsName]: {
                ...activeLayoutSettings,
                leftSidebar: {
                    ...activeLayoutSettings.leftSidebar,
                    ...sidebarSettings,
                },
            },
        })
    }

    return (
        <Fragment>
            <StyledScrollBar options={{ suppressScrollX: true }}>
                {children}
                <MatxVerticalNav items={navigations} />
            </StyledScrollBar>

            <SideNavMobile
                onClick={() => updateSidebarMode({ mode: 'close' })}
            />
        </Fragment>
    )
}

export default Sidenav
