import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateUser = () => {
    const navigate=useNavigate()
    const data=useLoaderData()
    console.log(data);
    const handelUpdateFromData=(event)=>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        console.log(name,email);
        const updatedUser={
            name,
            email
        }
        fetch(`http://localhost:5000/users/${data._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.modifiedCount) {
                alert("User Update Successfully")
                navigate('/user')
            }
        })

    }
    return (
        <div>
            <h1>Update User Info </h1>
            <form onSubmit={handelUpdateFromData} className='formStyle'>
                <input className='inputStyle' defaultValue={data?.name} type="text" name="name" id="" placeholder='Client Name' />
                <input className='inputStyle' defaultValue={data?.email} type="email" name="email" id="" placeholder='Client Email' />
                <button type="submit">Update Now</button>
            </form>
        </div>
    );
};

export default UpdateUser;