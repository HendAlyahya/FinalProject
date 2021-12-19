import React from 'react'
import {useEffect , useState} from "react"
import axios from "axios"
import { useParams } from 'react-router-dom'
import {Card, Button} from "react-bootstrap"



function PersonalDitalis() {
    const [User,setUser]=useState()
    const [Loading,setLoading]=useState(true)
    const {id}=useParams()
    useEffect(() => {
        axios.get(`http://localhost:8080/Personal/getPersonal/${id}`).then((res) => {
          console.log(res.data);
          setUser(res.data);
          setLoading(false);
        });
      }, []);


      if (Loading){
        return (<p>loading...</p>)
    }
    return (
        <div>
            <p>{User.name}</p> 
             {User.proudct?.map((e)=>{
              return(
                  <div>
                    <Card className="CardDita">
    <Card.Img variant="top" src={e.image} thumbnail/>
    <Card.Body>
      <Card.Title>{e.name}</Card.Title>
      <Card.Text>{e.category}</Card.Text>
      <Card.Text>{e.description}</Card.Text>
      <Card.Text>{e.price}</Card.Text>
      <Card.Text>{e.comment}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
    
    
    

                      </div>
              )  
            })}
        </div>
    )}

export default PersonalDitalis
