import './categorie.css'
import pizza from '../../resources/images/piza.svg'
import { Link } from 'react-router-dom'

const Categorie = (props)=>{
    return (
        <Link to={`categories/${props.data.id}`}>
        <div className='categorie_wrapper'>
            <div className='categorie_logo'><img src={props.data?.attributes.image.data.attributes.url}/></div>
            <div className='categorie_name'>{props.data?.attributes.Name}</div>

        </div>
        </Link>
    )
}
export default Categorie