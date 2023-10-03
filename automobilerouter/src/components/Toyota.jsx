import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const Toyota = () => {
  return (
    <div>
        <h1>Toyota</h1>
        <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src="https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2023/rav4hybrid/hybridxse/4530/2vv/36/5.png?fm=png&w=930&q=90'/" />
      <Card.Body>
        <Card.Title>Rav4 Hybrid (2023)</Card.Title>
        <Button variant="primary">BUY</Button>
      </Card.Body>
      
    </Card>

        <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src="https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2024/tundra/limited/8252/8x8/36/32.png?fm=webp&w=930&q=90'/" />
      <Card.Body>
        <Card.Title>Tundra (2024)</Card.Title>
        <Button variant="primary">BUY</Button>
      </Card.Body>
      
    </Card>

        <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src="https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2024/corolla/le/1852/1f7/36/5.png?fm=webp&w=930&q=90" />
      <Card.Body>
        <Card.Title>Corolla (2024)</Card.Title>
        <Button variant="primary">BUY</Button>
      </Card.Body>
      
    </Card>

        <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src="https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2024/camry/xse/2548/2pt/36/31.png?fm=webp&w=930&q=90" />
      <Card.Body>
        <Card.Title>Camry (2024)</Card.Title>
        <Button variant="primary">BUY</Button>
      </Card.Body>

    </Card>

        <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src="https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2023/toyotacrown/platinum/4030/2yz/36/5.png?fm=png&w=930&q=90" />
      <Card.Body>
        <Card.Title>Toyota Crown (2024)</Card.Title>
        <Button variant="primary">BUY</Button>
      </Card.Body>

    </Card>
  

    </div>
  )
}

export default Toyota