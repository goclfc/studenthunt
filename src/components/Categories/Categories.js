
import { useFetchedData } from "../../services/HttpServices"
import Categorie from "./Categorie"
const Categories = () => {
  const data = useFetchedData('categories')
  return (
    <div className="catogories-wrapper">
      {data ? data.map(item => (
      
          <Categorie data={item} />

      )) : null}

    </div>
  )
}
export default Categories