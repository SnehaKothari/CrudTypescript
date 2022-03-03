import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserProps} from '../Pages/User';


interface HomeProps{
    users:UserProps[];
}

const Home = () => {
const[users,setUser]=useState<UserProps[]>([]);
  useEffect(() => {
    loadUsers();
  }, []);

const loadUsers=async()=>{
const res=await axios.get("http://localhost:3003/users");
    setUser(res.data);
}
const deleteUserData=async(user:UserProps)=>{
await axios.delete(`http://localhost:3003/users/${user.id}`)
    loadUsers();
  }
  
return(
      <div className="container">
      <div className="py-4">
        <h1>User Details</h1>
       
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
               <tr>
              <th scope="row">{index+1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
   <Link to={`editusers/${user.id}`}><button className='btn btn-primary' >Edit</button></Link>    
   <button className='btn btn-danger mx-3' onClick={()=>{deleteUserData(user)}}>Delete</button>    
   <Link  to={`users/${user.id}`}><button className="btn btn-primary mr-2">View</button> </Link>

               </td>
              </tr>
                
            )
            )
            }
              
          </tbody>
        </table>
        
      </div>
    </div>
    )
}

export default Home;
