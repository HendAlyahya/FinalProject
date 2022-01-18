import React from 'react'
import {useEffect , useState}from "react"
import axios from "axios"
import {Card, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
// import Comment from "../components/Comment"

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
  <Card.Img className="CardStyle" variant="top" src={e.image} />
  <Card.Body>
        <Card.Title>{e.name}</Card.Title>
      <Card.Text>{e.Phone}</Card.Text>
      <Card.Text>{e.Address}</Card.Text>
      <Card.Text>{e.gender}</Card.Text>
      <Card.Text>{e.userType}</Card.Text>
      <Card.Text>{e.email}</Card.Text>
    <Link to={`/PersonalDitalis/${e._id}`} ><Button variant="primary">Go somewhere</Button></Link>
  </Card.Body>
  {/* <Comment></Comment> */}
</Card>




     </div>
                    ) 
             })} 
        </div>
    )
}

export default Shoper
