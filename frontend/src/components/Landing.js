import React from "react";
import LandingImg from '../81.jpg'
import './Landing.css'
import {Link} from 'react-router-dom'
const Landing =()=>{

    return(
        <div className='landing container'>
            <div className='row'>
                <div className='col-sm-5 landingTextDiv'>
                    <h1>Matching Problems
                        with  solutions.</h1>
                    <div className="row mt-5">
                        <div className="col-sm-6 align-items-center">
                            <h3 className="align-middle">Need Some Help?</h3>
                            <small>Give us some detail about the problem and we will connect your with talented volunteers</small>
                            <br/>
                            <Link to={'/organization'}><button className="btn btn-primary">Find helpers</button></Link>
                        </div>
                        <div className="col-sm-6 align-items-center">
                            <h3>Want to volunteer?</h3>
                            <small>Tell us about your experience and we will match you with great causes</small>
                            <br/>
                            <Link to={'/volunteer'}><button className="btn btn-primary">Join causes</button></Link>
                        </div>
                    </div>
                </div>

                <div className='col-sm-7 landingImgDiv'>
                    <img src={LandingImg} />
                </div>
            </div>
        </div>
    )
}
export default Landing;