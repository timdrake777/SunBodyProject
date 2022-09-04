import React from "react";

export const OrderChooseSex = () => {
    return (
        <>
        <h1 className="order-date-title">Выберите пол массажиста</h1>
            <div className="sex-container">
                <input type="radio" name="sex" id="sexMale"/>
                <label for="sexMale">Мужской</label>
                <input type="radio" name="sex" id="sexFemale"/>
                <label for="sexFemale">Женский</label>
            </div>
        </>
    )
}