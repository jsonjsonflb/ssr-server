import React, { memo } from 'react';

const Login = memo(() => {
  const [state, setState] = React.useState('Login');
  return (
    <div>
      <h2>Login</h2>
      <h1>{state}</h1>
      <button
        onClick={() => {
          setState(state + state);
        }}
      >
        Click
      </button>
    </div>
  );
});

export default Login;
