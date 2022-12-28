import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contactpage.css"
import ToolTip from "./ToolTip";
//import {useState} from "react"


function ContactPage() {

    const data = [{
        Name: "Lavanya",
        Designation: "Full Stack Developer",
        Company: "SD global",
        Industry: "IT Technologies",
        Email: "amireddy@gmail.com",
        PhoneNumber: "98865448899",
        Country: "IND",
    },
    {
        Name: "Lavanya",
        Designation: "Full Stack Developer",
        Company: "SD global",
        Industry: "IT Technologies",
        Email: "amireddy@gmail.com",
        PhoneNumber: "98865448899",
        Country: "IND",
    },
    {
        Name: "Lavanya",
        Designation: "Full Stack Developer",
        Company: "SD global",
        Industry: "IT Technologies",
        Email: "amireddy@gmail.com",
        PhoneNumber: "98865448899",
        Country: "IND",
    },{
        Name: "Lavanya",
        Designation: "Full Stack Developer",
        Company: "SD global",
        Industry: "IT Technologies",
        Email: "amireddy@gmail.com",
        PhoneNumber: "98865448899",
        Country: "IND",
    }

    ]

    return (


        <div className="container-fluid ">
            <div className="row">
                <div className="dashboard col-lg-2 " style={{ height: "800px", backgroundColor: "#CEF3FF", display: "flex", flexDirection: "column" }}>
                    <div className="text-center pt-3 ">
                        <h1 className="text-primary pb-3">Logo</h1>
                        <p><i className="bi bi-grid"></i>  Dashboard</p>

                        <p className="btn btn-primary"><i className="bi bi-person-lines-fill"></i>  Total Contacts</p>
                    </div>

                    <div style={{ position: "absolute", bottom: "0", left: "3%" }}>
                        <h5 className="text-center"><i className="bi bi-box-arrow-right"></i> Logout</h5>

                    </div>
                </div>
                <div className="crud shadow-lg col-lg-10 p-3  bg-body rounded">
                    <div className="row ">
                        <div className="col-sm-5  mt-2 mb-4 text-gred" style={{ color: "#454545" }}><h2><b>Total Contacts</b></h2></div>

                        <div className="col-sm-5 mt-2 mb-4 text-gred">

                            <div className="input-group">
                                <div className="form-outline">
                                    <input id="search-input" type="search" className="form-control" placeholder="Search by Email id.." />

                                </div>
                                <button id="search-button" type="button" className="btn btn-default" style={{ backgroundColor: "lightgray" }}>
                                    <i class="bi bi-search"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-sm-2  mt-2 mb-4 text-gred d-flex" >
                            <div className="admin-image full-right" style={{ paddingLeft: "50px" }}>
                                <img src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600" alt="admin" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                            </div>
                            <div className="admin-content">
                                <p className="admin-name" style={{ marginLeft: "5px" }}><span>Group8</span><br />
                                    <span>Admin</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="controls pb-3" style={{ display: "flex", width: "100%", justifyContent: "space-between", margin: "0px" }}>
                            <div className="left" style={{ display: "flex", width: "25%", justifyContent: "space-between" }}>

                                <button type="button" className="btn btn-default shadow-lg bg-body rounded" ><i className="bi bi-calendar-check"></i> Select Date</button>


                                <button type="button" className="btn btn-default shadow-lg bg-body rounded"><i className="bi bi-filter"></i> Filters</button>

                            </div>

                            <div className="right" style={{ display: "flex", width: "30%", justifyContent: "space-between" }}>

                                <button type="button" className="btn btn-default shadow-lg bg-body rounded"><i className="bi bi-trash"></i> Delete</button>


                                <button type="button" className="btn btn-default shadow-lg bg-body rounded"><i className="bi bi-arrow-down-up"></i> Import</button>
                                <button type="button" className="btn btn-default shadow-lg bg-body rounded"><i className="bi bi-upload"></i> Export</button>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="table-responsive " >
                            <table className="table table-hover ">
                                <thead>
                                    <tr style={{ backgroundColor: "#B2DFFF" }}>
                                        <th><input type="checkbox" style={{ width: "15px", height: "15px", marginRight: "5px" }} /></th>
                                        <th>Name </th>
                                        <th>| Designation</th>
                                        <th>| Company </th>
                                        <th>| Industry </th>
                                        <th>| Email</th>
                                        <th>| Phone number</th>
                                        <th>| Country</th>
                                        <th>| Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((udata) =>

                                        <tr>
                                            <td><input type="checkbox" style={{ width: "15px", height: "15px", marginRight: "5px" }} /></td>
                                            <td> {udata.Name}</td>
                                            <td> {udata.Designation}</td>
                                            <td> {udata.Company}</td>
                                            <td> {udata.Industry}</td>
                                            <td> <ToolTip>{udata.Email}</ToolTip></td>
                                            <td> {udata.PhoneNumber}</td>
                                            <td> {udata.Country}</td>
                                            <td> &nbsp;<i className="bi bi-pencil-fill"></i> &nbsp; &nbsp;<i className="bi bi-trash"></i> </td>
                                        </tr>

                                    )

                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ContactPage
