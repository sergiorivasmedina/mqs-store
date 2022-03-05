import React, { createContext, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import axios from '../../axios'
import { MatxLoading } from 'app/components'
import { getCartList } from 'app/redux/actions/EcommerceActions'

const initialState = {
    isAuthenticated: false,
    isInitialised: false,
    user: null,
}

const isValidToken = (accessToken) => {
    if (!accessToken) {
        return false
    }

    const decodedToken = jwtDecode(accessToken)
    const currentTime = Date.now() / 1000
    return decodedToken.exp > currentTime
}

const setSession = (accessToken, user) => {
    if (accessToken) {
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('user', JSON.stringify(user))
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    } else {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('user')
        localStorage.removeItem('cartList')
        delete axios.defaults.headers.common.Authorization
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT': {
            const { isAuthenticated, user } = action.payload

            return {
                ...state,
                isAuthenticated,
                isInitialised: true,
                user,
            }
        }
        case 'LOGIN': {
            const { user } = action.payload

            return {
                ...state,
                isAuthenticated: true,
                user,
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
        }
        case 'REGISTER': {
            const { user } = action.payload

            return {
                ...state,
                isAuthenticated: true,
                user,
            }
        }
        default: {
            return { ...state }
        }
    }
}

const AuthContext = createContext({
    ...initialState,
    method: 'JWT',
    login: () => Promise.resolve(),
    logout: () => { },
    register: () => Promise.resolve(),
})

export const AuthProvider = ({ children }) => {
    const redirect = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState)

    const login = async (email, password) => {
        await new Promise((resolve) => setTimeout(resolve, 200))
        const response = await axios.post('/auth/v1/login', {
            email,
            password,
        })

        const { accessToken, user } = response.data

        setSession(accessToken, user)

        dispatch({
            type: 'LOGIN',
            payload: {
                user,
            },
        })
        
    }

    const register = async (email, username, password) => {
        const response = await axios.post('/auth/v1/register', {
            email,
            username,
            password,
        })

        const { accessToken, user } = response.data

        setSession(accessToken, user)

        dispatch({
            type: 'REGISTER',
            payload: {
                user,
            },
        })
    }

    const logout = () => {
        setSession(null, null)
        dispatch({ type: 'LOGOUT' })
        dispatch(getCartList())
    }

    useEffect(() => {
        ; (async () => {
            try {
                const accessToken = window.localStorage.getItem('accessToken')

                if (accessToken && isValidToken(accessToken)) {
                    console.log('Entró al condicional de accestoken')
                    // const response = await axios.get('/api/auth/profile')
                    // const { user } = response.data
                    const user = JSON.parse(localStorage.getItem('user'));
                    console.info(`user: ${user.id}`)
                    setSession(accessToken, user)

                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: true,
                            user,
                        },
                    })
                } else {
                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    })
                    redirect("/session/signin");
                }
            } catch (err) {
                console.error(err)
                dispatch({
                    type: 'INIT',
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                })
                redirect("/session/signin");
            }
        })()
    }, [])

    if (!state.isInitialised) {
        return <MatxLoading />
    }

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'JWT',
                login,
                logout,
                register,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
