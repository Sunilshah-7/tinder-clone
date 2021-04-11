import React from 'react';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css';
function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonPinIcon fontSize="large" className="header_icon"/>
            </IconButton>
            <img 
                className="header_logo"
                src="https://p.kindpng.com/picc/s/19-195266_tinder-icon-2017-logo-vector-gradient-tinder-logo.png"
                alt="tinder"
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header_icon"/>
            </IconButton>
        </div>
    );
}

export default Header;
