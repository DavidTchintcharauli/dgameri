import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center">

                    <img src={Logo} alt="Dgameri Logo" className="w-12 h-12 mr-2 rounded-lg" />
                    <span className="text-2xl font-bold">დგამერი</span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex flex-grow justify-center">
                    <Link to="/" className="mx-3 hover:text-blue-500 transition-colors duration-300">Home</Link>
                    <Link to="/about" className="mx-3 hover:text-blue-500 transition-colors duration-300">About Us</Link>
                    <Link to="/services" className="mx-3 hover:text-blue-500 transition-colors duration-300">Services</Link>
                    <Link to="/contact" className="mx-3 hover:text-blue-500 transition-colors duration-300">Contact</Link>
                    <Link to="/FurnitureDetails">
                        <button className="text-red-800 bg-green-500">furniture detail</button>
                    </Link>
                    <NavLink className="ml-auto" to="/signup">
                        <button className="text-red-800 bg-green-500">sigdasdad</button>
                    </NavLink>
                </nav>

                {/* Catalog & Shopping Button */}
                <div className="flex items-center">
                    <Link to="/catalog" className="mx-3">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" aria-label="View Catalog">
                            Catalog
                        </button>
                    </Link>
                    <Link to="/shop" className="mx-3">
                        <button className="text-white font-bold bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md ml-2" aria-label="Shop Now">
                            Shop Now
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;