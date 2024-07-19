import React from "react";

function NavbarV2() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="menu-icon">
          <i class="bi bi-list"></i>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/create">Add Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/files">Files</NavLink>
            </li>
            <li>
              <NavLink to="/create-event">Events</NavLink>
            </li>
            <li>
              <NavLink to="/login" >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarV2;
