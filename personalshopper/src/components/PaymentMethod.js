import React from 'react'
import {Card} from "react-bootstrap"

function PaymentMethod() {
    return (
        <div className='Pay'>
        <Card>
        <Card.Header><h1>Payment Method:</h1></Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              <ul>
             <li>Cash</li>
             <li>Credit Card</li>
             </ul> 
              {' '}
            </p>
            
          </blockquote>
        </Card.Body>
      </Card>
       </div>
    )
}

export default PaymentMethod
