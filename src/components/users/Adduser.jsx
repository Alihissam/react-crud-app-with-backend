import axios from 'axios';
import { useHistory } from 'react-router-dom'
import React, { useState } from 'react'


const Adduser = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })

    const { name, username, email, phone, website } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        history.push("/");
    }



    return (
        <div className="container">
            <div className="width-75 max-auto shadow p-5">
                <h2 className="text-center mb-4">add user</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form_group">
                        <input
                            type="text"
                            className="form_control form_control_lg"
                            placeholder="Enter your name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form_group">
                        <input
                            type="text"
                            className="form_control form_control_lg"
                            placeholder="Enter your username"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form_group">
                        <input
                            type="text"
                            className="form_control form_control_lg"
                            placeholder="Enter your email"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form_group">
                        <input
                            type="text"
                            className="form_control form_control_lg"
                            placeholder="Enter your phone"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form_group">
                        <input
                            type="text"
                            className="form_control form_control_lg"
                            placeholder="Enter your website"
                            name="website"
                            value={website}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <button className="btn btn-primary">add user</button>
                </form>
            </div>
        </div>
    )
}

export default Adduser
