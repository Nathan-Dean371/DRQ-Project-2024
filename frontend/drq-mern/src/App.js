import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Page1 from './components/Entry';
import Page2 from './components/Retrieval';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Welcome/>}/>  
          <Route path="/page1" element={<Page1/>}/>
          <Route path="/page2" element={<Page2/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
