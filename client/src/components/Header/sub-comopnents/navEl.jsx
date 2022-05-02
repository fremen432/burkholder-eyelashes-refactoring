import Auth from '../../../assets/js/utils/auth';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setPageMethods } from '../../../actions/pageMethods';

// import { 
//   setPage_home,
//   setPage_allProducts,
//   setPage_cart,
//   setPage_addProduct,
//   setPage_login,
//   setPage_signUp
// } from '../../../actions/pageMethods';

const logout = (event) => {
  event.preventDefault();
  Auth.logout();
  window.location.href="/"
};

export default function NavEl(props){
  const { isMobileNav, mobileNavOpen, mobileNavToggle } = props; 

  const dispatch = useDispatch();

  const page = useSelector(state => state.page);

  const basicClasses = 'box ' + ( isMobileNav == true ? 'MobileNavLink ' : 'DesktopNavLink ' )

  const navOnClicks = {
    home:         () => { dispatch(setPageMethods.home()); clickMobileNavToggle(); },
    about:        () => { dispatch(setPageMethods.home()); clickMobileNavToggle(); },
    featured:     () => { dispatch(setPageMethods.home()); clickMobileNavToggle(); },
    contact:      () => { dispatch(setPageMethods.home()); clickMobileNavToggle(); },

    products:     () => { dispatch(setPageMethods.allProducts()); clickMobileNavToggle(); },
    cart:         () => { dispatch(setPageMethods.cart()); clickMobileNavToggle(); },
    addProducts:  () => { dispatch(setPageMethods.addProduct()); clickMobileNavToggle(); },
    login:        () => { dispatch(setPageMethods.login()); clickMobileNavToggle(); },
    signUp:       () => { dispatch(setPageMethods.signUp()); clickMobileNavToggle(); },
  }
  // const navOnClicks = {
  //   home:         () => { dispatch(setPage_home()); clickMobileNavToggle(); },
  //   about:        () => { dispatch(setPage_home()); clickMobileNavToggle(); },
  //   featured:     () => { dispatch(setPage_home()); clickMobileNavToggle(); },
  //   contact:      () => { dispatch(setPage_home()); clickMobileNavToggle(); },

  //   products:     () => { dispatch(setPage_allProducts()); clickMobileNavToggle(); },
  //   cart:         () => { dispatch(setPage_cart()); clickMobileNavToggle(); },
  //   addProducts:  () => { dispatch(setPage_addProduct()); clickMobileNavToggle(); },
  //   login:        () => { dispatch(setPage_login()); clickMobileNavToggle(); },
  //   signUp:       () => { dispatch(setPage_signUp()); clickMobileNavToggle(); },
  // }

  const basicNavRoutes = [
    { name: 'Home',         ref: '/#Home',        onClick: navOnClicks.home},
    { name: 'About',        ref: '/#AboutUs',     onClick: navOnClicks.about},
    { name: 'Featured',     ref: '/#Featured',    onClick: navOnClicks.featured},
    { name: 'Contact',      ref: '/#ContactUs',   onClick: navOnClicks.contact},
    { name: 'Products',     ref: '/#Products',    onClick: navOnClicks.products},
    { name: 'Cart',         ref: '/#Cart',        onClick: navOnClicks.cart},
    { name: 'Add Product',  ref: '/#Add-Product', onClick: navOnClicks.addProducts},
  ]
  
  const loggedOutNavElements =  [
    { name: 'Log In',  ref: '/#Login',  onClick: () => { navOnClicks.login(); } },
    { name: 'Sign Up', ref: '/#SignUp', onClick: () => { navOnClicks.signUp(); } },
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
      className={ basicClasses } 
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
      {/* <BasicNavRoutes page={page} setPageMethods={setPageMethods} /> */}
      <BasicNavRoutes page={page} />

      {Auth.loggedIn() ?
        <LoggedInNavRoutes page={page} /> :
        <LoggedOutNavRoutes page={page} />
        // <LoggedInNavRoutes page={page} setPageMethods={setPageMethods} /> :
        // <LoggedOutNavRoutes page={page} setPageMethods={setPageMethods} />
      }
    </div>
  )
}