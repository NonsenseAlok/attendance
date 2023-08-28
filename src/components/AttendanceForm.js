import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AttendanceForm = () => {
  const [studentId, setStudentId] = useState("");
  const [classId, setClassId] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // TODO: Connect to backend API to mark attendance
    console.log("Marking attendance...");
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Student ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Class ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter class ID"
          value={classId}
          onChange={(e) => setClassId(e.target.value)}
        />
      </Form.Group>
      <Button type="submit">Mark Attendance</Button>
    </Form>
  );
};

export default AttendanceForm;
