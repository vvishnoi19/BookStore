import React from 'react'
import {Form ,Button} from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
function BookCreateNew() {
    const navigate=useNavigate();
    let [bookName,setBookName]=useState("");
    let [authorName,setAuthorName]=useState("");
    let [shortDescription,setShortDescription]=useState("");
    let [longDescription,setLongDescription]=useState("");
    let [language,setLanguage]=useState("");
    let [price,setPrice]=useState(0);
    let [quantity,setQuantity]=useState(0);
    let [condition,setCondition]=useState("");
    let [bookStatus,setBookStatus]=useState("");
    let [publisher,setPublisher]=useState("");
    let [isbnNo,setisbnNo]=useState("");
    let [file,setFile]=useState('');
    function addBook()
    {
        let formData=new FormData();
        formData.append('bookName',bookName)
        formData.append('authorName',authorName)
        formData.append('shortDescription',shortDescription)
        formData.append('longDescription',longDescription)
        formData.append('language',language)
        formData.append('price',price)
        formData.append('quantity',quantity)
        formData.append('condition',condition)
        formData.append('bookStatus',bookStatus)
        formData.append('publisher',publisher)
        formData.append('isbnNo',isbnNo)
        formData.append('file',file)
        axios({
            url:"http://localhost:3000/add/book",
            method:"post",
            data:formData,
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }).then((res)=>{
            console.log(res)
            if(res.data.success){
                navigate('/books')
            }
           
        }).catch((err)=>{
            console.log(err)
        })
    }
    function goCancel(){
        navigate('/books');
    }
  return (
    <Form>
    <Form.Group className="mb-3">
      <Form.Label>Book Name</Form.Label>
      <Form.Control type="text" placeholder="Book Name" onChange={(e)=>setBookName(e.target.value)} />
    </Form.Group>
    

    <Form.Group className="mb-3">
      <Form.Label>Author Name</Form.Label>
      <Form.Control type="text" placeholder="Author Name"  onChange={(e)=>setAuthorName(e.target.value)} />
    </Form.Group>
  
    <Form.Group className="mb-3">
      <Form.Label>Short Description</Form.Label>
      <Form.Control as="textarea" rows={2}  onChange={(e)=>setShortDescription(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Long Description</Form.Label>
      <Form.Control as="textarea" rows={6}  onChange={(e)=>setLongDescription(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Language</Form.Label>
        <Form.Control as="select"  onChange={(e)=>setLanguage(e.target.value)}>
            <option>English</option>
            <option>Hindi</option>
           <option>Spanish</option>
           <option>Other</option>
        </Form.Control>
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" placeholder="Quantity" onChange={(e)=>setQuantity(e.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-3">
        {/* condition state */}
        <Form.Label>Firsthand or Secondhand</Form.Label>
        <Form.Check
          type="radio"
          name="condition"
          label="Firsthand"
          value="firsthand"
          onChange={(e)=>setCondition(e.target.value)}
        />
        <Form.Check
          type="radio"
          name="condition"
          label="Secondhand"
          value="secondhand"
          onChange={(e)=>setCondition(e.target.value)}
        />
    </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Book Status</Form.Label>
        <Form.Control as="select"  onChange={(e)=>setBookStatus(e.target.value)}>
          <option>Available</option>
          <option>Not Available</option>
        </Form.Control>
      </Form.Group>
    
    <Form.Group className="mb-3">
      <Form.Label>Price</Form.Label>
      <Form.Control type="text" placeholder="Price"  onChange={(e)=>setPrice(e.target.value)}/>
    </Form.Group> 
   
    <Form.Group className="mb-3">
      <Form.Label>Publisher</Form.Label>
      <Form.Control type="text" placeholder="Publisher"  onChange={(e)=>setPublisher(e.target.value)} />
    </Form.Group>
    
    <Form.Group className="mb-3">
      <Form.Label>ISBN No</Form.Label>
      <Form.Control type="text" placeholder="ISBN No"  onChange={(e)=>setisbnNo(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Select Image</Form.Label>
      <Form.Control type="file" onChange={(e)=>setFile(e.target.files[0])} />
    </Form.Group>
  
    <Button variant="dark" onClick={addBook} >Add Book</Button>
    <Button variant="danger" onClick={goCancel} style={{margin:"2px"}} >Cancel</Button>
  </Form>
   
  )
}

export default BookCreateNew
