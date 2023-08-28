import React from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import AttendanceForm from "./components/AttendanceForm";

const App = () => {
  return (
    <Container>
      <h1>Class Attendance System</h1>
      <AttendanceForm />
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
