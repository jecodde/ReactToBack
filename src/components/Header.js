import React from 'react'
import PropTypes from 'prop-types';

const Header = (props) => {
    const {branding} = props;
  return (
   <nav className="nav navbar navbar-expand-sm 
   navbar-dark bg-danger mb-3 py-0 ">
    <div className="container">
    <a href="/" className="navbar-brand">
        {branding}</a>
    <div>
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
        </li>
            <a href="/" className="nav-link">Home</a>
        </ul>
    </div>
    </div>      
   </nav> 
    
  )
}

// Header.defaultProps={
//     branding:'Contact Manager'
// }
Header.propTypes ={
    branding: PropTypes.string.isRequired
}


export default Header;