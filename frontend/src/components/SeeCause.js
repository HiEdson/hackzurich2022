import React from "react";
import { useLocation } from "react-router-dom";

const SeeCauses = () => {
  const location = useLocation();

  // you will get the users values from location.state.users
  console.log(location?.state?.causes);
  return (
    <div>
      <div className="mt-5">
        <h1>Ready to change the world?</h1>
        <small>
          Based On your Experience Ou Algorithm Suggests The Following Causes
        </small>
      </div>

      <div className="container mt-5">
        <div className="row">
          {location?.state?.causes &&
            location?.state?.causes.map((cause) => (
                <div className=" col-sm-6 mb-3 d-flex align-items-stretch">
                <div
                  class="card w-100"
                  style={{ backgroundColor:"rgb(182 224 232)"}}
                >
                  <div class="card-body">
                    <h4 class="card-title">{cause.title}</h4>
                    <p class="card-text">{cause.description}</p>
                    <div className="mb-1">
                      <i class="bi bi-building"></i>
                      {cause.name}
                    <div className="badge bg-secondary" style={{marginLeft:"10px"}}>x% Match</div>
                    </div>
                    <a href="#" class="btn btn-primary">
                      Contact {cause.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SeeCauses;
