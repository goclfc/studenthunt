import { useFetchedData } from "../../services/HttpServices"
import Banner from "../Banner/Banner"
import Categories from "../Categories/Categories"
import Section from "../products/Sections"

const Landing = ()=>{
    const data =useFetchedData('groups')
    return(
   <div>
    <Banner />
    <Categories />
    {data? data.map(item=>(

    <Section data={item}/>
    )):null}
   </div>
    )
}
export default Landing