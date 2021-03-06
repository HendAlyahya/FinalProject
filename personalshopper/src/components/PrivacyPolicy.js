import React from 'react'
import {Card} from "react-bootstrap"


function PrivacyPolicy() {
    return (
        <div className='Privacy'>
            <Card>
        <Card.Header><h1>Privacy Policy:</h1></Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
When you use the Your Personal Shopper service, as part of the shipping, importing, exporting, 
and buying and/or selling process, we collect the personal information you give us such as your name, 
address and email address. When you browse our website or associated entities or DBAs,
 we also automatically receive your computer’s internet protocol (IP) address in order to provide us 
 with information that helps us learn about your browser and operating system. We may send you emails about our website, 
 market place, new products, promotions and other updates.

              {' '}
            </p>
            
          </blockquote>
        </Card.Body>
      </Card>
        </div>
    )
}

export default PrivacyPolicy
