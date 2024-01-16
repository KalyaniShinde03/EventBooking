import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    
      <div>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/bookingform">BookingForm</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/master">Master</Link>
                    </li>
                   
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Header;