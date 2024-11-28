import React, { useState,useEffect } from 'react';
import { useNavigate ,useParams} from 'react-router-dom';
import axios from 'axios';
import {Form,Button} from 'react-bootstrap'
function ViewPage() {
    const navigate=useNavigate();
   
    let[book,setBook]=useState({
        bookName:'',
        authorName:'',
        shortDescription:'',
        longDescription:'',
        language:'',
        price:0,
        quantity:0,
        condition:'',
        bookStatus:'',
        publisher:'',
        isbnNo:'',
        file:''
    });
    let params=useParams();
    let id=params.id;
    useEffect(()=>{
        axios({
            url:'http://localhost:3000/view/book/'+id,
            method:'get'
        }).then((res)=>{
            console.log(res.data);
            setBook(res.data.data);
        }).catch((err)=>{
            console.log(err.meessage);
        })
    },[params]);
    function goBack()
    {
        navigate('/books');
    }

  return (
    <Form>
    <Form.Group className="mb-3">
      <Form.Label>Book Name</Form.Label>
      <Form.Control type="text" placeholder="Book Name" value={book.bookName} disabled/>
    </Form.Group>
    

    <Form.Group className="mb-3">
      <Form.Label>Author Name</Form.Label>
      <Form.Control type="text" placeholder="Author Name" value={book.authorName} disabled/>
    </Form.Group>
  
    <Form.Group className="mb-3">
      <Form.Label>Short Description</Form.Label>
      <Form.Control as="textarea" rows={2} value={book.shortDescription} disabled/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Long Description</Form.Label>
      <Form.Control as="textarea" rows={6} value={book.longDescription} disabled/>
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Language</Form.Label>
        <Form.Control as="select" value={book.language} disabled>
            <option>English</option>
            <option>Hindi</option>
           <option>Spanish</option>
           <option>Other</option>
        </Form.Control>
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" placeholder="Quantity" value={book.quantity} disabled  />
      </Form.Group>

      <Form.Group className="mb-3">
        {/* condition state */}
        <Form.Label>Firsthand or Secondhand</Form.Label>
        <Form.Check
          type="radio"
          name="condition"
          label="Firsthand"
          value="firsthand"
          checked={book.condition==='firsthand'}
          disabled
         
        />
        <Form.Check
          type="radio"
          name="condition"
          label="Secondhand"
          value="secondhand"
          checked={book.condition==='secondhand'}
          disabled
          
        />
    </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Book Status</Form.Label>
        <Form.Control as="select" value={book.bookStatus} disabled>
          <option>Available</option>
          <option>Not Available</option>
        </Form.Control>
      </Form.Group>
    
    <Form.Group className="mb-3">
      <Form.Label>Price</Form.Label>
      <Form.Control type="text" placeholder="Price" value={book.price} disabled/>
    </Form.Group> 
   
    <Form.Group className="mb-3">
      <Form.Label>Publisher</Form.Label>
      <Form.Control type="text" placeholder="Publisher" value={book.publisher} disabled />
    </Form.Group>
    
    <Form.Group className="mb-3">
      <Form.Label>ISBN No</Form.Label>
      <Form.Control type="text" placeholder="ISBN No" value={book.isbnNo} disabled />
    </Form.Group>

    <Form.Group className="mb-3">
  <Form.Label>Select Image</Form.Label>
  <div>
    {book.bookImage ?(
        <img src={book.bookImage} alt="Book cover" width="150" height="150"/>
    ):(
        <p>No image available</p>
    )}
  </div>
  
   </Form.Group>
  
    <Button variant="dark" onClick={goBack} >Back</Button>
  </Form>
   
  )
}

export default ViewPage
