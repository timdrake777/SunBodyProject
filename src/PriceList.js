import React, { useState } from 'react'


const PriceList = ({ onChange }) => {
    const position_names = ['Ручной массаж', 'Коррекция фигуры', 'SPA-процедуры', 'Лицо', 'NEW массажи', 'Аппаратный массаж', 'Детский массаж','Шугаринг женский','Шугаринг мужской'];
    const [currentBtn, setCurrentBtn] = useState(position_names[0])

    const setData = (name) => {
        setCurrentBtn(name)
        onChange(name)
    }

    const makeActive = (index) => {
        if (index === currentBtn){
            return "price-element active-price"
        }
        else {
            return "price-element"
        }
    }

    const positionList = position_names.map((name) => 
    <div className={makeActive(name)} key={name} onClick={() => {setData(name)}}>
        <h3>{name}</h3>
    </div>
    );



    return (
        <div className='position-list-box'>
            {positionList}
        </div>
    )
}

export default PriceList;