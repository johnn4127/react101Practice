import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

import { useEffect } from 'react';





const Carousel1 = ({userList}) => {


  useEffect(()=>{
    console.log(userList)
  },[userList]) 

  
  return (
    <div>
      <Carousel>
        {userList && userList.map((user, index) => (
          <Carousel.Item key={index}>
            
              <Card style={{ width: '300px' }}>
                <Card.Img src={user.photo} alt="User Poster" />
                <Card.Body>
                  <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {user.birthday}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
           
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousel1;





