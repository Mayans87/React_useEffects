import  React ,{useEffect,useState} from 'react';
const authcontext = React.createContext({
    isLoggedIn: false,
    onLogin: function(){},
    onLogout: ()=>{}
});

export const Authcontextprovider= props=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
      const loginpassword = localStorage.getItem('email');
    if(loginpassword==='password') {setIsLoggedIn(true);}
    
    },[])
    const logoutHandler = () => {
        setIsLoggedIn(false);
      };
      const loginHandler = (email, password) => {
          // We should of course check email and password
          // But it's just a dummy/ demo anyways
          localStorage.setItem('email','password');
          setIsLoggedIn(true);}
    return <authcontext.Provider value={{isLoggedIn:isLoggedIn,onLogin:loginHandler,onLogout:logoutHandler}}>{props.children}</authcontext.Provider>
  };

export default authcontext;