import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#2c56cb] text-white p-4 flex items-center justify-between ">
      {/* Left: Logo with 1/5 gap on left */}
      <div className="ml-[20vw] md:ml-64">
        <Link href="/" className="text-2xl font-bold hover:text-secondary">
          Vericard {/* Placeholder; replace with Image if SVG available */}
        </Link>
      </div>
      {/* Right: Links with 1/5 gap on right */}
      <div className="mr-[20vw] md:mr-64 flex space-x-6">
        <Link href="/" className="hover:text-secondary hover:scale-105 hover:underline transition-transform duration-200">
          Home
        </Link>
        <Link href="../pages/aboutpage" className="hover:text-secondary hover:scale-105 hover:underline transition-transform duration-200">
          About
        </Link>
        <Link href="../pages/contactpage" className="hover:text-secondary hover:scale-105 hover:underline transition-transform duration-200">
          Contact
        </Link>
      </div>
    </nav>
  );
}