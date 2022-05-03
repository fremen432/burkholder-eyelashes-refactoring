import logoSmall from '../../../../assets/images/workflow-logo-small.png'
import { useDispatch } from 'react-redux';
import { setPageMethods } from '../../../../state management/actions/pageMethods'

export default function Logo() {
  const dispatch = useDispatch();
  const handleClick = () => { dispatch(setPageMethods.home()); }

  return (
    <a href="/#Home" onClick={ handleClick } className="Logo box">
      <img
        className="box"
        src={logoSmall}
        alt="Company Logo"
      />
    </a>
  )
}