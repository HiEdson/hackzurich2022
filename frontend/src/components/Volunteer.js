import axios from "axios";
import React, { useState } from "react";
import { VARIABLES } from "../variables";
import { useNavigate } from "react-router-dom";
const Volunteer = () => {
  const [vName, setvName] = useState();
  const [vEmail, setvEmail] = useState();
  const [vPassword, setvPassword] = useState();
  const [vDes, setvDes] = useState();
  const [responseLoad, setResponseLoad] = useState(false);
  const navigate = useNavigate()

  const newAcc = async () => {
    // Leon, use this function to submit the values entered by company
    let backend = VARIABLES.backend;
    setResponseLoad(true)
    try {
      const resp = await axios.post(`${backend}/users/create`, {
        name: vName,
        email: vEmail,
        password: vPassword,
        description: vDes,
      });
      if (resp.data.status == "done"){
        setResponseLoad(false)
        navigate('/seecauses', { state: { causes : resp.data.causes } })
        console.log("user created successfully");
      }
      else console.log("user not created");
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <div className="mt-5 container">
      <h1 className="mt-5">Tell us a bit about yourself</h1>
      <div className="row">
        <div className="col-sm-6">
          <div class="col-md-12">
            <label for="validationDefault01" class="form-label">
              Your Name
            </label>
            <input
              value={vName}
              type="text"
              class="form-control border-primary"
              id="validationDefault01"
              required
              onChange={(e) => {
                setvName(e.target.value);
              }}
            />
          </div>

          <div class="col-md-12">
            <label for="validationDefault01" class="form-label">
              Email
            </label>
            <input
              value={vEmail}
              type="email"
              class="form-control border-primary"
              id="validationDefault01"
              required
              onChange={(e) => {
                setvEmail(e.target.value);
              }}
            />
          </div>
          <div class="col-md-12">
            <label for="validationDefault01" class="form-label">
              Password
            </label>
            <input
              value={vPassword}
              type="password"
              class="form-control border-primary"
              id="validationDefault01"
              required
              onChange={(e) => {
                setvPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div class="">
            <label for="exampleFormControlTextarea1" class="form-label">
              tell us a bit about your professional life
            </label>
            <textarea
              value={vDes}
              class="form-control border-primary"
              id="exampleFormControlTextarea1"
              rows="7"
              onChange={(e) => {
                setvDes(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-primary mt-5 w-25" onClick={newAcc}>
            <span class={responseLoad ? "spinner-border spinner-border-sm" : ""} role="status" aria-hidden="true"> </span>
            See causes that match with you
          </button>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
