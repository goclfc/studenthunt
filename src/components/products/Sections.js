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

                <Product id={item.id}/>
                ))}
            </div>

        </div>
        </div>
    )
}
export default Section