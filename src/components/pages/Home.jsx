import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom';




function Home() {


    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUsers(result.data.reverse())
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUser();
    }

    return (
        <div className="container">
            <div className="py-5">
                <table className="table border shadow">
                    <thead>
                        <tr className="bg-dark text-light">
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Emails</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((users, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{users.name}</td>
                                <td>{users.username}</td>
                                <td>{users.email}</td>
                                <td>
                                    <Link className="btn btn-primary m-2" to={`/user/${users.id}`}>View</Link>
                                    <NavLink className="btn btn-outline-primary" to={`/user/edit/${users.id}`}>Edit</NavLink>
                                    <Link className="btn btn-danger m-2" onClick={() => deleteUser(users.id)}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div >
    )
}

export default Home
