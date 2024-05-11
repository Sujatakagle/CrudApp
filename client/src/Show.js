import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Show() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getdata();
    }, []);

    const getdata = async () => {
        try {
            let resp = await fetch("http://localhost:5000/");
            let data = await resp.json();
            setData(data);
        } catch {
            console.log("error");
        }
    };

    function deletedata(id) {
        fetch(`http://localhost:5000/${id}`, {
            method: 'DELETE'
        }).then((resp) => {
            resp.json().then((result) => {
                console.log("delete");
                getdata();
            });
        });
    }

    return (
        <div className="container-fluid" style={{ backgroundColor: '#2c3e50', minHeight: '100vh' }}>
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                <h2 className="text-center mb-4 text-light" style={{ fontFamily: 'Times New Roman' }}>CRUD APP</h2>
                    <Link to="/create" className="btn btn-success mb-3">Add +</Link>
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th className="text-light">Id</th>
                                <th className="text-light">Name</th>
                                <th className="text-light">Email</th>
                                <th className="text-light">Address</th>
                                <th className="text-light">Contact</th>
                                <th className="text-light">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="text-light">{item.id}</td>
                                    <td className="text-light">{item.name}</td>
                                    <td className="text-light">{item.email}</td>
                                    <td className="text-light">{item.Address}</td>
                                    <td className="text-light">{item.Contact}</td>
                                    <td>
                                        <Link to={`/update/${item.id}`} className="btn btn-primary btn-sm me-1">Update</Link>
                                        <button onClick={() => deletedata(item.id)} className="btn btn-danger btn-sm">Delete</button>
                                       <button className="btn btn-primary btn-sm ms-1">View</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Show;
