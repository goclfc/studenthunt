import React, { useState } from "react"
import { useLocation } from 'react-router-dom'
import { useFetchedData } from '../../services/HttpServices'
import Product from '../products/Product'
const Main = (props) => {
    const location = useLocation()
    console.log(location, 'this is mains location')
    const pathname = location.pathname.substring(1)
    const data = useFetchedData(pathname)
    const products = useFetchedData('products')
    console.log(products, 'ptoducts')
    return (
        <div>
            {products ? products.map(item => {
                
                return (
                    <Product id={item.id} />
                )
            })
                : <div>Loading...</div>}
        </div>
    )
}
export default Main