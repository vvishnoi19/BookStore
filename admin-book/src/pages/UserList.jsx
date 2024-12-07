import { useEffect, useState } from "react";
import {FaEye ,FaTrashAlt,FaEdit} from 'react-icons/fa';
// import { useNavigate } from "react-router-dom"
import {Button,Container, Table } from "react-bootstrap";
import axios from "axios";
function UserList() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:3000/users",
      method: "get",
    })
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function goToUserEditPage(id){
    alert(id)

  }
  return (
    <Container>
      <Table striped bordered hover className="mt-2">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.mobileNo}</td>
              <td>{user.status}</td>
              <td> <Button
                  variant="primary"
                  onClick={() => goToUserEditPage(user._id)}
                  size="sm"
                  aria-label='Edit'
                  style={{borderRadius:"50%"}}
                >
                  <FaEdit />
                </Button>
                <Button
                  variant="success" 
                  className="m-1"
                  onClick={() => viewBook(book._id)}
                  size="sm"
                  aria-label='View'
                  style={{borderRadius:"50%"}}
                >
                  <FaEye/>
                </Button>
                
                
                </td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Container>
  );
}
export default UserList;
