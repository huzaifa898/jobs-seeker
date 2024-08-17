import { Outlet } from 'react-router-dom';
import Navbar from '../Compenents/Navbar'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  );
};
export default MainLayout;