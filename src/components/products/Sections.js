import { Link } from 'react-router-dom'
import Product from './Product'
import './section.css'
const Section = (props)=>{
    return(
        <div>

        <div className="section_wrapper w-full p-6">
            <div className="section_header">
                <div>{props.data.attributes?.name}</div>
                <div>ყველას ნახვა</div>
            </div>
            <div className="products_wrapper">
                {props.data?.attributes.products.data.map(item =>(
                <Link to={`../../products/${item.id}`}>
                <Product id={item.id}/>
                </Link>
                ))}
            </div>

        </div>
        </div>
    )
}
export default Section