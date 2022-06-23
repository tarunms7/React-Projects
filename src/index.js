import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./Components/Header"
import MainContent from './Components/MainContent';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <MainContent />
  </div>
)

// ReactDOM.render(<Header/>,document.getElementById('root'))