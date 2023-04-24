import React, { useEffect, useState } from "react"
import { Link, useLocation, useParams } from 'react-router-dom'
import { useFetchedData } from '../../services/HttpServices'
import Product from '../products/Product'
const Main = (props) => {
    const [prodsToShow,setProdsToShow] = useState([])
    const location = useLocation()
    console.log(location, 'this is mains location')
    const pathname = location.pathname.substring(1)
    const data = useFetchedData(pathname)
    const products = useFetchedData('products')
    const {id}= useParams()
    console.log(products[0]?.attributes?.categories.data[0].id, 'ptoducts')
    useEffect(()=>{
        if(products.length>0 &&id){

            const selectedProducts = products.filter(prod => prod.attributes.categories.data[0]?.id == id) 
            setProdsToShow(selectedProducts)
        }
    },[products])
    return (
        <div>
            {prodsToShow ? prodsToShow.map(item => {
                
                return (
                    <Link to={`../../products/${item.id}`}>
                        <Product id={item.id} />
                    </Link>
                )
            })
                : <div>Loading...</div>}
        </div>
    )
}
export default Main