import React from "react";

const Dashboard = ({ inquiries }) => {
  return (
    <div>
      {inquiries.map((inquiry, key) => (
        <p key={key}>
          <table>
            <tr>
              <th>First</th>
              <th>Second</th>
              <th>Third</th>
            </tr>
            <tr>
              <td>
                <div>
                  {inquiry.gender}
                  {inquiry.firstName}
                </div>
                <div>
                  <td>{inquiry.lastName}</td>
                </div>
              </td>
              <td>{inquiry.packages}</td>
            </tr>
          </table>
          {inquiry.firstName}
          {inquiry.date}
          {inquiry.lastName}
          {inquiry.gender}
          {inquiry.packages}
          {inquiry.pcode}
          {inquiry.date}
          {inquiry.venue_to_be}
          {inquiry.total_guests}
          {inquiry.event_type}
          {inquiry.email}
          {inquiry.phone_no}
          {inquiry.comment}
          {inquiry.how_you_know}
        </p>
      ))}
    </div>
  );
};

export default Dashboard;
