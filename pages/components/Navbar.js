import Link from "next/link";

const Navbar = () => {
  return (
    <>
     <nav class="navbar">
        <ul class="nav-list">
            <li  class="nav-item">
            <Link href="./components/home" legacyBehavior>
                <a>Home</a>
            </Link>
            </li>
            <li  class="nav-item">
            <Link  href="./components/contact"  legacyBehavior>
                <a>Contact</a>
            </Link>
            </li>
            <li  class="nav-item">
            <Link href="./components/about"  legacyBehavior>
                <a>About</a>
            </Link>
            </li>
            <li  class="nav-item">
            <Link href="./components/information"  legacyBehavior>
                <a>Information</a>
            </Link>
            </li>
            <li  class="nav-item">
            <Link href="./product" legacyBehavior>
                <a>Product</a>
            </Link>
            </li>
        </ul>
    </nav>
      
    </>
  )
}

export default Navbar;
