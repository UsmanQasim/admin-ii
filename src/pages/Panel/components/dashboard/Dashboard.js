import React, { useState } from "react";
import styles from "./dashboard.module.scss";
import { CgNotes } from "react-icons/cg";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Dashboard = ({ inquiries }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Response</th>
            <th>Customer Information</th>
            <th>Event Details</th>
            <th>Booking Details</th>
          </tr>
        </thead>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <tbody>
          {inquiries.map((inquiry, key) => (
            <tr key={key}>
              {/* Action */}
              <td>
                <div style={{ textAlign: "center" }}>
                  <button onClick={() => setModalShow(true)}>
                    <CgNotes size="25px" />
                  </button>
                </div>
              </td>
              {/* Response */}
              <td>
                <div>
                  <label>RESPONSE :</label>
                </div>
                <div>
                  <label>Sales Customer :</label>
                </div>
              </td>
              {/* customer details */}
              <td>
                <div>
                  <label>Name :</label>
                  {inquiry.gender}
                  {inquiry.firstName}
                  {inquiry.lastName}
                </div>
                <div>
                  <label>Email :</label>
                  {inquiry.email}
                </div>
                <div>
                  <label>Postal Code :</label>
                  {inquiry.pcode}
                </div>
                <div>
                  <label>Phone NO :</label>
                  {inquiry.phone_no}
                </div>
              </td>
              {/* Event Details */}
              <td>
                <div>
                  <label>Looking For :</label>
                  {inquiry.packages}
                </div>
                <div>
                  <label>DATE :</label>
                  {inquiry.date}
                </div>
              </td>
              {/* Booking Details */}
              <td>
                <div>
                  <label>Venue</label>
                  {inquiry.venue_to_be}
                </div>
                <div>
                  <label>Total Guests :</label>
                  {inquiry.total_guests}
                </div>
                <div>
                  <label>Event Type :</label>
                  {inquiry.event_type}
                </div>
                <div>
                  <label>Comment:</label>
                  {inquiry.comment}
                </div>
                <div>
                  <label>How they Know :</label>
                  {inquiry.how_you_know}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {inquiry.firstName}
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
          {inquiry.how_you_know} */}
    </div>
  );
};

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">NOTES</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea cols="40" rows="8" style={{ padding: "5px 10px" }} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={props.onHide}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Dashboard;
