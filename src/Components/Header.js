import React from 'react';
import Nav from './Nav';
import SearchForm from './SearchForm';

const Header = () => {
    return (
        <div className="nav-container">
            <SearchForm />
            <Nav />
        </div>
    );
}
 
export default Header;