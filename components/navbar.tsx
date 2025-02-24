import Link from "next/link";
const Navbar =  () => {
  return (
    <nav className="bg-nav w-full p-4">
      <div className="container mx-auto flex items-center justify-between xl:px-40">
        <div className="w-32">
          <Link href="/">
            <img src="logo.png" alt="" />
          </Link>
        </div>
        <ul className="flex space-x-4 text-white items-center xl:space-x-6">
          <li>
            <Link href="/">Courses</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <button className="bg-ijo rounded-md text-white w-24 h-8">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
