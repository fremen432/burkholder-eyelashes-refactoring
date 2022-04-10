import Auth from '../../utils/auth'

const logout = (event) => {
  event.preventDefault();
  Auth.logout();
  window.location.href="/"
};

const adminRoutes = { name: 'Admin', ref: 'admin', }

const basicClasses = ` nav-el inline-flex  items-center p-2 px-3 mx-2  text-sm  font-medium  border-b-2 `
const nonFocusedClasses = ` text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700`
const focusedClasses = ` text-gray-900 border-indigo-500 `

const ternaryExpression = route =>
  route.map((el, index) =>
    <a
    key={ el.name } 
    // index={ index }
    href={ el.ref } 
    onClick={ el.onClick }
    className={ basicClasses + nonFocusedClasses } 
    >{ el.name }</a> 
  )

export default function NavEl(props){
  const { page, setPageMethods } = props;

  const basicNavRoutes = [
    { name: 'About',            ref: '/#AboutUs', onClick: setPageMethods.home },
    { name: 'Featured',         ref: '/#Featured', onClick: setPageMethods.home },
    { name: 'Contact',          ref: '/#ContactUs', onClick: setPageMethods.home },
    { name: 'Products',         ref: '/#Products', onClick: setPageMethods.allProducts },
    { name: 'Cart',             ref: '/#Cart', onClick: setPageMethods.cart },
  ]
  
  const loggedOutNavElements =  [
    { name: 'Log In',  ref: '/#Login', onClick: setPageMethods.login },
    { name: 'Sign Up', ref: '/#SignUp', onClick: setPageMethods.signUp },
  ]

  const loggedInNavElements = [
    { name: 'Log Out', onClick: logout}
  ]

  const BasicNavRoutes = () => 
    <div className="basicNavRoutes"> { ternaryExpression(basicNavRoutes) } </div>

  const LoggedInNavRoutes = () =>
    <div className="loggedInNavRoutes"> { ternaryExpression(loggedInNavElements) } </div>

  const LoggedOutNavRoutes = () =>
    <div className="loggedOutNavRoutes"> { ternaryExpression(loggedOutNavElements) } </div>

  return (
    <div className="navBar-full hidden lg:px-2 lg:flex justify-center items-center ">

      <BasicNavRoutes page={page} setPageMethods={setPageMethods} />

      {Auth.loggedIn() ?
        <LoggedInNavRoutes page={page} setPageMethods={setPageMethods} /> :
        <LoggedOutNavRoutes page={page} setPageMethods={setPageMethods} />
      }
    </div>
  )
}