import React, { useState } from "react";

const OrderSurnameScreen = ({onChange,setName,setPhone}) => {

    const [nameTemp,setNameTemp] = useState()
    const [phoneTemp,setPhoneTemp] = useState()
    const nextScreen = 'ServiceScreen'
    
    const setData = (name,phone,screen) => {
        setName(name)
        setPhone(phone)
        onChange(screen)
    }

    return (
        <>
            <div className="surname-header">
                <h1 className="surname-article">Запишитесь на массаж</h1>
                <span className="pulse"></span>
            </div>
            <div className="inputs-container">
                <input type='text' onChange={(e) => setNameTemp(e.target.value)} placeholder='Введите имя'></input>
                <input type='text' onChange={(e) => setPhoneTemp(e.target.value)} placeholder='Введите ваш телефон'></input>
                <button className='order-btn' disabled={!(nameTemp && phoneTemp)} onClick={() => setData(nameTemp,phoneTemp,nextScreen)}>Eщё 2 клика и все</button>
            </div>
        </>
    )
}

export default OrderSurnameScreen