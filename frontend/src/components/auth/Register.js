import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
const Register = ({ register }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const { name, email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async e => {
        e.preventDefault();
        register({ name, email, password });
    };
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type='text' placeholder='Name' name='name' value={name} onChange={onChange} required />
            </div>
            <div>
                <input type='email' placeholder='Email' name='email' value={email} onChange={onChange} required />
            </div>
            <div>
                <input type='password' placeholder='Password' name='password' value={password} onChange={onChange} required />
            </div>
            <input type='submit' value='Register' />
        </form>
    );
};
export default connect(null, { register })(Register);
