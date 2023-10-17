import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Color} from './components/color';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Color color1="#fe0000" color2="#00ff00"  color3="#0000fe" color4="#ffff00" color5="#fe00fe" color6="#00ffff" color7="#fea500" color8="#81007f" color9="#ffc0cb" color10="#008000" color11="#fe6347" color12="#00cfd1" color13="#8b4413" color14="#ff8b00" color15="#4683b4" color16="#fed700"></Color>
  );
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
