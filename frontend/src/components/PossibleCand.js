import React from "react";
import { useLocation } from "react-router-dom";
import "./PossibleCand.css";

const PossibleCand = () => {
  const location = useLocation();

  // you will get the users values from location.state.users
  console.log(location.state.users);

  return (
    <div>
      <div className="mt-5">
        <h1>Don't Worry, Some Talented People May Help You!!</h1>
        <smal>
          These Profiles Are Selected Based On your Problem Description.
        </smal>
      </div>
      <div className="container mt-5 PossibleCand text-center w-75">
        {/* each profile starts here*/}
        {location.state.users &&
          location.state.users.map((user) => (
            <div class="card mb-4 border-0">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://hackzurich.com/media/site/20672d0c64-1658750022/hack_key_visual_2000x1000.png"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body PossibleParText">
                    <h3 class="card-title">{user.name}</h3>
                    {user.skills.slice(0, 4).map((skill) => (
                      <span class="badge rounded-pill bg-success">{skill}</span>
                    ))}
                    <br/>
                    <div className="badge bg-secondary">x% Match</div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* sample. delete this one */}
      </div>
    </div>
  );
};

export default PossibleCand;
