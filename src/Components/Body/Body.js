import React, { useEffect, useState } from "react";
import { Employees } from "../../Constants/Employees";
import "./Body.css";
const Body = () => {

  async function getEmployees() {
    //fetching data from API
    const data = await fetch(
      `${Employees}`
    );
    const json = await data.json();
    console.log("Json: ", json);
  }

  useEffect(()=>{
    getEmployees();
  },[])
  
  return (
    <>
      Ayush
    </>
  );
};

export default Body;
