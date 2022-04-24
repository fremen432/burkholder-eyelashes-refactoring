import logoSmall from '../../../assets/images/workflow-logo-small.png'

export default function Logo(props) {
  const { setPageMethods } = props;
  return (
    <a href="/#Home" onClick={setPageMethods.home} className="LogoAnchor box">
      <img
        className="LogoImg box"
        // src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
        src={logoSmall}
        alt="Company Logo"
      />
    </a>
  )
}