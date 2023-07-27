import React, { useEffect, useState } from "react";
import { Employees } from "../../Constants/Employees";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Row from "../Row/Row";
import "./Body.css";

const Body = () => {
  //state for storing employees data
  const [employees, SetEmployees] = useState([]);

  // function to fetch data
  async function getEmployees() {
    //fetching data from API
    const data = await fetch(`${Employees}`);
    const json = await data.json(); //converting to json
    SetEmployees(json);
    // console.log("Json: ", json);
  }

  useEffect(() => {
    getEmployees();
  }, []);

  // function to createData in object from (it takes data and return in object form)
  function createData(
    name,
    age,
    gender,
    designation,
    country,
    doj,
    dol,
    salary,
    state
  ) {
    return {
      name,
      age,
      gender,
      designation,
      country,
      doj,
      dol,
      salary,
      state,
    };
  }

  //creating multiple data in array of object
  const rows = employees.map((employee) => 
      // console.log("-->", employee.name);
      createData(
        employee.name,
        employee.age,
        employee.gender,
        employee.designation,
        employee.country,
        employee.doj,
        employee.dol,
        employee.salary,
        employee.state,
      )
    );

  // {console.log("major", rows)}
  return (
    <div className="body">
      <p className="table-heading">Employee Table</p>
      <div className="table">
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Designation</TableCell>
              <TableCell align="right">State</TableCell>
              <TableCell align="right">Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
            {rows.length===0
              ?
              <>
                <TableRow>
                  <TableCell align="right">
                  {/*Rendering Shimmer UI Till data get rendered */}
                    <p className="shimmer">Loading table data from API</p>
                  </TableCell>
                </TableRow>
              </>
              :
              rows.map((row, i) => {
              //console.log(row); // Add this console.log statement
              return <Row key={i} row={row} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </div>
  );
};

export default Body;
