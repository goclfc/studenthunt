import banner1 from '../../resources/images/banner_1.svg'
import './banner.css'
const Banner = ()=>{
    return (
        <div className='banner_wrapper flex flex-col items-center w-full p-6'>
            <img src={banner1} alt='banner' />
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