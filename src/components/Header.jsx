function Header(props) {
  return (
    <h1 className="bg-white text-3xl font-sans mt-32 md:mt-48 lg:mt-64 font-bold text-white-800 dark:text-white-300 text-center">
      {props.children}
    </h1>
  );
}

export default Header;
