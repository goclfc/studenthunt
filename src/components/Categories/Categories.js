import Categorie from "./Categorie"
const Categories =()=>{
    var myHeaders = new Headers();
    const token = localStorage.getItem('token')
    myHeaders.append("Authorization", `Bearer ${token}`)
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://studenthunt.herokuapp.com/api/categories?populate=*", requestOptions)
      .then(response => response.json())
      .then(result => {
       
        console.log(result)
      })
      .catch(error => console.log('error', error));
    return(
        <div className="flex w-full justify-center p-6">
            <Categorie />
            <Categorie />
            <Categorie />
            <Categorie />
            <Categorie />
            <Categorie />
            <Categorie />
            <Categorie />
        </div>
    )
}
export default Categories