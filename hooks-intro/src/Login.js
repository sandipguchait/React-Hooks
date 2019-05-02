import React from 'react';

const Login = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Login</h2>
            <form style={{
                display: 'grid',
                alignItems: 'center',
                justifyItems: "center"
            }}>
                <input 
                    type="text"
                    placeholder="Username" 
                />
                <input 
                    type="password"
                    placeholder="Password" 
                />
                <button type="submit">Submit</button> 
            </form>
        </div>
    );
};

export default Login;