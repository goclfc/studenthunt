import { Link } from "react-router-dom"
import { useFetchedData } from "../../services/HttpServices"
import Categorie from "./Categorie"
const Categories = () => {
  const data = useFetchedData('categories')
  return (
    <div className="flex w-full justify-center p-6">
      {data ? data.map(item => (
      
          <Categorie data={item} />

      )) : null}

    </div>
  )
}
export default Categories