import logo from '../../assets/logo.png';

const NavBar = () => {
   return (
      <div className='container'>
         <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
               <a className="navbar-brand" href="/">
                  <img src={logo} alt="" width="253" height="50" className="d-inline-block align-text-top" />
               </a>
            </div>
         </nav>
      </div>
   );
};

export default NavBar;
