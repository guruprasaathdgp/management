import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getComplaints } from '../../actions/complaint';
const ComplaintList = ({ getComplaints, complaint: { complaints, loading } }) => {
    useEffect(() => {
        getComplaints();
    }, [getComplaints]);
    return loading ? (
        <div>Loading...</div>
    ) : (
        <div>
            {complaints.map(complaint => (
                <div key={complaint._id}>
                    <p>{complaint.description}</p>
                    <p>{complaint.address}</p>
                    <p>{complaint.status}</p>
                </div>
            ))}
        </div>
    );
};
const mapStateToProps = state => ({
    complaint: state.complaint
});
export default connect(mapStateToProps, { getComplaints })(ComplaintList);
