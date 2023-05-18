import React from "react";
import "./main.css";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { NavLink, json } from "react-router-dom";

const VendorCard = ({ vendorName, bankName, bankAccountNumber, el }) => {
  const deleteVendor = (id) => {
    const delAlert = window.confirm("Are you sure want to delete");
     
      
      if (delAlert) {
        var requestOptions = {
          method: "DELETE",
          redirect: "follow",
        };

        fetch(`http://localhost:8088/api/v3/app/vendor/${id}`, requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
              .catch((error) => console.log("error", error));
          window.location.reload();
      }
    
  };

  return (
    <div className="vcards">
      <p>{vendorName}</p>
      <p>{bankName}</p>
      <p>{bankAccountNumber}</p>
      <div
        onClick={() => {
          deleteVendor(el.uid);
        }}
      >
        {<MdDelete />}
      </div>
          <div onClick={() => {
              localStorage.setItem("update",JSON.stringify(el))
      }}>
        <NavLink to="/updateVendor" >{<BiEdit />}</NavLink>
      </div>
    </div>
  );
};

export default VendorCard;
