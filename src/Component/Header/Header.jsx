import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {

  const links = [
    { path: "/", title: "Home" },
    { path: "/addVendor", title: "AddVendor"},
    { path: "/updateVendor", title: "updateVendor" }
   
  ];

  return (
    <header>
      {links.map((item, index) => (
        <NavLink to={item.path} key={index} className="link">
          <h3> {item.title}</h3>
        </NavLink>
      ))}
    </header>
  );
}

export default Header