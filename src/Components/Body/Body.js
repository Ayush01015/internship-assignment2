import React, { useEffect, useState } from "react";
import { Employees } from "../../Constants/Employees";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Row from "../Row/Row";
import "./Body.css";
const Body = () => {
  const [employees, SetEmployees] = useState([]);

  async function getEmployees() {
    //fetching data from API
    const data = await fetch(`${Employees}`);
    const json = await data.json();
    SetEmployees(json);
    // console.log("Json: ", json);
  }

  useEffect(() => {
    getEmployees();
  }, []);

  function createData(
    name,
    age,
    gender,
    designation,
    country,
    doj,
    dol,
    salary
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
    };
  }

  const rows = [
    employees.map((employee) => {
      createData(
        employee.name,
        employee.age,
        employee.gender,
        employee.designation,
        employee.country,
        employee.doj,
        employee.dol,
        employee.salary
      );
    }),
  ];

  return (
    <>
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
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Body;
