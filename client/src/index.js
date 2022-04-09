import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
// import oldApp from './oldApp';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>

    <App />
    {/* <oldApp /> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(

//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')

// );
