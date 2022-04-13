import Auth from '../../utils/auth'

const logout = (event) => {
  event.preventDefault();
  Auth.logout();
  window.location.href="/"
};

export default function NavEl(props){
  const { page, setPageMethods, mobileNavOpen, isMobileNav, mobileNavToggle } = props; 

  const basicClasses = 'box ' + (
    isMobileNav == true ?
    'MobileNavLink ' :
    'DesktopNavLink '
  )
  const nonFocusedClasses = ` `
  const focusedClasses = `  `
  // const nonFocusedClasses = ` text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700`
  // const focusedClasses = ` text-gray-900 border-indigo-500 `

    const basicNavRoutes = [
    { name: 'About',    ref: '/#AboutUs',   onClick: () => { setPageMethods.home(); mobileNavToggle(); } },
    { name: 'Featured', ref: '/#Featured',  onClick: () => { setPageMethods.home(); mobileNavToggle(); } },
    { name: 'Contact',  ref: '/#ContactUs', onClick: () => { setPageMethods.home(); mobileNavToggle(); } },
    { name: 'Products', ref: '/#Products',  onClick: () => { setPageMethods.allProducts(); mobileNavToggle(); } },
    { name: 'Cart',     ref: '/#Cart',      onClick: () => { setPageMethods.cart(); mobileNavToggle(); } },
  ]
  
  const loggedOutNavElements =  [
    { name: 'Log In',  ref: '/#Login', onClick: () => { setPageMethods.login(); mobileNavToggle(); } },
    { name: 'Sign Up', ref: '/#SignUp', onClick: () => { setPageMethods.signUp(); mobileNavToggle(); } },
  ]

  const loggedInNavElements = [
    { name: 'Log Out', onClick: logout }
  ]

  const adminRoutes = { name: 'Admin', ref: 'admin', }

  const makeNavElements = route =>
    route.map((el, index) =>
      <a
      key={ el.name + ( isMobileNav == true ? '_mobile' : '_desktop' ) } 
      // index={ index }
      href={ el.ref } 
      onClick={ el.onClick }
      className={ basicClasses + nonFocusedClasses } 
      >
        <span>{ el.name }</span>
      </a> 
    )

  const BasicNavRoutes = () => makeNavElements(basicNavRoutes);
  const LoggedInNavRoutes = () => makeNavElements(loggedInNavElements);
  const LoggedOutNavRoutes = () => makeNavElements(loggedOutNavElements);

  const getClasses = () => {
    if (isMobileNav == true) {

      if (mobileNavOpen == false) return 'COMPONENT__MobileNavElements MobileNav_Open '
      else if (mobileNavOpen == true) return 'COMPONENT__MobileNavElements MobileNav_Closed '
      else return 'COMPONENT__MobileNavElements '

    } else if (isMobileNav == false) return "COMPONENT__DesktopNavElements "

     else return ''
  }

  return (
    <div id='NavElements' className={ getClasses() }>

    {/* <div className={"box " + 
    (isMobileNav == true ? 'COMPONENT__MobileNavElements ' : "COMPONENT__DesktopNavElements ") +
    (
      mobileNavOpen == false ?
      'MobileNav_Open' :
      mobileNavOpen == true ?
      'MobileNav_Closed' :
      ''
    )
    }> */}

      <BasicNavRoutes page={page} setPageMethods={setPageMethods} />

      {Auth.loggedIn() ?
        <LoggedInNavRoutes page={page} setPageMethods={setPageMethods} /> :
        <LoggedOutNavRoutes page={page} setPageMethods={setPageMethods} />
      }
    </div>
  )
}