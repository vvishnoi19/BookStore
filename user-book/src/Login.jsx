import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

function Login() {
  let [show, setShow] = useState(true);
  let [login,setLogin]=useState(true);
  let [signup,setSignUp]=useState(false);
  let [title,setTitle]=useState("Login");
  function handleClose(){
    setShow(false);
    window.location.reload();
  }
  function showSignUpModal(){
    setLogin(false)
    setTitle("Signup")    
    setSignUp(true)
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Title>{title}</Modal.Title>
      <Modal.Body>
        {
            login &&
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
            />
            <Button variant="dark">Login</Button>
            <p>Do you have account? <span style={{marginLeft:"13px"}} onClick={showSignUpModal}>Sign Up</span></p>
          </Form.Group>
        </Form>
}
        {
            signup &&
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mobile No</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Mobile No"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Confirm password"
            />
            <Button variant="dark">Signup</Button>
          </Form.Group>
        </Form>
}
      </Modal.Body>
    </Modal>
  );
}

export default Login;
