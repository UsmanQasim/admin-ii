import React, { useState } from "react";
import styles from "./dashboard.module.scss";
import { CgNotes } from "react-icons/cg";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { API_KEY } from '../../../../utils/secrets';

const Dashboard = ({ inquiries }) => {
  const [modalShow, setModalShow] = useState(false);
  const [note, setNote] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  const clickHandler = (e) => {
    e.preventDefault();

    const reqURL = "/api/v1/notes/update.php?api_key=" + API_KEY;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      alert(this.responseText);
      window.location.reload();
    };
    const reqData = `id=${selectedInquiry.id}&type=${selectedInquiry.pcode ? 'INQ' : 'CINQ'}&note=${note}`;
    xhttp.open("POST", reqURL);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(reqData);
  };

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Notes</th>
            <th>Customer Information</th>
            <th>Event Details</th>
            <th>Booking Details</th>
          </tr>
        </thead>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          note={note}
          setNote={setNote}
          clickHandler={clickHandler}
        />
        <tbody>
          {inquiries.map((inquiry, key) => (
            <tr key={key}>
              {/* Action */}
              <td>
                <div style={{ textAlign: "center" }}>
                  <button onClick={() => {
                    setModalShow(true);
                    setSelectedInquiry(inquiry);
                    setNote(inquiry.note);
                  }}>
                    <CgNotes size="25px" />
                    <label>NOTE</label>
                  </button>
                </div>
              </td>
              {/* Notes */}
              <td>
                {inquiry.note ? (
                  <p>{inquiry.note}</p>
                ) : (
                  <div>
                    <p>No Note</p>{" "}
                  </div>
                )}
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
    </div>
  );
};

const MyVerticallyCenteredModal = (props) => {
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
        <textarea
          cols="40"
          rows="8"
          value={props.note}
          onChange={(e) => props.setNote(e.target.value)}
          style={{ padding: "5px 10px" }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={(e) => {
          props.onHide(e);
          props.clickHandler(e);
        }}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Dashboard;
