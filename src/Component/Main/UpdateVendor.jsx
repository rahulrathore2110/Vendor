import React, { useState } from "react";
import "./main.css";
const UpdateVendor = () => {
  const userData = JSON.parse(localStorage.getItem("update"));

  const [uid, setUid] = useState(userData.uid);
  const [vendorName, setvendorName] = useState();
  const [bankAccountNumber, sebankAccountNumber] = useState();
  const [bankName, setbankName] = useState();
  const [addressLine1, setaddressLine1] = useState();
  const [addressLine2, setaddressLine2] = useState();
  const [city, setcity] = useState();
  const [country, setcountry] = useState();
  const [zipCode, SetzipCode] = useState();


  const handleUpdate = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      uid,
      vendorName,
      bankAccountNumber,
      bankName,
      addressLine1,
      addressLine2,
      city,
      country,
      zipCode,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8088/api/v3/app/vendor", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="formouter">
      <h1>Update Vendor Details</h1>
      <form className="updateform">
        <label>Enter Your Uid: </label>
        <input
          type="number"
          name="uid"
          id="uid"
          placeholder="Enter Your uid"
          onChange={(e) => setUid(e.target.value)}
          value={+userData.uid}
        />

        <label>Enter Your vendorName : </label>
        <input
          type="text"
          name="name"
          placeholder={userData.vendorName}
          onChange={(e) => {
            e.preventDefault();
            setvendorName(e.target.value);
          }}
          required
        />

        <label>Enter Your bankName: </label>
        <input
          type="text"
          placeholder={userData.bankName}
          onChange={(e) => {
            setbankName(e.target.value);
          }}
          required
        />

        <label>Enter Your bankAccountNumber: </label>
        <input
          type="text"
          placeholder={userData.bankAccountNumber}
          onChange={(e) => {
            sebankAccountNumber(e.target.value);
          }}
          required
        />

        <label>Enter Your City: </label>
        <input
          type="text"
          placeholder={userData.city}
          onChange={(e) => {
            setcity(e.target.value);
          }}
          required
        />

        <label>Enter Your Country: </label>
        <input
          type="text"
          placeholder={userData.country}
          onChange={(e) => {
            setcountry(e.target.value);
          }}
          required
        />

        <label>Enter Your addressLine1: </label>
        <input
          type="text"
          placeholder={userData.addressLine1}
          onChange={(e) => {
            setaddressLine1(e.target.value);
          }}
          required
        />

        <label>Enter Your addressLine2: </label>
        <input
          type="text"
          placeholder={userData.addressLine2}
          onChange={(e) => {
            setaddressLine2(e.target.value);
          }}
          required
        />

        <label>Enter Your ZipCode: </label>
        <input
          type="text"
          placeholder={userData.zipCode}
          onChange={(e) => {
            SetzipCode(e.target.value);
          }}
          required
        />

        <button onClick={handleUpdate}>Submit</button>
      </form>
    </div>
  );
};

export default UpdateVendor;
