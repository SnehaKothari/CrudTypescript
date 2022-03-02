import React, { ChangeEvent, useState } from 'react'
import {Link,useNavigate,useParams} from 'react-router-dom'
import {UserProps} from './User';
import axios from 'axios';
import {Form,Button} from 'reactstrap';

export const AddUser=()=>{
    const history = useNavigate();
    const {id} = useParams();
    const [user, setUser] = useState({
         name: "",
         username: "",
         email: "",
     });
     const {name,username,email}=user;
     const onInputChange =( e:ChangeEvent<HTMLInputElement>)=> {
     setUser({ ...user, [e.target.name]: e.target.value });
     };
     const onSubmit=async(user:UserProps)=>{
    await axios.post(`http://localhost:3003/users`,user);
    history('/')
     };

  return (
  <div className="container">
  <div className="w-75 mx-auto shadow p-5">
  <h2 className="text-center mb-4">Add A User</h2>
         <form>
            <div className="form-group">
            <input type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={onInputChange}
            />
            </div>
            <div className="form-group">
            <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Username"
            name="username"
            value={username}
            onChange={onInputChange}
            />
           </div>
           <div className="form-group">
           <input
           type="email"
           className="form-control form-control-lg"
           placeholder="Enter Your E-mail Address"
           name="email" 
           value={email}
           onChange={ onInputChange}
           />
           </div>
    <Link to={'/'}>   
    <button className='my-2 btn btn-primary' onClick={()=>onSubmit(user)} type='submit'>Add User</button> </Link>    
    </form>
</div>
</div>
  )
}

export default AddUser;
