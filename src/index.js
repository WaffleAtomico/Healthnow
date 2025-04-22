import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import StartPage from './pages/Startpage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Termsconditions from './pages/Termsconditions';
import Usermainpage from './pages/UserMainPage';

const router = createBrowserRouter([
  {
    path: "Healthnow/build/",
    element: <StartPage />
  },
  {
    path: "Healthnow/build/login",
    element: <Login />
  },
  {
    path: "Healthnow/build/signup",
    element: <Signup />
  },
  {
    path: "Healthnow/build/terms&conditions",
    element: <Termsconditions />
  },
  {
    path: "Healthnow/build/mainpage",
    element: <Usermainpage />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
