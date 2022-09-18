import React, { useState } from "react";
import axios from "axios";
import { VARIABLES } from "../variables";
import "./OrgPanel.css";
import { useNavigate } from "react-router-dom";
const Organization = () => {
  const [openForm, setOpenForm] = useState(false);
  const [compName, setCompName] = useState("");
  const [compEmail, setCompEmail] = useState("");
  const [causeTitle, setCauseTitle] = useState("");
  const [causeDes, setCauseTDes] = useState("");
  const [responseLoad, setResponseLoad] = useState(false);
  const navigate = useNavigate()

  const submitCause = async () => {
    let backend = VARIABLES.backend;
    setResponseLoad(true)
    try {
      const resp = await axios.post(`${backend}/causes/create`, {
        name: compName,
        email: compEmail,
        title: causeTitle,
        description: causeDes,
      });
      if (resp.data.status == "done"){
        console.log("successfully created cause");
        setResponseLoad(false)
        console.log(resp.data.users)
        navigate('/matchuser', { state: { users: resp.data.users }})
      }
      else console.log("error occured while creating cause");
    } catch (e) {
      console.log("error", e);
    }
  };

  const newCauseForm = openForm ? (
    <div className="mb-5">
      <div className="row">
        <div class="col-md-6">
          <label for="validationDefault01" class="form-label">
            Your Organizations name
          </label>
          <input
            value={compName}
            type="text"
            class="form-control border-primary"
            id="validationDefault01"
            onChange={(e) => {
              setCompName(e.target.value);
            }}
            required
          />
        </div>
        <div class="col-md-6">
          <label for="validationDefault02" class="form-label">
            your email
          </label>
          <input
            value={compEmail}
            type="email"
            class="form-control border-primary"
            id="validationDefault02"
            onChange={(e) => {
              setCompEmail(e.target.value);
            }}
            required
          />
        </div>
      </div>
      <div class="mb-3">
        <label for="hackz" class="form-label">
          How do you want to call this problem
        </label>
        <input
          value={causeTitle}
          type="text"
          class="form-control border-primary"
          id="hackz"
          onChange={(e) => {
            setCauseTitle(e.target.value);
          }}
          placeholder="English teacher for a NGO school"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Description
        </label>
        <textarea
          value={causeDes}
          class="form-control border-primary"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(e) => {
            setCauseTDes(e.target.value);
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={submitCause}>
        <span class={responseLoad ? "spinner-border spinner-border-sm" : ""} role="status" aria-hidden="true"> </span>
        Let's solve it
      </button>
      <button
        className="btn btn-danger"
        style={{ marginLeft: "20px" }}
        onClick={() => {
          setOpenForm(!openForm);
        }}
      >
        Cancel
      </button>
    </div>
  ) : (
    <span></span>
  );

  return (
    <div>
      <div
        className=" text-center"
        style={{ width: "700px", marginLeft: "23%" }}
      >
        <h1 className="mt-5 text-middle">
          Just tell us the problem, AI will do the rest
        </h1>
        <p>
          We use the power of Artificial Intelligence to better understand the
          problem and connect it to the best volunteers
        </p>
      </div>
      <div className="container w-50">
        <button
          className={openForm ? "d-none" : "btn btn-primary"}
          onClick={() => {
            setOpenForm(!openForm);
          }}
        >
          PUBLISH A NEW CAUSE
        </button>
        {newCauseForm}
      </div>
    </div>
  );
};

export default Organization;
