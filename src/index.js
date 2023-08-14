import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  createBrowserRouter,
  Form,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import JsonData from "./data/data.json";
import { useEffect } from "react";
import { Navigation } from './components/navigation';
import Abouts from './components/about1';
import { Team } from './components/Team';
import Annual from './components/annualCooperate';
import Digital from './components/digitalMarketing';
import Uaevisa from './components/uaeVisa';
import Loans from './components/loans';
import Investment from './components/investment';
import Insurance from './components/insurance';
import Realestate from './components/realEstate';
import Banking from './components/banking';
import Business from './components/business';
import { Features } from './components/features';
import { Contact } from './components/contact';
import Terms from './components/TermsCondition';
import Privacy from './components/privacy';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/about",
    element:<Abouts/>
  },
  {
    path:"/Team",
    element:<Team/>
  },
  {
    path:"/features",
    element:<Features  />
  },
  {
    path:"/Annual-cooperate",
    element:<Annual/>
  },
  {
    path:"/Banking",
    element:<Banking/>
  },
  {
    path:"/Business",
    element:<Business/>
  },
  {
    path:"/digital-market",
    element:<Digital/>
  },
  {
    path:"/insurance",
    element:<Insurance/>
  },
  {
    path:"/investment",
    element:<Investment/>
  },
  {
    path:"/loans",
    element:<Loans/>
  },
  {
    path:"/uaevisa",
    element:<Uaevisa/>
  },
  {
    path:"/real-estate",
    element:<Realestate/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/terms-conditions",
    element:<Terms/>
  },
  {
    path:"/Privacy-policy",
    element:<Privacy/>
  },

]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
