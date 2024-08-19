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
import EditJobPage from './Pages/EditJobPage';
 

function App() {
  // add new job
  const addJob = async (newJob) => {
    const res =await fetch('http://localhost:8000/jobs',{
      method: 'POST',
      headers:{
        'Content-Type': 'appliction/json'
      },
      body: JSON.stringify(newJob),
    })
    return
  }
 // delete job
   const deleteJob = async (id) =>{
    const res =await fetch(`http://localhost:8000/jobs/${id}`,{
      method: 'DELETE'
    })
    return
   }


// update job
const updateJob = async (job) =>{
  const res =await fetch(`http://localhost:8000/jobs/${job.id}`,{
    method: 'PUT',
    headers:{
      'Content-Type': 'appliction/json'
    },
    body: JSON.stringify(job),
  })
  return
}


 const router = createBrowserRouter(
   createRoutesFromElements(
     <Route path="/" element={<MainLayout />}>
       <Route index element={<HomePage />} />
       <Route path='/jobs' element={<JobsPage />} />
       <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
       <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
       <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
       <Route path='*' element={<NotFoundPage />} />
     </Route>
   )
 );
  return (
    <RouterProvider router={router} />
  );
}

export default App;
