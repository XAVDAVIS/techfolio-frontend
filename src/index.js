import React from "react";
import ReactDOM from "react-dom";
// IMPORT SCSS FILE TO BE SOURCE OF STYLING
import "./styles.scss";
// IMPORT ROUTER
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
<<<<<<< HEAD
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
=======
  <React.StrictMode>
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  </React.StrictMode>
>>>>>>> 1605afc7b9c0ece835f1ee49f4909807885bdc83
);

reportWebVitals();
