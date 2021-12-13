import React from 'react'
import { Button , Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Shop() {
    return (
        <div>
            
 <div className="styleCard">
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/v1633378322/web/WTR_SubHero_Desktop_Asset_v1.png"   width="200px" height="250px" />
  <Card.Body>
    <Card.Title>Shop For Kidz</Card.Title>
    <Card.Text>
    Here you can find children's clothing with the latest trends from different brands
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

 <Card style={{ width: '18rem'  }}>
  <Card.Img variant="top" src="https://www.c-and-a.com/marketing/c_scale,h_420,q_auto:eco,e_sharpen:70/202142/HT-Men-clothing-jackets-1.jpg "  width="200px" height="250px"/>
  <Card.Body>
    <Card.Title>Shop For Man</Card.Title>
    <Card.Text>
    Here you can find Man's clothing with the latest trends from different brands
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
 <Card style={{ width: '18rem'  }}>
  <Card.Img variant="top" src="https://i.pinimg.com/736x/d2/4b/7c/d24b7c1ed2986f8d0aa1b7e93f99f7b7.jpg" width="200px" height="250px" />
  <Card.Body>
    <Card.Title>Shop For Woman</Card.Title>
    <Card.Text>
    Here you can find Woman's clothing with the latest trends from different brands
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
        </div>
    )
}

export default Shop