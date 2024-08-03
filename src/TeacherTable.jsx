// TeacherTable.js
import React from 'react';

function TeacherTable({ data }) {
  return (
    <table className="teacher-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>E-Code</th>
          <th>Department</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Coordinator</th>
          <th>Year</th>
          <th>Responsibility</th>
          <th>Seating Venue</th>
          <th>Block</th>
        </tr>
      </thead>
      <tbody>
        {data.map((teacher, index) => (
          <tr key={index}>
            <td>{teacher.name}</td>
            <td>{teacher.eCode}</td>
            <td>{teacher.parentDepartment}</td>
            <td>{teacher.email}</td>
            <td>{teacher.contact}</td>
            <td>{teacher.coordinator}</td>
            <td>{teacher.year}</td>
            <td>{teacher.responsibility}</td>
            <td>{teacher.seatingVenue}</td>
            <td>{teacher.block}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TeacherTable;