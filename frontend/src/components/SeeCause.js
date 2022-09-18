import React from "react";
import { useLocation } from 'react-router-dom';

const SeeCauses=()=>{
    const location = useLocation();
    
    // you will get the users values from location.state.users
    console.log(location?.state?.causes)
    return(
        <div>
            <div className="mt-5">
                <h1>Ready to change the world?</h1>
                <small>Based On your Experience Ou Algorithm Suggests The Following Causes</small>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6">
                        <div class="card w-100" style={{ backgroundColor: "rgb(182 224 232)" }}  >
                            <div class="card-body">
                                <h4 class="card-title">Card title</h4>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <div><i class="bi bi-building"></i>Company name</div>
                                <a href="#" class="btn btn-primary">Contact company</a>
                            </div>
                        </div>
                    </div>

                    <div className=" col-sm-6">
                        <div class="card w-100" style={{ backgroundColor: "rgb(182 224 232)" }}  >
                            <div class="card-body">
                                <h4 class="card-title">Card title</h4>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.
                                    With supporting text below as a natural lead-in to additional content.
                                    With supporting text below as a natural lead-in to additional content.
                                    </p>
                                <div><i class="bi bi-building"></i>Company name</div>
                                <a href="#" class="btn btn-primary">Contact company</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeeCauses;