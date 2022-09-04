import React from "react";

const ServiceList = ({onChange}) =>{

    const position_names = ['Ручной массаж', 'Коррекция фигуры', 'SPA-процедуры', 'Лицо', 'NEW массажи', 'Аппаратный массаж', 'Детский массаж','Шугаринг женский','Шугаринг мужской']

    const positionList = position_names.map((name) => 
    <div className='service-block' key={name} onClick={() => {onChange(name)}}>
        <h3>{name}</h3>
    </div>
    );



    return (
        <div className='services-list-box'>
            {positionList}
        </div>
    )

}

export default ServiceList