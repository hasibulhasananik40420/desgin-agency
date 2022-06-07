import { useEffect, useState } from "react"

const useService=()=>{
 const [services, setServices] = useState([]) 

 useEffect(()=>{
     fetch('https://protected-shore-34848.herokuapp.com/service')
     .then(res => res.json())
     .then(data =>{
         setServices(data)
     })
 } ,[])
 return [services, setServices]
}
export default useService