import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Form Builder</h1>
        <nav>
          <Link to="home/" className="mr-4">Home</Link>
          <Link to="/login" className="mr-4">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
