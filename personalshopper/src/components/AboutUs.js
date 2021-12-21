import React from 'react'
import {Card} from "react-bootstrap"

function AboutUs() {
    return (
        <div className='Abou'>
        <Card>
  <Card.Header><h1>We help you Shop Anywhere And Anytime.</h1></Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        We offer a simple and safe way to ship your favourite items from around the globe, by providing you a YPS address which is simply a local address from our distribution warehouses in China
Europe and the United States and other geographic hubs we then collect it and get it straight to you.

For almost two decades, we have been helping shoppers and business owners alike shop across border and deliver parcels directly to their door
we pride ourselves on experience and knowledge in global shipping logistics, export compliance and customs documentation. Our customers can rely on our expertise to ensure their items are shipped, packaged and fulfilled quickly,
     safely and in the most cost-effective manner possible. {' '}
      </p>
      
    </blockquote>
  </Card.Body>
</Card>


        
        </div>
    )
}

export default AboutUs
