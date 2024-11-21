import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import {Form,Button} from 'react-bootstrap'
import axios from "axios"
function BookEdit()
{
    
    let[book,setBook]=useState({
        bookName:'',
        authorName:'',
        description:'',
        price:0,
        publisher:'',
        isbnNo:''
    });
    let params=useParams();
    let id=params.id;
    const navigate=useNavigate();
    useEffect(()=>{
        axios({
            url:'http://localhost:3000/book/'+id,
            method:'get'
        }).then((res)=>{
            console.log(res);
            setBook(res.data.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[params]);
    function handleChange(e){
        let name=e.target.name;
        let value=e.target.value;
        setBook((prev)=>{
            return{
                ...prev,[name]:value
            }
        })
    }
    function editBook(){
      axios({
        url:'http://localhost:3000/edit/book/'+id,
        method:'put',
        data:book
      }).then((res)=>{
        if(res.data.success){
            navigate('/books')
        }
      }).catch((err)=>{
        console.log(err)
      })
    }

    return(
        <Form>
        <Form.Group className="mb-3">
          <Form.Label>Book Name</Form.Label>
          <Form.Control type="text" name='bookName' value={book.bookName} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Author Name</Form.Label>
          <Form.Control type="text" name='authorName' value={book.authorName} onChange={handleChange}  />
        </Form.Group>
      
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name='description' rows={3} value={book.description} onChange={handleChange} />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" name='price' value={book.price} onChange={handleChange}/>
        </Form.Group> 
       
        <Form.Group className="mb-3">
          <Form.Label>Publisher</Form.Label>
          <Form.Control type="text" name='publisher' value={book.publisher} onChange={handleChange} />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>ISBN No</Form.Label>
          <Form.Control type="text" name='isbnNo' value={book.isbnNo} onChange={handleChange}/>
        </Form.Group>
      
        <Button variant="dark" onClick={(editBook)}>Edit Book</Button>
      </Form>
        
    )
}
export default BookEdit