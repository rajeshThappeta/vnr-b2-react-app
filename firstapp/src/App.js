import "./App.css";
import {createBrowserRouter,RouterProvider,Navigate} from 'react-router-dom'
import RootLayout from "./components/RootLayout";
import Home from './components/routing-demo-components/Home'
import Register from './components/routing-demo-components/Register';
import Login from './components/routing-demo-components/Login'
import Technologies from './components/routing-demo-components/Tech'
import Java from './components/routing-demo-components/Java'
import Nodejs from './components/routing-demo-components/Nodejs'
import Vue from './components/routing-demo-components/Vue'

function App() {


  //create BrowserRouter object
 let browserRouter=createBrowserRouter([{
  path:'',
  element:<RootLayout />,
  children:[
    {
      path:'',
      element:<Home />
    },
    {
      path:'register',
      element:<Register />
    },
    {
      path:'login',
      element:<Login />
    },
    {
      path:'technologies',
      element:<Technologies />,
      children:[
        {
          path:"java",
          element:<Java />
        },
        {
          path:"nodejs",
          element:<Nodejs />
        },
        {
          path:"vue",
          element:<Vue />
        },
        {
          path:'',
          element:<Navigate to='java' />
        }
      ]
    }
    
  ]
 }])

  return (
    <div>
      {/* Provide browserRouter object to app */}
      <RouterProvider router={browserRouter} />
    
    </div>
  );
}

export default App;
