import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import Carousel1 from './Carousel1';


const PracticeForm = () => {

    let history = useHistory()


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [photo, setPhoto] = useState('');
  const [birthday, setBirthday] = useState('');
  const [userList, setUserList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

//instead of doing the useState hook for an object I just did this here, which I think will work better. Try it and tell me
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      photo: photo,
      birthday: birthday,
    };
    
    setUserList([...userList, newUser]);
    console.log(userList);
  
    setFirstName(""),
    setLastName(""),
    setBirthday("")
    fetchFoxImg()

    history.push("/carousel1")
  };

  const fetchFoxImg = async () => {
    let response = await fetch('https://randomfox.ca/floof/');
    let data = await response.json();
    setPhoto(data.image);
    console.log(data);
    
  };



  return (
    <div>
        <div className='mainFormContainer'>
        <h1>Foxy Users</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBirthday">
          <Form.Label>Birthday</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter your birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
</div>
      
      <Carousel1 userList={userList}/>
      
    </div>
  );
};

export default PracticeForm;





//if you want
//keys are the emails for the person.









