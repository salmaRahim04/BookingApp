import React from 'react'
import AddHotel from '../../Components/admin/AddHotel'
import './admin.css'
const Admin = () => {
  return (
    <div className='adminPage'>
    <div className='Admin-header'>
        <h2>Admin Page</h2>
    </div>
    <div className='menu'>
        <div className='items'>
             <h3>Hotels</h3> 
             <h3>Rooms</h3> 
             <h3>Users</h3> 
            <AddHotel/> 
        </div>
    </div>
    </div>
  )
}

export default Admin