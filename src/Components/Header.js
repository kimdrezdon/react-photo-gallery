import React from 'react';
import Nav from './Nav';
import SearchForm from './SearchForm';

const Header = (props) => {
    return (
        <div className="nav-container">
            <SearchForm history={props.history} onSearch={props.onSearch}/>
            <Nav />
        </div>
    );
}
 
export default Header;