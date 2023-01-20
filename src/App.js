import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";


function App() {
  const [user, setUser] = useState(null)

useEffect(()=> {
  const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user))
  return () => {
    unsubscribe()
  }
})


  return (
    <div className="App">
      <Header user={user} />
      <Main user={user} setUser={setUser}/>
      <Footer />
    </div>
  );
}

export default App;
