import Link from "next/link";

const Navbar = () => {
  return (
    <>
     <nav className="navbar">
        <ul className="nav-list">
            <li  className="nav-item">
            <Link href="/" legacyBehavior>
                <a>Home</a>
            </Link>
            </li>
            <li  className="nav-item">
            <Link  href="./components/contact"  legacyBehavior>
                <a>Contact</a>
            </Link>
            </li>
            <li  className="nav-item">
            <Link href="./components/about"  legacyBehavior>
                <a>About</a>
            </Link>
            </li>
            <li  className="nav-item">
            <Link href="./components/information"  legacyBehavior>
                <a>Information</a>
            </Link>
            </li>
            <li  className="nav-item">
            <Link href="./components/1" legacyBehavior>
                <a>Product</a>
            </Link>
            </li>
        </ul>
    </nav>
      
    </>
  )
}

export default Navbar;
