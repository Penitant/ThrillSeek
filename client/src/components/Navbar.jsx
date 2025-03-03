import "tailwindcss";
import logo from '../assets/svgs/logo.svg';

const Navbar = () => {
    return (
      <nav className="bg-black text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-6">
          <div className="text-xl font-bold text-yellow-400">
            <img src={logo} alt="Logo" className="size-20" />
          </div>
          <div className="hidden md:flex gap-4">
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition">Home</a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition">Plans</a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition">Book now</a>
          </div>
        </div>
        <div>
          <button className="bg-yellow-400 px-6 py-2 rounded-md text-black font-bold hover:bg-black hover:text-yellow-400 hover:border hover:border-yellow-400 transition">
            Sign Up
          </button>
        </div>
      </nav>
    );
};
  

export default Navbar;