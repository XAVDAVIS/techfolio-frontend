import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Explore from "../pages/Explore";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import New from "../pages/New";
import Show from "../pages/Show";
import Edit from "../pages/Edit";

function Main(props){
  const [user, setUser] = useState(null)
  const [portfolio, setPortfolio] = useState(null)
  const PORTFOLIO_URL = 'http://localhost:4000/portfolio/'
  const USER_URL = 'http://localhost:4000/user/'
  
  //GET
  const getUser = async () => {
    const response = await fetch(USER_URL);
    const data = await response.json();
    setUser(data);
  };
  const getPortfolio = async () => {
    const response = await fetch(PORTFOLIO_URL);
    const data = await response.json();
    setPortfolio(data);
  };

  //CREATE
  const createUser = async (user) => { //user param will be an object of key:value pairs
    await fetch(USER_URL, {
      method: 'POST',
      headers: {'Content-type': 'Application/json'},
      //set req body
      body: JSON.stringify(user),
    })
    getUser()
  }
  const createPortfolio = async (portfolio) => { //portfolio param will be an object of key:value pairs
    await fetch(PORTFOLIO_URL, {
      method: 'POST',
      headers: {'Content-type': 'Application/json'},
      //set req body
      body: JSON.stringify(portfolio),
    })
    getPortfolio()
  }

  //UPDATE
  const updateUser = async (id, updatedUser) => {
    await fetch(USER_URL + id, {
      method: 'PUT',
      headers: {'Content-type':'Application/json'},
      body: JSON.stringify(updatedUser)
    })
    getUser()
  }
  const updatePortfolio = async (id, updatedPortfolio) => {
    await fetch(PORTFOLIO_URL + id, {
      method: 'PUT',
      headers: {'Content-type':'Application/json'},
      body: JSON.stringify(updatedPortfolio)
    })
    getPortfolio()
  }

  //DELETE
  const deleteUser = async (id) => {
    await fetch(USER_URL + id, {method:'DELETE'})
    getUser()
  } 
  const deletePortfolio = async (id) => {
    await fetch(PORTFOLIO_URL + id, {method:'DELETE'})
    getPortfolio()
  } 

  useEffect(() => {
    getUser()
    getPortfolio()
  }, []);

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