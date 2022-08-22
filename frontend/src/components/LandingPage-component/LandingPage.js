import React from "react";
import Graph1 from "../1stGraph-component/Graph1";
import Graph2 from "../2ndGraph-component/Graph2";

function LandingPage() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 3
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row graph">
        <div className="col graph-1">
          <Graph1></Graph1>
        </div>
        <div className="col graph-2">
          <Graph2></Graph2>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
