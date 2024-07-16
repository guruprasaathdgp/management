import axios from 'axios';
import { GET_COMPLAINTS, COMPLAINT_ERROR, ADD_COMPLAINT } from './types';

export const getComplaints = () => async dispatch => {
    try {
        const res = await axios.get('/api/complaints');
        dispatch({
            type: GET_COMPLAINTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: COMPLAINT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
export const addComplaint = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.post('/api/complaints', formData, config);
        dispatch({
            type: ADD_COMPLAINT,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: COMPLAINT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
