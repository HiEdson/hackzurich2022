import React, { useState } from "react";




const Volunteer = () => {

    const [vName, setvName] = useState()
    const [vEmail, setvEmail] = useState()
    const [vPassword, setvPassword] = useState()
    const [vDes, setvDes] = useState()

    const newAcc =()=> {

        // Leon, use this function to submit the values entered by company

    }

    return (
        <div className="mt-5 container">
            <h1 className="mt-5">Tell us a bit about yourself</h1>
            <div className="row">
                <div className="col-sm-6">
                    <div class="col-md-12">
                        <label for="validationDefault01" class="form-label">Your Name</label>
                        <input type="text" class="form-control border-primary" id="validationDefault01" required onChange={(e)=>{setvName(e.target.value)}}/>
                    </div>

                    <div class="col-md-12">
                        <label for="validationDefault01" class="form-label">Email</label>
                        <input type="email" class="form-control border-primary" id="validationDefault01" required onChange={(e) => {setvEmail(e.target.value) }} />
                    </div>
                    <div class="col-md-12">
                        <label for="validationDefault01" class="form-label">Password</label>
                        <input type="password" class="form-control border-primary" id="validationDefault01" required onChange={(e) => {setvPassword(e.target.value) }} />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="">
                        <label for="exampleFormControlTextarea1" class="form-label">tell us a bit about your profissional life</label>
                        <textarea class="form-control border-primary" id="exampleFormControlTextarea1" rows="7" onChange={(e) => { setvDes(e.target.value) }}>
                        </textarea>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary mt-5 w-25" onClick={newAcc}>See causes that match with you</button>
                </div>
            </div>
        </div>
    )
}

export default Volunteer;