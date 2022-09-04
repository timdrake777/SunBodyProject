import React from 'react';
import {AiTwotonePhone,AiOutlineClose} from 'react-icons/ai'

const MobileMenu = ({activeMenu,setActiveMenu}) => {

    const setMenu = (active) => {
        if (active){
            return "nav-menu active"
        }
        else {
            return "nav-menu"
        }
    } 

    return (
        <div className={setMenu(activeMenu)}>
            <div className="nav-bar-box">
                <div className="nav-header">
                    <h3 className='logo' style={{ fontFamily: 'Vollkorn', fontWeight: '600'}}>SUNBODY</h3>
                    <div className="nav-buttons">
                        <button style={{marginRight: '10px'}}><AiTwotonePhone></AiTwotonePhone></button>
                        <button onClick={() => setActiveMenu(false)}><AiOutlineClose /></button>
                    </div>
                </div>
                <ul>
                    <li>Адреса салонов</li>
                    <li>Услуги</li>
                    <li>Мастера</li>
                </ul>
                <div className="nav-adress-box">
                    <h2>Адрес</h2>
                    <h3>ул. Крайнего 49, «Деловой бизнес центр», 4 этаж (408 каб) </h3>
                </div>
                <div className="time-of-work">
                    <h2>Время работы</h2>
                    <h3>9:00 - 19:00</h3>
                </div> 
            </div>          
        </div>
    );
};

export default MobileMenu;