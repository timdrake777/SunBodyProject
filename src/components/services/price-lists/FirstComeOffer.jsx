import React, {useState} from 'react';
import axios from 'axios';

const FirstComeOffer = () => {

    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [sended, setSended] = useState(false)

    const sendMessage = () => {
        axios.post(`https://api.sun-body.ru/first`, {name,phone})
          .then(res => {
            console.log(res);
        })
        setSended(true)
    }

    return (
        <div className='first_offer-box'>
            
            {sended === false ?
            <div className='first_offer-box'>
                <div className="first_offer-left__section">
                    <h1 className="first_offer-title">Запишитесь на пробный массаж</h1>
                    <h3 className="first_offer-description">В ходе сеанса наши специалисты подберут технику массажа и определят причины боли.</h3>
                    <div className="block-offer-first">
                        <p className="first_offer-time">Длительность - <p className="offer-weight">30 минут</p></p>
                        <p className="first_offer-price">Стоимость - <p className="offer-weight">800 ₽</p></p>
                    </div>
                </div> 
                <div className="first_offer-right__section">
                    <input type="text" placeholder='Ваше имя' onChange={event => setName(event.target.value)}/>
                    <input type="text" placeholder='Ваш телефон' onChange={event => setPhone(event.target.value)}/>
                    <button disabled={!(name&&phone)} onClick={() => sendMessage()}>Eщё 1 клик и все</button>
                </div>
            </div>
            :
            <div className="first_offer-box">
                <div className="first_offer-right__section">
                    <h1 className='first-offer_success-header'>{name}, вы успешно записались!</h1>
                </div>
            </div>
            }
        </div>
    );
};

export default FirstComeOffer;