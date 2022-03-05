import axios from 'axios'

export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST'
export const GET_CART_LIST = 'GET_CART_LIST'
export const GET_CATEGORY_LIST = 'GET_CATEGORY_LIST'
export const GET_RATING_LIST = 'GET_RATING_LIST'
export const GET_BRAND_LIST = 'GET_BRAND_LIST'

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART'

export const UPDATE_CART_AMOUNT = 'UPDATE_CART_AMOUNT'

export const getProductList = () => (dispatch) => {
    axios.get('/api/ecommerce/get-product-list').then((res) => {
        dispatch({
            type: GET_PRODUCT_LIST,
            payload: res.data,
        })
    })
}

export const getCategoryList = () => (dispatch) => {
    axios.get('/api/ecommerce/get-category-list').then((res) => {
        dispatch({
            type: GET_CATEGORY_LIST,
            payload: res.data,
        })
    })
}

export const getRatingList = () => (dispatch) => {
    axios.get('/api/ecommerce/get-rating-list').then((res) => {
        dispatch({
            type: GET_RATING_LIST,
            payload: res.data,
        })
    })
}

export const getBrandList = () => (dispatch) => {
    axios.get('/api/ecommerce/get-brand-list').then((res) => {
        dispatch({
            type: GET_BRAND_LIST,
            payload: res.data,
        })
    })
}

export const getCartList = () => (dispatch) => {
    const cartList = localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList')) : [];
    localStorage.setItem('cartList', JSON.stringify(cartList));
    dispatch({
        type: GET_CART_LIST,
        payload: cartList
    })
}

export const addProductToCart = (product) => (dispatch) => {
    const cartList = JSON.parse(localStorage.getItem('cartList'));
    let existProduct = false;
    cartList.map(productInCart => {
        if (productInCart.id === product.id) {
            productInCart.amount += product.amount
            existProduct = true
        }
    })
    if (!existProduct) {
        cartList.push(product)
    }
    
    dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: cartList,
    })
    localStorage.setItem('cartList', JSON.stringify(cartList));
}

export const deleteProductFromCart = (productId) => (dispatch) => {
    const cartList = JSON.parse(localStorage.getItem('cartList'));
    let newCartList = cartList.filter(product => product.id !== productId);

    dispatch({
        type: DELETE_PRODUCT_FROM_CART,
        payload: newCartList
    })
    localStorage.setItem('cartList', JSON.stringify(newCartList));
}

export const updateCartAmount = (productId, amount) => (dispatch) => {
    const cartList = JSON.parse(localStorage.getItem('cartList'));
    let newCartList = cartList.map(product => {
        if (product.id === productId) {
            product.amount = amount;
        }
        return product;
    })

    dispatch({
        type: UPDATE_CART_AMOUNT,
        payload: newCartList
    })

    localStorage.setItem('cartList', JSON.stringify(newCartList));
}
