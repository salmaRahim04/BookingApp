import {useState} from 'react';
import { useDispatch} from 'react-redux';
import { RMIUploader } from "react-multiple-image-uploader";

import {addHotel} from '../../actions/hotels';
const AddHotel = () => {
  const dispatch = useDispatch();
  const [postData,setPostData] = useState({
    name:'',type:'',title:'',selectedFile:'',city:'',address:'',desc:''
 })
 const handleSubmit = (e) =>{
  e.preventDefault()
      dispatch(addHotel({...postData}));
   }
 console.log(postData);
  return (
    <div>
        <form className='form' method='post' onSubmit={handleSubmit} >
        <h2 className='formtitle'>Add Hotel</h2>
            <input className='input'  type='text' placeholder='Name' name="name" value={postData.name} onChange={e=> setPostData({...postData,name:e.target.value})}/>
            <input className='input' type='text' placeholder='Type'  name="type" value={postData.type} onChange={e=> setPostData({...postData,type:e.target.value})}/>
            <input className='input' type='text' placeholder='Title' name="title" value={postData.title} onChange={e=> setPostData({...postData,title:e.target.value})}/>
            <input className='input' type='text' placeholder='City' name="city" value={postData.city} onChange={e=> setPostData({...postData,city:e.target.value})}/>
            <input className='input' type='text' name="Address" placeholder="address" value={postData.address} onChange={e=> setPostData({...postData,address:e.target.value})}/>
            <input className='input' type='file' name="photos"  value={postData.photos} onChange={e=> setPostData({...postData,selectedFile:e.target.value})}/>
            <input className='input' type='text' name="Description" placeholder='Description' value={postData.desc} onChange={e=> setPostData({...postData,desc:e.target.value})}/>
            <button className='addbtn'>Add</button>
        </form>
    </div>
  )
}

export default AddHotel