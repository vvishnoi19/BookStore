import {BrowserRouter,Routes,Route} from 'react-router-dom'
import BookCreate from './pages/BookCreate'
import BookCreateImg from './pages/BookCreateImg'
import Dashboard from './pages/DashBoard'
import BookList from './pages/BookList'
import Login from './pages/Login'
import Slidebarmenu from './Sidebarmenu'
import BookEdit from './pages/BookEdit'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Slidebarmenu>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/add/book' element={<BookCreateImg></BookCreateImg>}></Route>
        <Route path='/books' element={<BookList></BookList>}></Route>
        <Route path='/edit/book/:id' element={<BookEdit></BookEdit>}></Route>
      </Routes>
      </Slidebarmenu>
      </BrowserRouter>

    </div>
  
  )
}
export default App
