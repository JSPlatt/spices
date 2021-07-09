import React from 'react'
import './Header.css'
import BookIcon from '@material-ui/icons/Book';
import StorefrontIcon from '@material-ui/icons/Storefront';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img className="header__logo" src="https://i.pinimg.com/originals/d0/6c/0a/d06c0a9aa3c2dd0edefa630f55c9449d.jpg" alt="site logo"/>

            </div>

            <div className="header__center">
                    <BookIcon/>
                    <StorefrontIcon/>
            </div>

            <div className="header__right">
                Right
            </div>
        </div>
    )
}

export default Header
