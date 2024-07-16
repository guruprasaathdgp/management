import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComplaint } from '../../actions/complaint';
const AddComplaint = ({ addComplaint }) => {
    const [formData, setFormData] = useState({
        description: '',
        address: ''
    });
    const { description, address } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        addComplaint({ description, address });
    };
    return (
        <form onSubmit={onSubmit}>
            <div>
                <textarea
                    name='description'
                    cols='30'
                    rows='5'
                    placeholder='Description'
                    value={description}
                    onChange={onChange}
                    required
                ></textarea>
            </div>
            <div>
                <input type='text' placeholder='Address' name='address' value={address} onChange={onChange} required />
            </div>
            <input type='submit' value='Submit' />
        </form>
    );
};
export default connect(null, { addComplaint })(AddComplaint);
