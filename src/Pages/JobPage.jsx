import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../Compenents/Spinner'
function JobPage() {
    const {id} = useParams()
    const [job , setJob] =useState(null)
    const [loading , setLoading] = useState(true)
    useEffect(() => {
        const fetchJob = async () =>{
            try {
                const res = await fetch(`http://localhost:8000/jobs/${id}`);
                const data = await res.json();
                setJob(data);
              } catch (error) {
                console.error('Error fetching jobs:', error);
              } finally {
                setLoading(false); // Set loading to false after data is fetched or an error occurs
              }
        }
        fetchJob()
    }, [])
  return (
    loading ? <Spinner/> : (
        <h1>{job.title}</h1>
    )
  )
}

export default JobPage
