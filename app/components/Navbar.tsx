import { Airplay } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex px-10 py-3 justify-between items-center">
      <h3 className="flex items-center gap-3">
        <span>
          <Airplay />
        </span>
        Remote Jobs
      </h3>
      <ul className="flex gap-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/remote">Remote Jobs</Link>
        </li>
        <li>
          <Link href="/full-time">Full-Time</Link>
        </li>
        <li>
          <Link href="/categories">Categories</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
