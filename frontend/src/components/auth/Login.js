import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
const Login = ({ login }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    };
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type='email' placeholder='Email' name='email' value={email} onChange={onChange} required />
            </div>
            <div>
                <input type='password' placeholder='Password' name='password' value={password} onChange={onChange} required />
            </div>
            <input type='submit' value='Login' />
        </form>
    );
};
export default connect(null, { login })(Login);
