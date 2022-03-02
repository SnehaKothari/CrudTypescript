import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserProps } from "./User";

export const EditUser=()=>{
    const history = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    });
    
    const {name, username, email } = user;
    const loadUserdata = async () => {
    const response = await axios.get(`http://localhost:3003/users/${id}`)
    setUser(response.data)}
    useEffect(() =>{loadUserdata()},[]);
    
    const onInputChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
    setUser({ ...user, [e.target.name]: e.target.value });    
    };

    const addDetail = async (user:UserProps) => {
    await axios.put(`http://localhost:3003/users/${user.id}`,user)
    history('/')
    }
  
    
    return (
    <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit A User</h2>
          <form>
               <div className="form-group">
               <input
                type="text"
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
                onChange={e => onInputChange(e)}
                />
                </div>
                <div className="form-group">
                <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={email}
                onChange={e => onInputChange(e)}
                />
               </div> 
    <Link to={'./'}><button className="btn btn-warning btn-block margin:3" onClick={()=>{addDetail(user)}}>Update User</button></Link>
          
           </form>
        </div>
      </div>
    )
}

export default EditUser;