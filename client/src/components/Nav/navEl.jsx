import Auth from '../../utils/auth'

const logout = (event) => {
  event.preventDefault();
  Auth.logout();
  window.location.href="/"
};

const adminRoutes = { name: 'Admin', ref: 'admin', }

const basicNavRoutes = [
  { name: 'Home',             ref: '/', },
  { name: 'Products',         ref: 'products', },
  { name: 'About',            ref: 'about', },
  { name: 'Contact',          ref: 'contact', },
  // { name: 'Admin',            ref: 'admin', },
  { name: 'Cart',             ref: 'cart', },
  { name: 'Order History',    ref: 'orderHistory', },
  // { name: 'Order Summary',    ref: 'orderSummary', },
]

const loggedOutNavElements =  [
  { name: 'Log In',   ref: 'login', },
  { name: 'Sign Up',  ref: 'signup', },
]

const loggedInNavElements =  [
  { name: 'Log Out',  ref: '/', onClick: logout}
]

const basicClasses = ` nav-el inline-flex  items-center p-2 px-3 mx-2  text-sm  font-medium  border-b-2 `
const nonFocusedClasses = ` text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700`
const focusedClasses = ` text-gray-900 border-indigo-500 `

function BasicNavRoutes(){
  return(
    <div className="basicNavRoutes">
      { basicNavRoutes.map( el => 
        <a  
          href={ el.ref } 
          key={ el.name } 
          // onClick={ el.onClick }
          className={ basicClasses + nonFocusedClasses } 
        >{ el.name }</a>
      )}
    </div>
  )
}

function LoggedInNavRoutes(){
  return(
    <div className="loggedInNavRoutes">
      { loggedInNavElements.map( el => 
        <a  
          href={ el.ref } 
          key={ el.name } 
          onClick={ el.onClick } 
          className={ basicClasses + nonFocusedClasses } 
        >{ el.name }</a>
      )}
    </div>
  )
}

function LoggedOutNavRoutes(){
  return(
    <div className="loggedOutNavRoutes">
      { loggedOutNavElements.map( el => 
        <a  
          href={ el.ref } 
          key={ el.name } 
          // onClick={ el.onClick } 
          className={ basicClasses + nonFocusedClasses } 
        >{ el.name }</a>
      )}
    </div>
  )
}

export default function NavEl(){
  return (
    <div className="navBar-full hidden lg:px-2 lg:flex justify-center items-center ">

      <BasicNavRoutes />

      {Auth.loggedIn() ?
        <LoggedInNavRoutes/> :
        <LoggedOutNavRoutes/>
      }
    </div>
  )
}