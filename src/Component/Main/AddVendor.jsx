import {useState} from 'react'
import "./main.css";

const AddVendor = () => {

   const [vendorName, setvendorName] = useState();
   const [bankAccountNumber, sebankAccountNumber] = useState();
   const [bankName, setbankName] = useState();
   const [addressLine1, setaddressLine1] = useState();
   const [addressLine2, setaddressLine2] = useState();
   const [city, setcity] = useState();
   const [country, setcountry] = useState();
  const [zipCode, SetzipCode] = useState();

  const handleSubmit = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
     
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
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8088/api/v3/app/vendor", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  
  return (
    <div className='addvendor'>
      <h1>Add Vendor Details</h1>
      <form className="updateform">
        <label>Enter Your vendorName : </label>
        <input
          type="text"
          placeholder={"Enter Your vendorName"}
          onChange={(e) => {
            setvendorName(e.target.value);
          }}
          required
        />

        <label>Enter Your bankName: </label>
        <input
          type="text"
          placeholder={"Enter Your bankName"}
          onChange={(e) => {
            setbankName(e.target.value);
          }}
          required
        />

        <label>Enter Your bankAccountNumber: </label>
        <input
          type="text"
          placeholder={"Enter Your bankAccountNumber"}
          onChange={(e) => {
            sebankAccountNumber(e.target.value);
          }}
          required
        />

        <label>Enter Your City: </label>
        <input
          type="text"
          placeholder={"Enter Your City"}
          onChange={(e) => {
            setcity(e.target.value);
          }}
          required
        />

        <label>Enter Your Country: </label>
        <input
          type="text"
          placeholder={"Enter Your Country"}
          onChange={(e) => {
            setcountry(e.target.value);
          }}
          required
        />

        <label>Enter Your addressLine1: </label>
        <input
          type="text"
          placeholder={"Enter Your addressLine1"}
          onChange={(e) => {
            setaddressLine1(e.target.value);
          }}
          required
        />

        <label>Enter Your addressLine2: </label>
        <input
          type="text"
          placeholder={"Enter Your addressLine2"}
          onChange={(e) => {
            setaddressLine2(e.target.value);
          }}
          required
        />

        <label>Enter Your ZipCode: </label>
        <input
          type="text"
          placeholder={"Enter Your ZipCode"}
          onChange={(e) => {
            SetzipCode(e.target.value);
          }}
          required
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default AddVendor