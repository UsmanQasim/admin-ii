import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

import { fetchInquiries, fetchContactInquiries } from "../../redux";

//importing components
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Loader from "./components/loader/Loader";

const Panel = ({
  fetchInquiries,
  fetchContactInquiries,
  inquiryState,
  contactInquiryState,
  setLogged,
}) => {
  const [inquiries, setInquiries] = useState([]);

  const inquiryRef = useRef(null);
  const cInquiryRef = useRef(null);
  const aInquiryRef = useRef(null);

  inquiryRef.current = fetchInquiries;
  cInquiryRef.current = fetchContactInquiries;
  aInquiryRef.current = {
    assignInquiries: () =>
      setInquiries([...inquiries, ...inquiryState.inquiries]),
    assignContactInquiries: () =>
      setInquiries([...inquiries, ...contactInquiryState.contactInquiries]),
  };

  useEffect(() => {
    inquiryRef.current();
    cInquiryRef.current();
  }, []);

  useEffect(
    () => !inquiryState.loading && aInquiryRef.current.assignInquiries(),
    [inquiryState.loading]
  );
  useEffect(
    () =>
      !contactInquiryState.loading &&
      aInquiryRef.current.assignContactInquiries(),
    [contactInquiryState.loading]
  );

  return (
    <>
      <Navbar setLogged={setLogged} />
      {!inquiries ? (
        <Loader>Fetching Inquiries</Loader>
      ) : (
        <Dashboard inquiries={inquiries} />
      )}
    </>
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
