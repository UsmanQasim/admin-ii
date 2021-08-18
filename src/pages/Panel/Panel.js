import React from 'react';
import { connect } from 'react-redux';

import { fetchInquiries, fetchContactInquiries } from '../../redux';

const Panel = () => {
    return (
        <div>
            <h1>Panel</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({ inquiryState: state.inquiryState, contactInquiryState: state.contactInquiryState });
const mapDispatchToProps = (dispatch) => ({
  fetchInquiries: () => dispatch(fetchInquiries()),
  fetchContactInquiries: () => dispatch(fetchContactInquiries())
});

export default connect(mapStateToProps, mapDispatchToProps)(Panel);