import { Button, Container, Table,Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function BookList() {
  let [books, setBooks] = useState([]);
  let [isDelete, setIsDelete] = useState(false);
  let [search, setSearch] = useState('');
  useEffect(() => {
    axios({
      url: "http://localhost:3000/books",
      method: "get",
      params:{
        search:search
      }
    })
      .then((res) => {
        console.log(res);
        setBooks(res.data.data);
        setIsDelete(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isDelete,search]);
  const navigate = useNavigate();
  function addBook() {
    navigate("/add/book");
  }
  function goTobookEditPage(id) {
    navigate("/edit/book/" + id);
  }
  function deleteBook(id) {
    axios({
      url: "http://localhost:3000/delete/book/" + id,
      method: "delete",
    })
      .then((res) => {
        if (res.data.success) {
          // alert("Book has been deleted successfully")

          //below method will refresh the page
          // window.location.reload(); it is not a good way to show the newdata by using refreshing
          setIsDelete(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Container>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Book Name"
          onChange={(e)=>setSearch(e.target.value)}
        />
    
      </Form.Group>
      <Button
        variant="dark"
        onClick={addBook}
        style={{ float: "right", marginBottom: "10px" }}
      >
        Add Book
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Price</th>
            <th>Publisher</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.bookName}</td>
              <td>{book.authorName}</td>
              <td>{book.price}</td>
              <td>{book.publisher}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => goTobookEditPage(book._id)}
                  size="sm"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="m-1"
                  onClick={() => deleteBook(book._id)}
                  size="sm"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
export default BookList;
