import React, { useState } from "react";
import './OrgPanel.css'
const Organization =()=>{
    const [openForm, setOpenForm] = useState(false)
    const [compName, setCompName] = useState()
    const [compEmail, setCompEmail] = useState()
    const [causeTitle, setCauseTitle] = useState()
    const [causeDes, setCauseTDes] = useState()

    const submitCause=()=>{

        // Leon, use this function to submit the values entered by company

    }


    const newCauseForm = openForm?
    <div className="mb-5">
        <div className="row">
            <div class="col-md-6">
                <label for="validationDefault01" class="form-label">Your Organizations name</label>
                <input type="text" class="form-control border-primary" id="validationDefault01" onChange={(e) => { setCompName(e.target.value) }} required />
            </div>
            <div class="col-md-6">
                <label for="validationDefault02" class="form-label">your email</label>
                <input type="email" class="form-control border-primary" id="validationDefault02" onChange={(e) => { setCompEmail(e.target.value) }} required />
            </div>
        </div>
        <div class="mb-3">
            <label for="hackz" class="form-label">How do you want to call this problem</label>
            <input type="text" class="form-control border-primary" id="hackz" onChange={(e)=>{setCauseTitle(e.target.value)}} placeholder="English teacher for a NGO school"/>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea class="form-control border-primary" id="exampleFormControlTextarea1" rows="3" onChange={(e) => { setCauseTDes(e.target.value) }} >
            </textarea>
        </div>
        <button className="btn btn-primary" onClick={submitCause}>Let's solve it</button>
        <button className="btn btn-danger" style={{marginLeft:"20px"}} onClick={()=>{setOpenForm(!openForm)}}>Cancel</button>
    </div>:<span></span>

    return(
        <div>
            <div className=" text-center" style={{ width: "700px", marginLeft: "23%" }}>
                <h1 className="mt-5 text-middle">Just tell us the problem, AI will do the rest</h1>
                <p>We use the power of Artificial Intelligence to better understand the problem and connect it to the best volunteers</p>
            </div>
            <div className="container w-50">
                <button className={openForm ? "d-none" :"btn btn-primary"} onClick={() => { setOpenForm(!openForm) }}>PUBLISH A NEW CAUSE</button>
                {newCauseForm}
            </div>
        </div>
    )
}

export default Organization;