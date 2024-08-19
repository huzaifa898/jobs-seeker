import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import MainLayout from './Layout/MainLayout';
import JobsPage from './Pages/JobsPage';
import NotFoundPage from './Pages/NotFoundPage';
import JobPage ,{jobLoader} from './Pages/JobPage';
import AddJobPage from './Pages/AddJobPage';

 

function App() {
  const addJob = (newJob) => {

  }
 
 const router = createBrowserRouter(
   createRoutesFromElements(
     <Route path="/" element={<MainLayout />}>
       <Route index element={<HomePage />} />
       <Route path='/jobs' element={<JobsPage />} />
       <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
       <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
       <Route path='*' element={<NotFoundPage />} />
     </Route>
   )
 );
  return (
    <RouterProvider router={router} />
  );
}

export default App;
