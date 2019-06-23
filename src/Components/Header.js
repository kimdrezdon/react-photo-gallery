import React from 'react';
import Nav from './Nav';
import SearchForm from './SearchForm';

const Header = (props) => {
    return (
        <div className="nav-container">
            <h1>Travel Inspiration Photo Gallery</h1>
            <SearchForm history={props.history} onSearch={props.onSearch}/>
            <Nav />
        </div>
    );
}
 
export default Header;