import './categorie.css'
import pizza from '../../resources/images/piza.svg'

const Categorie = (props)=>{
    return (
        <div className='categorie_wrapper'>
            <div className='categorie_logo'><img src={pizza}/></div>
            <div className='categorie_name'>name</div>

        </div>
    )
}
export default Categorie