import React from 'react'
import { toast } from 'react-toastify';


const Dashboard = () => {
  const clickTo = async () => {
    fetch('http://localhost:1010/api/all', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authentication": JSON.stringify(localStorage.getItem('token'))
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log('data::: ', data);
        toast.warn("Wow so easy!");
      })
      .catch(err => console.log('err::: ', err))
  }
  return (
    <div>
      <button onClick={ clickTo }>Click-To</button>
    </div>
  )
}

export default Dashboard
