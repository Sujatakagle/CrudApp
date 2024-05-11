import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Add() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [Address, setAddress] = useState("");
    const [Contact, setContact] = useState("");
    const navigate = useNavigate();

    function handleAdd(event) {
        event.preventDefault();
        const data = { id, name, email, Address, Contact };
        fetch("http://localhost:5000/create", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            resp.json().then((result) => {
                console.log(result);
                navigate("/");
            });
        });
    }

    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'gray' }}>
            <div className="card p-4">
                <h2 className="card-title text-center mb-4">Add Details</h2>
                <form onSubmit={handleAdd}>
                    <div className="mb-3">
                        <input type="number" className="form-control" placeholder="Enter ID" value={id} onChange={(e) => setId(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Enter Address" value={Address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Enter Contact" value={Contact} onChange={(e) => setContact(e.target.value)} required />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Add;
