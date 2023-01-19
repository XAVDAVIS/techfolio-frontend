import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <Header user={user} />
      <Main user={user} setUser={setUser}/>
      <Footer />
    </div>
  );
}

export default App;
