import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";

const Bmw = () => {
  return (
    <div>BMW
      <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src="https://www.cnet.com/a/img/resize/a36102324affb9ff66f7aae32e1c4ccc546d8721/hub/2022/01/26/1d161454-4b2d-49bb-9bb9-8a82a14b9daf/2023-bmw-m8-011.jpg?auto=webp&width=1200" />
      <Card.Body>
        <Card.Title>2022 M8 Competition</Card.Title>
        <Card.Text>
          Nice Car
        </Card.Text>
        <Button variant="primary">See Pricing</Button>
      </Card.Body>
    </Card>
      <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src="https://images.autotrader.com/hn/c/4bbb2198d51249de9c86637fa2293eea.jpg" />
      <Card.Body>
        <Card.Title>2021 M5</Card.Title>
        <Card.Text>
          Nice Car
        </Card.Text>
        <Button variant="primary">See Pricing</Button>
      </Card.Body>
    </Card>
      <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src="https://www.pcarmarket.com/static/media/uploads/galleries/photos/uploads/galleries/31571-shadi-bmw-grey/.thumbnails/20230705_164048.jpg/20230705_164048-tiny-2048x0-0.5x0.jpg" />
      <Card.Body>
        <Card.Title>2023 M4</Card.Title>
        <Card.Text>
          Nice Car
        </Card.Text>
        <Button variant="primary">See Pricing</Button>
      </Card.Body>
    </Card>
      <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src="https://www.auto-data.net/images/f123/BMW-X6-M-F96-LCI-facelift-2023.jpg" />
      <Card.Body>
        <Card.Title>2023 X6</Card.Title>
        <Card.Text>
          Nice SUV
        </Card.Text>
        <Button variant="primary">See Pricing</Button>
      </Card.Body>
    </Card>

      <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src="https://www.pcarmarket.com/static/media/uploads/galleries/photos/uploads/galleries/17839-sherwood-white-bmw/.thumbnails/DSC01817-Edit.jpg/DSC01817-Edit-tiny-2048x0-0.5x0.jpg" />
      <Card.Body>
        <Card.Title>2013 M3</Card.Title>
        <Card.Text>
          Very Nice Car
        </Card.Text>
        <Button variant="primary">See Pricing</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Bmw