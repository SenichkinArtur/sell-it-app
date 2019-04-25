import React from 'react';
import { Link } from 'react-router-dom';
import './UserBlock.css';


function UserBlock() {
    
    return (
        <div className="user-block">
            <p className="user-block__text"> Welcome, <Link to="/sign" className="user-block__link">login</Link> or <Link to="/sign" className="user-block__link"> register </Link> for start !</p>
        </div>
    )
}

export default UserBlock;