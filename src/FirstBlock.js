import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Order from './order/Order'
import {AiOutlineClose} from 'react-icons/ai'

const FirstBlock = () => {
    return (
        <>
        <section className="first-block">
            <div className="first-block-left">
                <h1>Студия массажа и красоты в Пятигорске</h1>
                <h3>Расслабляющая атмосфера, квалифицированные специалисты и приятные цены! Мы делаем всё для того, чтобы наши гости были здоровыми и счастливыми. </h3>
                <div className="header-buttons">
                    <Popup trigger={<button className="btn-1-header">Записаться</button>} modal nested>
                        {close => (
                            <>
                                <button className="modal-video-close-btn" onClick={close}><AiOutlineClose /></button>
                                <Order></Order>
                            </>
                        )}
                    </Popup>
                </div>
            </div>
            <div className="header-photo">
            </div>
        </section>
    </>
    );
};

export default FirstBlock;