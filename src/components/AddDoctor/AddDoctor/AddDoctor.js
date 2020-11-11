import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    // handle name and gmail ------------------------/
    const [info, setInfo] = useState({});
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    // handle file image -----------------------/
    const [file, setFile] = useState(null);
    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    };

    // handle form Submit----------------/
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        fetch('http://localhost:5000/addDoctors', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
             .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <form onSubmit={handleSubmit}>
                    <h5 className="text_brand">Add a Doctor</h5>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                           <input type="email" class="form-control" aria-describedby="emailHelp" name="email" onBlur={handleBlur} placeholder="Enter your Email" />
                      </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                          <input type="text" class="form-control" name="name" onBlur={handleBlur} placeholder="Name" />
                     </div>
                    <div class="form-group">
                        <label for="name">Upload a image</label>
                          <input onChange={handleFileChange} type="file" class="form-control" placeholder="Picture" />
                     </div>
                     <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;