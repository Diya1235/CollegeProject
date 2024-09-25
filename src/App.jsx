

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/auth/Login.jsx';

import Home from './components/Home.jsx';
import Sign from './components/auth/Sign.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Sign/>
  },
  {
    path:'/findprojects',
    element:<Projects/>
  },
  {
    path:'/resume',
    element:<Resume/>
  }
] 
)

function App() {
  

  return (
    <>
     <RouterProvider router = {appRouter}/>
      
    </>
  )
}

export default App
