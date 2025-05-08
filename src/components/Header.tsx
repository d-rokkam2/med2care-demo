import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto flex items-center justify-between p-4">
                <Link to="/" className="text-xl font-semibold text-blue-600">
                    Med2Care
                </Link>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="text-gray-700 hover:text-blue-800">Home</Link>
                    </li>
                    <li>
                        <Link to="/mission" className="text-gray-700 hover:text-blue-800">Mission</Link>
                    </li>
                    <li>
                        <Link to="/features" className="text-gray-700 hover:text-blue-800">Features</Link>
                    </li>
                    <li>
                        <Link to="/business" className="text-gray-700 hover:text-blue-800">Business</Link>
                    </li>
                    <li>
                        <Link to="/roadmap" className="text-gray-700 hover:text-blue-800">Roadmap</Link>
                    </li>
                    <li>
                        <Link to="/team" className="text-gray-700 hover:text-blue-800">Team & Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}