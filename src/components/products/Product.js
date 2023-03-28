import './product.css'
import product1 from '../../resources/images/product1.svg'
import companyLogo from '../../resources/images/companyLogo.svg'
import rightArrow from '../../resources/images/rightarrow.svg'
const Product = ()=>{
    return (
        <div className="product_wrapper">
            <div className='product_header'>
                <div className='product_img'><img src={product1} alt='product'/></div>
                <div className='product_description_wrapper'>
                    <div className='product_name'>Name</div>
                    <div className='product_info'>Description some large text here, lorem ipsum </div>
                    <div className='product_price'>30 ლ</div>
                    <div className='product_discount'><span>- 20 ლ</span><img src={rightArrow}/></div>
                </div>
            </div>
            <div className='product_logo_wrapper'>
                <img src={companyLogo} alt='logo'/>
            </div>
        </div>
    )
}
export default Product