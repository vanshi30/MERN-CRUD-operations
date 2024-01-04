import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from 'axios'

function UpdateUser () {

    const {id} = useParams()
    const [name,setName] = useState()
    const[email,setEmail] = useState()
    const [age,setAge] = useState()
    const navigate = useNavigate()

    useEffect(()=>{ 
            axios.get('http://localhost:3001/getUser/'+id)
            .then(result => {
                console.log(result)
                setName(result.data.name)
                setEmail(result.data.email)
                setAge(result.data.age)
            })
            .catch(err => console.log(err))
    },[])

    const Update = (e) =>{
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id,{name,email,age})
        .then(result =>{
            console.log(result);
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">

            <form action="" onSubmit={Update}>
                <h2>Update User</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name" value={name}
                    onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="email" className="form-control" placeholder="Enter Email" value={email}
                    onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Age</label>
                    <input type="number" className="form-control" placeholder="Enter Age" value={age}
                    onChange={(e)=>setAge(e.target.value)}></input>
                </div>
                <button className="btn btn-success">Update</button>
            </form>
            </div>
        </div>
    )
}

export default UpdateUser;