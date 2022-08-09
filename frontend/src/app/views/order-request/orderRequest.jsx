import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { styled } from '@mui/system'
import OrderRequestTable from './shared/OrderRequestTable'
import { deleteProductFromCart } from 'app/redux/actions/EcommerceActions'

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

const OrderRequest = () => {
    const dispatch = useDispatch()
    const [orderRequest, setOrderRequest] = useState([]);

    useEffect(() => {
      let cartList = JSON.parse(localStorage.getItem('cartList'));
      setOrderRequest(cartList);
      cartList.forEach(element => {
          dispatch(deleteProductFromCart(element.id));
      })
      localStorage.setItem('cartList', '[]');
    }, [])
    
    function getCartTotalAmount() {
        let total = 0.0;
        orderRequest.forEach(order => {
            total += order.price * order.amount;
        })
        return total;
    }

    return (
        <Fragment>
            <ContentBox className="analytics">
                <h1>Resumen de la solicitud de pedido</h1>
                <OrderRequestTable ordersRequested={orderRequest} />
                <h2>Total: S/ {getCartTotalAmount()}</h2>
            </ContentBox>
        </Fragment>
    )
}

export default OrderRequest
