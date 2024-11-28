import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import BookCreate from './pages/BookCreate'
import BookCreateImg from './pages/BookCreateImg'
import BookCreateNew from './pages/BookCreateNew'
import Dashboard from './pages/DashBoard'
import BookList from './pages/BookList'
import Login from './pages/Login'
import Slidebarmenu from './Sidebarmenu'
import BookEdit from './pages/BookEdit'
import ViewPage from './pages/ViewPage'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Slidebarmenu>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        {/* <Route path='/add/book' element={<BookCreateImg></BookCreateImg>}></Route> */}
        <Route path='/add/book' element={<BookCreateNew></BookCreateNew>}></Route>
        <Route path='/books' element={<BookList></BookList>}></Route>
        <Route path='/edit/book/:id' element={<BookEdit></BookEdit>}></Route>
        <Route path='/view/book/:id' element={<ViewPage></ViewPage>}></Route>
      </Routes>
      </Slidebarmenu>
      </BrowserRouter>

    </div>
  
  )
}
export default App
