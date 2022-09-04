import React, { useState } from "react";
import Calendar from 'react-calendar'
import '../Calendar.css'
import TimePicker from "./TimePicker";
import axios from "axios";

const OrderDateScreen = ({onChange,setDate,setTime,name,phone,service,time}) => {

    const [dates,setDateTemp] = useState(new Date());
    const [data, setData] = useState();

    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      };

    var dateLocale = dates.toLocaleString("ru", options)

    const dateSetter = (data) => {
        setDateTemp(data)
        let dateTest = data.toLocaleString("ru", options)
        setDate(dateTest)
        setDateTemp(dateTest)
        let date = dateTest
        let order = {name,date,time,phone,service}
        axios.post(`https://api.sun-body.ru/main`, order)
      .then(res => {
        console.log(res);
      })
        onChange('SuccsesScreen')
    }


    return (
        <>
            <h1 className="order-date-title">Выберите дату и время</h1>
            <div className="data-section">
                <Calendar onChange={setDateTemp} value={dates}/>
                <TimePicker onChange={setTime}></TimePicker>
            </div>
            <button className="order-btn" onClick={() => dateSetter(dates,dateLocale)} style={{marginTop: '20px'}}>Записаться</button>
        </>
    )
}

export default OrderDateScreen