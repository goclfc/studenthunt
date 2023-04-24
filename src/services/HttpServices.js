import { useEffect, useState } from "react"

export const useFetchedData = (endpoint) => {
    const [data, setData] = useState([])
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://studenthunt.herokuapp.com/api/${endpoint}?populate=*`, requestOptions)
            .then(response => response.json())
            .then(result => setData(result.data))
            .catch(error => console.log('error', error));
    }, [])
    return data
}
