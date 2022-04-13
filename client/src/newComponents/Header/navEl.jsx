import Auth from '../../utils/auth'

const logout = (event) => {
  event.preventDefault();
  Auth.logout();
  window.location.href="/"
};

export default function NavEl(props){
  const { page, setPageMethods, isMobileNav, mobileNavOpen, mobileNavToggle } = props; 

  const basicClasses = 'box ' + ( isMobileNav == true ? 'MobileNavLink ' : 'DesktopNavLink ' )
  const nonFocusedClasses = ` `
  const focusedClasses = `  `
  // const nonFocusedClasses = ` text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700`
  // const focusedClasses = ` text-gray-900 border-indigo-500 `

  const basicNavRoutes = [
    { name: 'Home',    ref: '/#Home',       onClick: () => { setPageMethods.home(); clickMobileNavToggle(); } },
    { name: 'About',    ref: '/#AboutUs',   onClick: () => { setPageMethods.home(); clickMobileNavToggle(); } },
    { name: 'Featured', ref: '/#Featured',  onClick: () => { setPageMethods.home(); clickMobileNavToggle(); } },
    { name: 'Contact',  ref: '/#ContactUs', onClick: () => { setPageMethods.home(); clickMobileNavToggle(); } },
    { name: 'Products', ref: '/#Products',  onClick: () => { setPageMethods.allProducts(); clickMobileNavToggle(); } },
    { name: 'Cart',     ref: '/#Cart',      onClick: () => { setPageMethods.cart(); clickMobileNavToggle(); } },
  ]
  
  const loggedOutNavElements =  [
    { name: 'Log In',  ref: '/#Login',  onClick: () => { setPageMethods.login(); clickMobileNavToggle(); } },
    { name: 'Sign Up', ref: '/#SignUp', onClick: () => { setPageMethods.signUp(); clickMobileNavToggle(); } },
  ]

  const loggedInNavElements = [
    { name: 'Log Out', onClick: logout }
  ]

  const adminRoutes = { name: 'Admin', ref: 'admin', }

  function clickMobileNavToggle(){
    mobileNavToggle();
  }

  const makeNavElements = route =>
    route.map( el =>
      <a
      key={ el.name + ( isMobileNav == true ? '_mobile' : '_desktop' ) } 
      href={ el.ref } 
      onClick={ el.onClick }
      className={ basicClasses + nonFocusedClasses } 
      >
        <span>{ el.name }</span>
      </a>
    )
  
  const desktopBasicNavRoutes = basicNavRoutes.filter(route => route.name != 'Home')

  const LoggedInNavRoutes = () => makeNavElements(loggedInNavElements);
  const LoggedOutNavRoutes = () => makeNavElements(loggedOutNavElements);
  const BasicNavRoutes = () => 
    isMobileNav == true ? makeNavElements(basicNavRoutes) :
    isMobileNav == false ? makeNavElements(desktopBasicNavRoutes) : ''

  const openOrClosed = 
    mobileNavOpen == false ? 'MobileNav_Open ' :
    mobileNavOpen == true ? 'MobileNav_Closed ' : ''

  const getClasses = () => 
    isMobileNav == true ? ('COMPONENT__MobileNavElements ' + openOrClosed ) :
    isMobileNav == false ? 'COMPONENT__DesktopNavElements ' : ''

  return (
    <div id='NavElements' className={ getClasses() }>
      {console.log(desktopBasicNavRoutes)}

      <BasicNavRoutes page={page} setPageMethods={setPageMethods} />

      {Auth.loggedIn() ?
        <LoggedInNavRoutes page={page} setPageMethods={setPageMethods} /> :
        <LoggedOutNavRoutes page={page} setPageMethods={setPageMethods} />
      }
    </div>
  )
}