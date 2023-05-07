/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    const loaderdata=useLoaderData()
    const [users,setusers]=useState(loaderdata)
    const handelUserDellet=(id)=>{
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.deletedCount===1) {
                const remainingUsers=users.filter(user=>user._id!==id)
                setusers([...remainingUsers])
                alert('DELLETED THIS USER' )
            }
            console.log(data)
        })
    }
    return (
        <div>
            <h1>This is user{users.length}</h1>
            <div className='styleFetchData'>
                {
                    users && users.map(user => <div className='styleNow' key={user._id}>
                       <div className='infoStyle'>
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                       </div>
                        <Link to={`/user/${user._id}`}><button>Update</button></Link>
                        <button onClick={() => handelUserDellet(user._id)}>X</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default User;