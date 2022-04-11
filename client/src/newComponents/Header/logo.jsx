import logoSmall from '../../assets/images/workflow-logo-small.png'

export default function Logo(props) {
  const { setPageMethods } = props;
  return (
    <a href="/#Home" onClick={setPageMethods.home} className="px-2 flex items-center flex-shrink-0">
      <img
        className=" w-auto h-8 lg:block"
        // src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
        src={logoSmall}
        alt="Company Logo"
      />
    </a>
  )
}