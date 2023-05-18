import React, { useEffect, useState } from "react";
import VendorCard from "./VendorCard";
import "./main.css";

const Home = () => {
  const [vendors, setVendors] = useState([]);
  const [size, setSize] = useState(5);
  const [page, setPage] = useState(1);
  

    
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      crossDomain: true,
    };
console.log("s" + size);
console.log(page);
    fetch(
      `http://localhost:8088/api/v3/app/vendor?pageSize=${size}&pageNo=${page}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVendors(result);
      })
      .catch((error) => console.log("error", error));
  }, [size,page]);

    const handlepagesize = (e) => {
        setSize(e.target.value)
        
    }

    const handlepageno = (e) => {
        setPage(e.target.value)
    }
  return (
    <div className="home">
      <div>
        <form className="homeform">
          <label htmlFor="pageSize">PageSize: </label>
          <input
            type="number"
            name="pageSize"
            id="pageSize"
            onChange={handlepagesize}
          />

          <label htmlFor="pageNo">PageNo: </label>
          <input type="number" name="pageNo" id="pageNo" onChange={handlepageno} />

          
        </form>
      </div>
      {vendors.map((el) => (
        <VendorCard
          key={el.uid}
          vendorName={el.vendorName}
          bankName={el.bankName}
          bankAccountNumber={el.bankAccountNumber}
          el={el}
        />
      ))}
    </div>
  );
};

export default Home;
