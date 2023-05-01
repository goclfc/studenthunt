import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { useFetchedData } from '../../services/HttpServices'
import Carousel from 'nuka-carousel'
import './banner.css'
const Banner = () => {
  const data= useFetchedData('baners')
  const prodId = data[0]?.attributes.products.data[0].id
  console.log(data)
  return (
    <div className='flex flex-col items-center'>
      <Link to={`products/${prodId}`} state={prodId}>
      <Carousel 
      slideIndex={0}
      autoplay={1}
      autoplayInterval={2000}

      > 
      {
        data.map(item => (
          <div className='banner_wrapper flex flex-col items-center w-full p-6' key={prodId}>
            <img src={item.attributes?.baner.data.attributes.url} alt='banner' />
          </div>
        ))
      }
      </Carousel>
       </Link>

    </div>
  )
}
export default Banner