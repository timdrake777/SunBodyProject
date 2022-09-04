import React from 'react';
import {HiOutlineMenuAlt3} from 'react-icons/hi'

const HeaderBar = ({setActiveMenu,activeMenu}) => {

    const sideBar = (activeMenu) => {
        setActiveMenu(!activeMenu)
    }

    return (
        <header>
            <div className="menu">
                <div className="logo-box">
                    <img src="/img/logo.png" alt="Логотип SunBody" />
                    <h3 className='logo' style={{ fontFamily: 'Vollkorn', fontWeight: '600'}}>SUNBODY</h3>
                </div>
                <ul>
                    <li>Адреса салонов</li>
                    <li>Услуги</li>
                    <li>Мастера</li>
                </ul>
                <a href="tel:+79034437476" className="menu-phone">+7 903 443 74 76</a>
                <button onClick={() => sideBar(activeMenu)}>
                    <HiOutlineMenuAlt3></HiOutlineMenuAlt3>
                </button>
            </div>
        </header>
    );
};

export default HeaderBar;