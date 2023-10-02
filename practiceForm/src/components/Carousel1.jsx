import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const userList = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    birthday: '1990-01-01',
    photo: 'https://example.com/john.jpg',
  },
  // dummy data
];

const Carousel1 = (props) => {
  return (
    <div>
      <Carousel>
        {userList.map((user, index) => (
          <Carousel.Item key={index}>
            <Link to={`/user/${user.id}`}>
              <Card style={{ width: '300px' }}>
                <Card.Img src={user.photo} alt="User Poster" />
                <Card.Body>
                  <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {user.birthday}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousel1;





