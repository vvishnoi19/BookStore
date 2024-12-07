import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function Login() {
  let [show, setShow] = useState(true);
  let [login, setLogin] = useState(true);
  let [signup, setSignUp] = useState(false);
  let [title, setTitle] = useState("Login");
  let [user, setUser] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    password: "",
  });
  let [confirmPassword, setConfirmPassword] = useState("");
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function handleClose() {
    setShow(false);
    window.location.reload();
  }
  function showSignUpModal() {
    setLogin(false);
    setTitle("Signup");
    setSignUp(true);
  }
  function addUser() {
    if (user.password != confirmPassword) {
      alert("password doesn't match");
    } else {
      axios({
        url: "http://localhost:3000/add/user",
        method: "post",
        data: user,
      })
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            alert("sign has been success fully done");
            setLogin(true);
            setSignUp(false);
          }
        })
        .catch((err) => {
          console.log(err.message);
          alert(err.response.data.message);
          handleClose();
        });
    }
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Title style={{ marginLeft: "5px" }}>{title}</Modal.Title>
      <Modal.Body>
        {login && (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
              <Button variant="dark">Login</Button>
              <p>
                Do you have account?{" "}
                <span style={{ marginLeft: "13px" }} onClick={showSignUpModal}>
                  Sign Up
                </span>
              </p>
            </Form.Group>
          </Form>
        )}
        {signup && (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control
                type="text"
                name="mobileNo"
                placeholder="Enter Mobile No"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Enter Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button variant="dark" onClick={addUser}>
                Signup
              </Button>
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default Login;
