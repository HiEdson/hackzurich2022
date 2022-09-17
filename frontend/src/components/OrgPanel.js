import React, { useState } from "react";
import './OrgPanel.css'
const Organization =()=>{
    const [openForm, setOpenForm] = useState(false)
    const [causeTitle, setCauseTitle] = useState()
    const [causeDes, setCauseTDes] = useState()




    const newCauseForm = openForm?<div>
        <div class="mb-3">
            <label for="hackz" class="form-label">How do you want to call it</label>
            <input type="text" class="form-control" id="hackz" onChange={(e)=>{setCauseTitle(e.target.value)}} placeholder="English teacher for a NGO school"/>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>{setCauseTDes(e.target.value)}}></textarea>
        </div>
    </div>:<span></span>

    return(
        <div>
            <div className=" text-center" style={{ width: "700px", marginLeft: "23%" }}>
                <h1 className="mt-5 text-middle">Just tell us the problem, AI will do the rest</h1>
                <p>We use the power of Artificial Intelligence to better understand the problem and connect it to the best volunteers</p>

                <button className="btn btn-primary" onClick={() => { setOpenForm(!openForm)}}>PUBLISH A NEW CAUSE</button>
                {newCauseForm}
            </div>
            <div className="PrevCause container mb-5">
                <h2>Previous Causes</h2>
                <div className="row">
                    <div className="col-sm-4">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src="https://img.freepik.com/free-photo/group-happy-diverse-volunteers_53876-13554.jpg?w=900&t=st=1663419702~exp=1663420302~hmac=e384ecf8835e24cb03ff01ff09c041cb0de50b57d38d297524918f706e3b095a" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src="https://img.freepik.com/free-photo/group-happy-diverse-volunteers_53876-13554.jpg?w=900&t=st=1663419702~exp=1663420302~hmac=e384ecf8835e24cb03ff01ff09c041cb0de50b57d38d297524918f706e3b095a" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src="https://img.freepik.com/free-photo/group-happy-diverse-volunteers_53876-13554.jpg?w=900&t=st=1663419702~exp=1663420302~hmac=e384ecf8835e24cb03ff01ff09c041cb0de50b57d38d297524918f706e3b095a" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Organization;