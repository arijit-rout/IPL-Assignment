import React from "react";
import Graph1 from "../1stGraph-component/Graph1";
import Graph2 from "../2ndGraph-component/Graph2";

function LandingPage() {
    return(
        <div >
            <nav class="navbar navbar-expand-sm bg-light">

                <div class="container-fluid">
                
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 1</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 2</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 3</a>
                    </li>
                </ul>
                </div>

            </nav>
            <div className="row graph">
                <div className="col graph-1"><Graph1></Graph1></div>
                <div className="col graph-2"><Graph2></Graph2></div>
            </div>
        </div>
    );
    
}
export default LandingPage;