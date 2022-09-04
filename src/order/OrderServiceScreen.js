import React, { useState } from "react";
import ServiceList from "./service/ServiceList";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const OrderServiceScreen = ({onChange, setService}) => {

    const setData = (title,screen) => {
        setService(title)
        onChange(screen)
    }

    const Pulse = styled.div`animation: 1s ${keyframes`${fadeIn}`}`;

    const nextScreen = 'SexScreen'

    const services_array = [
        {
            id: 0,
            name:'Общий массаж',
            time:'60 минут',
            cost: '1500₽'
        },
        {
            id: 1,
            name:'Общий массаж',
            time:'90 минут',
            cost: '2000₽'
        },
        {
            id: 2,
            name:'Спортивный массаж',
            time:'60 минут',
            cost: '1500₽'
        },
        {
            id: 3,
            name:'Массаж спины',
            time:'30 минут',
            cost: '1000₽'
        },
        {
            id: 4,
            name:'Шейно-воротниковая зона',
            time:'30 минут',
            cost: '800₽'
        },
        {
            id: 5,
            name:'Массаж ног (стоп и голени)',
            time:'30 минут',
            cost: '800₽'
        },
        {
            id: 6,
            name:'Массаж ног ( стоп, голени, бёдра, ягодицы)',
            time:'40 минут',
            cost: '2000₽'
        }
    ]

    const services_array2 = [
        {
            id: 0,
            name:'Лимфодренажный массаж',
            time:'60 минут',
            cost: '1500₽'
        },
        {
            id: 1,
            name:'Антицеллюлитный массаж (ноги, ягодицы, бедра)',
            time:'40 минут',
            cost: '1400₽'
        },
        {
            id: 2,
            name:'Антицеллюлитный массаж (дополнительно живот, спина)',
            time:'60 минут',
            cost: '1500₽'
        },
        {
            id: 3,
            name:'Массаж спины',
            time:'30 минут',
            cost: '1000₽'
        },
        {
            id: 4,
            name:'Шейно-воротниковая зона',
            time:'30 минут',
            cost: '800₽'
        },
        {
            id: 5,
            name:'Массаж ног (стоп и голени)',
            time:'30 минут',
            cost: '800₽'
        },
    ]

    const services_array3 = [
        {
            id: 0,
            name:'Расслабляющий массаж',
            time:'60 минут',
            cost: '1500₽'
        },
        {
            id: 1,
            name:'Массаж в 4 руки',
            time:'60 минут',
            cost: '2500₽'
        },
        {
            id: 2,
            name:'Парный массаж',
            time:'60 минут',
            cost: '2500₽'
        },
        {
            id: 3,
            name:'Скрабирование всего тела',
            time:'30 минут',
            cost: '1000₽'
        },
    ]

    const services_array4 = [
        {
            id: 0,
            name:'Классический массаж лица',
            time:'30 минут',
            cost: '1000₽'
        },
        {
            id: 1,
            name:'Классический массаж лица + ГУАША',
            time:'40 минут',
            cost: '1400₽'
        },
        {
            id: 2,
            name:'Фейслифтинг: массаж + ГУАША + золотая игла + тейпы',
            time:'Уточните у менеджера',
            cost: '2500₽'
        },
        {
            id: 3,
            name:'Тейпирование лица',
            time:'Уточните у менеджера',
            cost: '600₽ - 1000₽'
        },
        {
            id: 4,
            name:'Тейпирование тела',
            time:'Уточните у менеджера',
            cost: '1000₽ - 1200₽'
        },
        {
            id: 5,
            name:'Радиолифтинг лица',
            time:'40 минут',
            cost: '1200₽'
        },
    ]

    const services_array5 = [
        {
            id: 1,
            name:'Баночный массаж 5 стихий',
            time:'60 минут',
            cost: '1500₽'
        },
        {
            id: 2,
            name:'Огненный массаж',
            time:'60 минут',
            cost: '1800₽'
        },
        {
            id: 3,
            name:'Моксотерапия сигарами',
            time:'30 минут',
            cost: '1500₽'
        },
        {
            id: 4,
            name:'Массаж Туйна',
            time:'120 минут',
            cost: '2500₽'
        },
        {
            id: 5,
            name:'Фитнес корректирующий массаж',
            time:'60 минут',
            cost: '1800₽'
        },
    ]

    const services_array6 = [
        {
            id: 0,
            name:'Выбрационный аппарат Turbo J 5',
            time:'30 минут',
            cost: '600₽'
        },
        {
            id: 1,
            name:'Выбрационный аппарат Turbo J 5',
            time:'60 минут',
            cost: '900₽'
        },
        {
            id: 2,
            name:'Ваккумный массаж (бедра, ягодицы)',
            time:'Уточните у менеджера',
            cost: '900₽'
        },
        {
            id: 3,
            name:'Ваккумный массаж (дополнительно живот и бока)',
            time:'Уточните у менеджера',
            cost: '1200₽'
        },
        {
            id: 4,
            name:'RF (бедра и ягодицы)',
            time:'Уточните у менеджера',
            cost: '900₽'
        },
        {
            id: 5,
            name:'RF (дополнительно живот и бока)',
            time:'60 минут',
            cost: '1200₽'
        },
        {
            id: 6,
            name:'Кавитация 1 зона',
            time:'Уточните у менеджера',
            cost: '500₽'
        },
    ]

    const services_array7 = [
        {
            id: 0,
            name:'До 12 лет',
            time:'Уточните у менеджера',
            cost: '800₽'
        },
        {
            id: 1,
            name:'С 13 лет',
            time:'Уточните у менеджера',
            cost: '1000₽'
        },
    ]
    const services_array8 = [
        {
            id: 0,
            name:'Бикини классика',
            time:'Уточните у менеджера',
            cost: '900₽'
        },
        {
            id: 1,
            name:'Глубокое бикини',
            time:'Уточните у менеджера',
            cost: '1200₽'
        },
        {
            id: 2,
            name:'Ноги',
            time:'Уточните у менеджера',
            cost: '1400₽'
        },
        {
            id: 3,
            name:'Голени',
            time:'Уточните у менеджера',
            cost: '700₽'
        },
        {
            id: 4,
            name:'Бедра',
            time:'Уточните у менеджера',
            cost: '700₽'
        },
        {
            id: 5,
            name:'Руки',
            time:'Уточните у менеджера',
            cost: '900₽'
        },
        {
            id: 6,
            name:'Руки до локтя',
            time:'Уточните у менеджера',
            cost: '600₽'
        },
        {
            id: 7,
            name:'Подмышки',
            time:'Уточните у менеджера',
            cost: '500₽'
        },
        {
            id: 8,
            name:'Лицо',
            time:'Уточните у менеджера',
            cost: '700₽'
        },
        {
            id: 9,
            name:'Усики',
            time:'Уточните у менеджера',
            cost: '300₽'
        },
    ]

    const [services, setServices] = useState(services_array)

    const position_names = ['Ручной массаж', 'Коррекция фигуры', 'SPA-процедуры', 'Лицо', 'NEW массажи', 'Аппаратный массаж', 'Детский массаж','Шугаринг женский','Шугаринг мужской'];

    const handleNameChange = (titleTemp) =>{
        if (titleTemp === 'Ручной массаж'){
            setServices(services_array)
        }
        else if (titleTemp === position_names[1]){
            setServices(services_array2)
        }
        else if (titleTemp === position_names[2]){
            setServices(services_array3)
        }
        else if (titleTemp === position_names[3]){
            setServices(services_array4)
        }
        else if (titleTemp === position_names[4]){
            setServices(services_array5)
        }
        else if (titleTemp === position_names[5]){
            setServices(services_array6)
        }
        else if (titleTemp === position_names[6]){
            setServices(services_array7)
        }
        else if (titleTemp === position_names[7]){
            setServices(services_array8)
        }
        else if (titleTemp === position_names[8]){
            setServices(services_array8)
        }
    }

    const TestRender = ({serviceArray}) => {
        return (serviceArray.map((service) => 
        <div className="order-service-container" key={service.id} onClick={() => setData(service.name, nextScreen)}>
            <div className="order-service-container-text-block">
                <h1>{service.name}</h1>
                <h3>{service.time}</h3>
            </div>
            <h3 className="service-price">{service.cost}</h3>
        </div>
        ))
    }

    return (
        <>
            <Pulse style={{width: '100%'}}>
                <div className="service-container">
                    <h1 className="service-title">Выберите массаж</h1>
                    <ServiceList onChange={handleNameChange}></ServiceList>
                    <div className="service-section">
                        <TestRender serviceArray={services}/>
                    </div>
                </div>
            </Pulse>

        </>
    )
}

export default OrderServiceScreen