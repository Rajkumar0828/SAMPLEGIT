
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';
// import EmpLogin from './EmpLogin';
function App() {
  
  return (
    <div className="App">

<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">RELEVANTZ PHRMACEUTICAL</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
 


       {/* <h1>React JS CRUD Operation</h1> */}
      <BrowserRouter>
     <Routes>
     {/* <Route path='/' element={<EmpLogin/>}>   </Route> */}
     <Route path='/' element={<EmpListing/>}>   </Route>
     <Route path='/employee/create' element={<EmpCreate />}></Route>
     <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
     <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
     
   </Routes>
  </BrowserRouter>
    </div>
  );
  
}

export default App;
