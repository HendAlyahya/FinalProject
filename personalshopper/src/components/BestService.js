import React from 'react'
import {Card} from "react-bootstrap"

function BestService() {
    return (
<div className='Best'>
        <Card>
        <Card.Header><h1>Here are the best online personal Shopper Services to try:</h1></Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              <ul>
                <li>Best premium styling service: Dailylook</li>
                <li>Best styling service for customer service and rewards: Trunk Club</li>
                <li>Best styling service for quality basics: Frank and Oak</li>
                <li>Best plus-size styling service: Dia & Co</li>
            </ul>
              {' '}
            </p>
            
          </blockquote>
        </Card.Body>
      </Card>
         </div>
    )
}

export default BestService
