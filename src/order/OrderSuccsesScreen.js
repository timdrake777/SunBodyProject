import React from "react";

const OrderSuccsesScreen = ({name,date,time}) => {

    return (
        <div className="succses-block">
            <h1 className="succses-title">{name}, вы успешно записаны!</h1>
            <h1 className="succses-date">Дата посещения - {date}</h1>
            <h1 className="succses-time">Время - {time}</h1>
        </div>
    )
}

export default OrderSuccsesScreen