import React,{useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import authcontext from './components/store/auth-context';

function App() {
  const context = useContext(authcontext);
 
  

 

  return (
    <React.Fragment>
     
      <MainHeader   />
      <main>
        {!context.isLoggedIn && <Login  />}
        {context.isLoggedIn && <Home  />}
      </main>
      
    </React.Fragment>
  );
}

export default App;
