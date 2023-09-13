// import logo from './logo.svg';
// import './App.css';
// import BasicTable from './components/BasicTable';
// import LoginForm from './components/LoginForm';

// function App() {
//   return (
//     <div className="App">
//       <LoginForm />
//       {/* <BasicTable/> */}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

import axios from 'axios';
import ProtectedContent from './components/ProtectedContent';
import LoginForm from './components/LoginForm';

function App() {
  const [token, setToken] = useState(null);

  const onLogin = (token) => {
    setToken(token);
  };

  const onLogout = () => {
    setToken(null);
  };

  return (
    <div>
      <h1>JWT Authentication Example</h1>
      {token ? (
        <>
          <button onClick={onLogout}>Logout</button>
          <ProtectedContent />
        </>
      ) : (
        <LoginForm onLogin={onLogin} />
      )}
    </div>
  );
}

export default App;
