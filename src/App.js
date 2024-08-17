import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />} />
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
