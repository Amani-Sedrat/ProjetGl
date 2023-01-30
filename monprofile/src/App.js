import {BrowserRouter as Router, Route ,Routes   }from "react-router-dom" ;
import './App.css';

import Monprofile from './monprofile/Monprofile';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        
      <Route exact path='/'  element={<Monprofile/>} />
    

      </Routes>
      </Router>


    </div>
  );
}

export default App;


