
import './App.css';
import Show from './Show';
import Add from './Add';
import Update from './Update';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Show />} />
          <Route path="/create" element={<Add />} />
          <Route path="/update/:id" element={<Update/>}/>     
          </Routes>
      </Router>

    </div>
  );
}

export default App;
