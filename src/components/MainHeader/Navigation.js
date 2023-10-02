import React,{useContext} from 'react';
import authcontext from '../store/auth-context';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  const ctx = useContext(authcontext);
  return (
    // <authcontext.Consumer>
    //   {(ctx)=>{
    //     return (
          <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
        )
      }
    
//     </authcontext.Consumer>
//   );
// };

export default Navigation;
