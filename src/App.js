
import './App.css';
import Hero from './Compenents/Hero';
import HomeCard from './Compenents/HomeCard';
import JobListings from './Compenents/JobListings';
import Navbar from './Compenents/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Hero title= 'Become Grapgic desginer' subtitle='Create your own future in graphics'/>
    <HomeCard/>
     <JobListings/>





<section className="m-auto max-w-lg my-10 px-6">
  <a
    href="jobs.html"
    className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
  >
    View All Jobs
  </a>
</section>

    </>
  );
}

export default App;
