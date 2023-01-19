import { Route, Routes } from "react-router-dom";
import Explore from "../pages/Explore";
import { useEffect, useState } from "react";

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

	const getPortfolio = async () => {
		const response = await fetch(url);
		const data = await response.json();
		setPortfolio(data);
	};

	useEffect(() => {
		getPortfolio();
	}, []);

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
        element={<div className="portfolioDisplay"><Explore portfolio={portfolio}/></div>}
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
