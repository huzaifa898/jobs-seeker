import React from 'react'
import Hero from '../Compenents/Hero'
import HomeCard from '../Compenents/HomeCard'
import Joblistings from '../Compenents/JobListings'
import VeiwAllJobs from '../Compenents/VeiwAllJobs'
function HomePage() {
  return (
    <div>
      <Hero title='Become A React developer' subtitle='Find Your Own Job'/>
      <HomeCard/>
      <Joblistings/>
      <VeiwAllJobs/>
    </div>
  )
}

export default HomePage
