import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { useFetchedData } from '../../services/HttpServices'
import './banner.css'
const Banner = () => {
  const data= useFetchedData('baners')
  const prodId = data[0]?.attributes.products.data[0].id
  console.log(data)
  return (
    <div className='flex flex-col items-center'>
      <Link to={`products/${prodId}`} state={prodId}>
     
      {
        data.map(item => (
          <div className='banner_wrapper flex flex-col items-center w-full p-6' key={prodId}>
            <img src={item.attributes?.baner.data.attributes.url} alt='banner' />
          </div>
        ))
      }
       </Link>
            <div className='panel flex mt-4'>
              <div className='active point m-2 cursor-pointer'></div>
              <div className='point m-2 cursor-pointer'></div>
              <div className='point m-2 cursor-pointer'></div>
              <div className='point m-2 cursor-pointer'></div>
              <div className='point m-2 cursor-pointer'></div>
            </div>
    </div>
  )
}
export default Banner