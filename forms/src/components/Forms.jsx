import React, { useState } from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const FoxForm = () => {
  const [email, setemail] = useState("");
  const [name, setfirstname] = useState("");
  const [age, setage] = useState(Number);
  const [password,setpassword] = useState("");
  const [foxImage, setfoxImage] = useState('');
  const [birthmonth, setbirthmonth] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log('user entered email:', email)
  }
  
  const fetchFox = async ()=>{
    let response = await fetch('https://randomfox.ca/floof/')
    let data = await response.json()
    console.log(data)
    setfoxImage(data.image)
}

  return <div>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email" 
        value={email} 
        onChange={(e)=> setemail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-6" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Give that fox a name</Form.Label>
        <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=> setfirstname(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" value={age} onChange={(e)=> setage(e.target.value)} placeholder="Age" />
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBirthMonth">
        <Form.Label>Birth Month</Form.Label>
        <Form.Control type="string" placeholder="BirthMonth" value={birthmonth} onChange={(e)=> setbirthmonth(e.target.value)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={fetchFox}>
        GIVE ME A FOX BABY
      </Button>
    </Form>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={foxImage} />
      <Card.Body>
        <Card.Title>Email:{email}</Card.Title>
        <Card.Text>
         Name:{name}
         <br></br>
         <br></br>
         Age: {age}
         <br></br>
         Birthday:{birthmonth}
         <br></br>
         Password:{password}

        </Card.Text>
       

        
      </Card.Body>
    </Card>
  </div>;
};
 
export default FoxForm;
