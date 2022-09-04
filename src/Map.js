import React from "react";

const Map = () =>{
    return (
            <div className="map-section">
            <div className="map-text">
                <div className="map-text-zag">
                ВСЕГДА РАДЫ ВАС ВИДЕТЬ
                </div>
                <div className="map-text-1">
                    <h3>Адрес</h3>
                    <p>ул. Крайнего 49, «Деловой бизнес центр», 4 этаж (408 каб) </p>
                </div>
                <div className="map-text-2">
                    <h3>Время работы</h3>
                    <p>8:00 - 21:00</p>
                </div>
                <div className="map-text-3">
                    <h3>Телефон</h3>
                    <p>+7 (903) 443-74-76</p>
                </div>
            </div>
            <div className="map-card">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2657d6b8b3e704a94af0f5f90cc0352d682fdca07def7d323135c47e5f10fee5&amp;source=constructor" width="100%" height="400" frameBorder="0" title="Yandex Map"></iframe>
            </div>
        </div>
    )
}

export default Map