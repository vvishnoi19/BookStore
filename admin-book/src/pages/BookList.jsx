import {FaEye ,FaTrashAlt,FaEdit} from 'react-icons/fa';
import { Button, Container, Table,Form,Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function BookList() {
  let [books, setBooks] = useState([]);
  let [isDelete, setIsDelete] = useState(false);
  let [search, setSearch] = useState('');
  let [pageNo,setPageNo]=useState(1);
  let [nop,setNop]=useState(1);
  let items = [];
  function setPage(number)
  {
    setPageNo(number);
  }
  for (let number = 1; number <=nop; number++) {
  items.push(
    <Pagination.Item key={number} onClick={()=>setPage(number)}>
      {number}
    </Pagination.Item>,
  );
}
  useEffect(() => {
    axios({
      url: "http://localhost:3000/books",
      method: "get",
      params:{
        search:search,
        page:pageNo,
        limits:3
      }
    })
      .then((res) => {
        console.log(res);
        setBooks(res.data.data);
        setNop(Math.ceil(res.data.totalCounts/3));
        setIsDelete(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isDelete,search,pageNo]);
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
    }).then((res) => {
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
  function viewBook(id)
  {
    navigate('/view/book/'+id)
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
            <th>Book Image</th>
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
              <td><img src={book.bookImage} alt="" width="30px" height="30px" /></td>
              <td>{book.bookName}</td>
              <td>{book.authorName}</td>
              <td>{book.price}</td>
              <td>{book.publisher}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => goTobookEditPage(book._id)}
                  size="sm"
                  aria-label='Edit'
                  style={{borderRadius:"50%"}}
                >
                  <FaEdit />
                </Button>
                <Button
                  variant="danger"
                  className="m-1"
                  onClick={() => deleteBook(book._id)}
                  size="sm"
                  aria-label='Delete'
                  style={{borderRadius:"50%"}}
                >
                <FaTrashAlt />
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
      <Pagination size="md"style={{display:"flex",justifyContent:"center"}}>{items}</Pagination>
    </Container>
  );
}
export default BookList;
