import React,{useState} from "react";
import OrderDateScreen from "./OrderDateScreen";
import OrderServiceScreen from "./OrderServiceScreen";
import OrderSuccsesScreen from "./OrderSuccsesScreen";
import OrderSurnameScreen from "./OrderSurnameScreen";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { OrderChooseSex } from "./OrderChooseSex";


const Order = () => {

    const [screen,setScreen] = useState('SurnameScreen')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [service, setService] = useState('')
    const [date, setDate] = useState()
    const [time, setTime] = useState('')


    const Pulse = styled.div`animation: 1s ${keyframes`${fadeIn}`}`;

    const handleScreenChange = (screen) => {
        setScreen(screen)
    }
    
    if (screen === 'SurnameScreen'){
        return (
            <Pulse>
            <div className="service-section-box">
                <OrderSurnameScreen onChange={handleScreenChange} setName={setName} setPhone={setPhone}/>
            </div>
            </Pulse>
        )
    }
    else if (screen === 'ServiceScreen'){
        return (
            <Pulse>
            <div className="service-section-box">
                    <OrderServiceScreen onChange={handleScreenChange} setService={setService}/>
                    
            </div>
            </Pulse>
        )
    }
    else if (screen === 'SexScreen'){
        return (
            <Pulse>
            <div className="service-section-box">
                    <OrderChooseSex></OrderChooseSex>
                    
            </div>
            </Pulse>
        )
    }
    else if (screen === 'DateScreen') {
        return (
            <div className="service-section-box">
                <OrderDateScreen onChange={handleScreenChange} setDate={setDate} setTime={setTime} name={name} phone={phone} service={service} date={date} time={time}/>
            </div>
        )
    }
    else if (screen === 'SuccsesScreen'){
        return (
            <Pulse>
            <div className="service-section-box">
                
                <OrderSuccsesScreen onChange={handleScreenChange} name={name} phone={phone} service={service} time={time} date={date}/>
                
            </div>
            </Pulse>
        )
    }
    else return (<h1>Ошибка</h1>)
}

export default Order