import logo from './logo.svg';
import './App.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import UserProfile from './Components/UserProfile/UserProfile';
import Tasks from './Components/Tasks/Tasks';
import Records from './Components/Records/Records';
import Commits from './Components/Commits/Commits';


function App() {

  const routs = createHashRouter([
    {path:'/' , element:<Layout/> , children : [
      {index:true , element:<UserProfile/>},
      {path:'user-profile' , element:<UserProfile/> , children:[
        {index:true , element:<Tasks/>},
        {path:'tasks' , element:<Tasks/>},
        {path:'records' , element:<Records/>},
        {path:'commits' , element:<Commits/>},
      ]}
    ]}
  ])

  return <RouterProvider router={routs}></RouterProvider>
}

export default App;
