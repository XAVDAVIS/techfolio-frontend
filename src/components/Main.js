import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Explore from "../pages/Explore";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import New from "../pages/New";
import Show from "../pages/Show";
import Edit from "../pages/Edit";

function Main(props){
  return (
    <Routes>
      <Route 
        path='/'
        element={<Index />}
      />
      <Route 
        path='/explore'
        element={<Explore />}
      />
      <Route 
        path='/login'
        element={<Login />}
      />
      <Route 
        path='/registration'
        element={<Registration />}
      />
      <Route 
        path='/portfolio/new'
        element={<New />}
      />
      <Route 
        path='/portfolio/:id'
        element={<Show />}
      />
      <Route 
        path='/portfolio/:id/edit'
        element={<Edit />}
      />
    </Routes>
  )
} 

export default Main;