import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Import your custom CSS
import MenuIcon from '@mui/icons-material/Menu'; // Importing Material-UI icons
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar'; // Importing Material-UI Avatar

const Header = () => {
  return (
    <header className="header">

      {/* Header Info Section */}
      <div className="container">
        <MenuIcon className="header-icon" aria-label="Menu" />
        <div className="logo-container">
          <img src="image/icon.png" alt="App Icon" className="header-logo" />
          <span className="header-title">Form Builder</span>
        </div>
        
        {/* Header Search Section */}
        <div className="header-search">
          <SearchIcon className="header-icon" aria-label="Search" />
          <input
            type="text"
            className="search-input"
            placeholder="Search forms..."
          />
        </div>

        {/* Header Right Section */}
        <div className="header-right">
          <AppsIcon className="header-icon" aria-label="Apps" />
          <Avatar alt="User Avatar" src="image/profile.png" className="user-avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
