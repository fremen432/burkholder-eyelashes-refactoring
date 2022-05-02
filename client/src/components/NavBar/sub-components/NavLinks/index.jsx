import Auth from '../../../../assets/js/utils/auth';
import { useSelector, useDispatch } from 'react-redux';
import { setPageMethods } from '../../../../state management/actions/pageMethods';

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
    home:         () => { dispatch(setPageMethods.home()); mobileNavToggle(); },
    about:        () => { dispatch(setPageMethods.home()); mobileNavToggle(); },
    featured:     () => { dispatch(setPageMethods.home()); mobileNavToggle(); },
    contact:      () => { dispatch(setPageMethods.home()); mobileNavToggle(); },

    products:     () => { dispatch(setPageMethods.allProducts()); mobileNavToggle(); },
    cart:         () => { dispatch(setPageMethods.cart()); mobileNavToggle(); },
    addProducts:  () => { dispatch(setPageMethods.addProduct()); mobileNavToggle(); },
    login:        () => { dispatch(setPageMethods.login()); mobileNavToggle(); },
    signUp:       () => { dispatch(setPageMethods.signUp()); mobileNavToggle(); },
  }

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

  // function clickMobileNavToggle(){
  //   mobileNavToggle();
  // }

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
      <BasicNavRoutes page={page} />

      {Auth.loggedIn() ?
        <LoggedInNavRoutes page={page} /> :
        <LoggedOutNavRoutes page={page} />
      }
    </div>
  )
}