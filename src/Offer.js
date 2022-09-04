import React from 'react';
import image from './images/new-offer.jpg'
import FirstComeOffer from './components/services/price-lists/FirstComeOffer';
import Popup from 'reactjs-popup';
import {AiOutlineClose} from 'react-icons/ai'
import './Popup.css'

const Offer = () => {
    return (
        <div className='offer-section'>
            <div className="offer-text">
                <h1>Запишитесь на первый пробный массаж</h1>
                <h3>В зависимости от индивидуальных особенностей клиента, наши специалисты подберут специально разработанную программу, чтобы каждый получил желаемый результат!</h3>
                <Popup trigger={<button className="offer-btn">Записаться</button>} modal nested>
                        {close => (
                            <>
                                <button className="modal-video-close-btn" onClick={close}><AiOutlineClose /></button>
                                <FirstComeOffer/>
                            </>
                        )}
                </Popup>
            </div>
            <div className="offer-img">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Offer;