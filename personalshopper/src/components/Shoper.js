import React from 'react'
import {useEffect , useState}from "react"
import axios from "axios"
import {Card, Button} from "react-bootstrap"

function Shoper() {
    const [Personal,setPersonal]=useState([])
    const [loading,setLoading]=useState(true)

    
    useEffect(()=>{
    axios.get("http://localhost:8080/Personal/getAll").then((res)=>{
        console.log(res)
        setPersonal(res.data)
        setLoading(false)
    })
},[])

if (loading){
    return (<p>loading...</p>)
}

    return (
        <div className="CardPer">
            
             {Personal.map((e)=>{

                
                return(
                <div>
     

  <Card  style={{ width: '18rem' }}>
  <Card.Img variant="top" src={e.image} />
  <Card.Body>
  <Card.Title>{e.name}</Card.Title>
      <Card.Text>{e.Phone}</Card.Text>
      <Card.Text>{e.Address}</Card.Text>
      <Card.Text>{e.gender}</Card.Text>
      <Card.Text>{e.userType}</Card.Text>
      <Card.Text>{e.email}</Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>




     </div>
                    ) 
             })} 
        </div>
    )
}

export default Shoper
