import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

import { fetchInquiries, fetchContactInquiries } from "../../redux";

//importing components
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";

const Panel = ({
  fetchInquiries,
  fetchContactInquiries,
  inquiryState,
  contactInquiryState,
  setLogged,
}) => {
  const [inquiries, setInquiries] = useState([]);

  const refactorInquiries = () => {
    inquiryState.inquiries.map((inq) => setInquiries([...inquiries, inq]));
    contactInquiryState.contactInquiries.map((inq) =>
      setInquiries([...inquiries, inq])
    );

    //sort inquiries
  };

  const inquiryRef = useRef(null);
  const cInquiryRef = useRef(null);
  const rInquiryRef = useRef(null);

  inquiryRef.current = fetchInquiries;
  cInquiryRef.current = fetchContactInquiries;
  rInquiryRef.current = refactorInquiries;

  useEffect(() => {
    inquiryRef.current();
    cInquiryRef.current();
  }, []);

  useEffect(() => {
    if (inquiryState.loading && contactInquiryState.loading)
      rInquiryRef.current();
  }, [inquiryState.loading, contactInquiryState.loading]);

  return (
    <div>
      <Navbar setLogged={setLogged} />
      <Dashboard inquiries={inquiries} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  inquiryState: state.inquiryState,
  contactInquiryState: state.contactInquiryState,
});
const mapDispatchToProps = (dispatch) => ({
  fetchInquiries: () => dispatch(fetchInquiries()),
  fetchContactInquiries: () => dispatch(fetchContactInquiries()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
