import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';






function Ferrari() {
  
  return (
    <div className='car-container'>
      <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src="https://www.topgear.com/sites/default/files/2022/03/1-Ferrari-296-GTB.jpg" />
      <Card.Body>
        <Card.Title>Ferrari 296 GTB</Card.Title>
        <Card.Text>
          Year: 2023
        </Card.Text>
        <Button variant="primary">BUY</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod/images/2021-ferrari-portofino-m-110-1621623715.jpg" />
      <Card.Body>
        <Card.Title>Ferrari Portofino</Card.Title>
        <Card.Text>
          Year: 2023
        </Card.Text>
        <Button variant="primary">BUY</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod/images/2024-ferrari-purosangue25-63ff822948d30.jpg?crop=0.660xw:0.743xh;0.144xw,0.209xh&resize=768:*" />
      <Card.Body>
        <Card.Title>Ferrari Purosangue SUV
</Card.Title>
        <Card.Text>
          Year: 2024
        </Card.Text>
        <Button variant="primary">BUY</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src="https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/oafd4pihv2n3nsvh103l" />
      <Card.Body>
        <Card.Title>Ferrari Roma</Card.Title>
        <Card.Text>
          Year: 2023
        </Card.Text>
        <Button variant="primary">BUY</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src="https://cdn.motor1.com/images/mgl/vk0PQ/s3/ferrari-lineup-pricing.jpg" />
      <Card.Body>
        <Card.Title>Ferrari F8 Tributo</Card.Title>
        <Card.Text>
          Year: 2021
        </Card.Text>
        <Button variant="primary">BUY</Button>
      </Card.Body>
    </Card>

</div>
  )
}

export default Ferrari