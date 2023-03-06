import React from 'react'
const AddRoom = () => {
  return (
    <div>
       
        <form method='post' >
         <h2>Add Hotel</h2>
            <input type='text' placeholder='Title' name="title"/>
            <input type='text' placeholder='Desrciption'  name="desc"/>
            <input type='number' placeholder='Max People' name="maxPeople"/>
            <input type='number' placeholder='Price' name="price"/>
            <input type='number' name="roomNumbers" placeholder="room Numbers"/>
            <input type='date' />
           <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default AddRoom