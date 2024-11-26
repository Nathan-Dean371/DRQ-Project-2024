import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Welcome/>}/>  
        </Routes>
      </Router>
      
      
      
      
    </div>
  );
}

export default App;
