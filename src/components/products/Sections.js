import Product from './Product'
import './section.css'
const Section = (props)=>{
    return(
        <div className="section_wrapper w-full p-6">
            <div className="section_header">
                <div>შენთვის</div>
                <div>ყველას ნახვა</div>
            </div>
            <div className="products_wrapper">
                <Product />
                <Product />
                <Product />
            </div>

        </div>
    )
}
export default Section