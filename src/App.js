import logo from './logo.svg';         
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleDetailed from './components/ArticleDetailed';

import Home from "./Pages/Home";
import Editor from './components/Editor';
function App() {
  return (
      <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticleDetailed />} />
        <Route path="/Editor" element={<Editor />} />
        {/* Add more routes like /write, /profile */}
      </Routes>
    </Router>
  );
}

export default App;
