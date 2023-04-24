import './product.css'
import rightArrow from '../../resources/images/rightarrow.svg'
import { useFetchedData } from '../../services/HttpServices'
const Product = (props)=>{
    const id =props.id
    const productData = useFetchedData(`products/${id}`)
    return (
        <div className="product_wrapper">
            <div className='product_header'>
                <div className='product_img'><img src={productData.attributes?.cover.data.attributes.url} alt='product'/></div>
                <div className='product_description_wrapper'>
                    <div className='product_name'>{productData.attributes?.company}</div>
                    <div className='product_info'>{productData.attributes?.description}</div>
                    <div className='product_price'>30 ლ</div>
                    <div className='product_discount'><span>- 20 ლ</span><img src={rightArrow}/></div>
                </div>
            </div>
            <div className='product_logo_wrapper'>
                <img src={productData.attributes?.logo.data.attributes.url} alt='logo'/>
            </div>
        </div>
    )
}
export default Product