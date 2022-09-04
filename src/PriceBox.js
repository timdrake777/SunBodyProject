import React from 'react'
import styled, { keyframes } from 'styled-components';
import { merge, fadeIn, pulse } from 'react-animations';


const PriceBox = ({ title }) => {
    
    const priceing = ['Ручной массаж', 'Коррекция фигуры', 'SPA-процедуры', 'Лицо', 'NEW массажи', 'Аппаратный массаж', 'Детский массаж','Шугаринг женский','Шугаринг мужской'];
    var check = title
    
    const fadeZoomIn = merge(fadeIn,pulse)

    const Pulse = styled.div`animation: 1s ${keyframes`${fadeZoomIn}`}`;

    const priceList = [
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

    const priceList2 = [
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

    const priceList3 = [
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

    const priceList4 = [
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

    const priceList5 = [
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

    const priceList6 = [
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

    const priceList7 = [
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
    const priceList8 = [
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

    const priceList9 = [
        {
            id: 0,
            name:'Спина',
            time:'Время уточните у менеджера',
            cost: '700₽ - 2000₽'
        },
        {
            id: 1,
            name:'Подмышки',
            time:'Время уточните у менеджера',
            cost: '700₽ - 1000₽'
        },
        {
            id: 2,
            name:'Лицо',
            time:'Время уточните у менеджера',
            cost: '700₽ - 1500₽'
        },
    ]

    const setPositions = (priceList) => {
        return (priceList.map((section)=>
            <div className="price-box-section" key={section.id}>
                <div className="name-section">
                    <h3>{section.name}</h3>
                    <p>{section.time}</p>
                </div>
                <h3 className='price-box-price'>{section.cost}</h3>
            </div>
        ))
    }

    function setInfo(check){
        if (title === priceing[0]){
            return(
                <Pulse className='pulse-section'>  
                <div className='price-box'>                    
                    {setPositions(priceList)}
                </div>
                </Pulse>
            )
        }
        else if (title === priceing[1]){
            return(
                <Pulse className='pulse-section'>  
                <div className='price-box'> 
                    {setPositions(priceList2)}
                </div>
                </Pulse>  
            )
        }
        else if (title === priceing[2]){
            return(
                <Pulse className='pulse-section'>  
                <div className='price-box'>
                    {setPositions(priceList3)}
                </div>
                </Pulse>
            )
        }
        else if (title === priceing[3]){
            return(
                <Pulse className='pulse-section'>  
                <div className='price-box'>
                    {setPositions(priceList4)}
                </div>
                </Pulse>
                
            )
        }
        else if (title === priceing[4]){
            return(
                <Pulse className='pulse-section'>  
                <div className='price-box'>
                    {setPositions(priceList5)}
                </div>
                </Pulse>
            )
        }
        else if (title === priceing[5]){
            return(
                <Pulse className='pulse-section'>  
                <div className='price-box'>
                 {setPositions(priceList6)}
                </div>
                </Pulse>
            )
        }
        else if (title === priceing[6]){
            return(
                <Pulse className='pulse-section'>  
                <div className='price-box'>
                    {setPositions(priceList7)}
                </div>
                </Pulse>
            )
        }
        else if (title === priceing[7]){
            return(
                <Pulse className='pulse-section'>  
                <div className='price-box'>
                    {setPositions(priceList8)}
                </div>
                </Pulse>
            )
        }
        else if (title === priceing[8]){
            return(
                <Pulse className='pulse-section'>  
                <div className='price-box'>
                    {setPositions(priceList9)}
                </div>
                </Pulse>
            )
        }
        else {
            return(
                <Pulse className='pulse-section'>  
                <div className='price-box'>
                    {setPositions(priceList)}
                </div>
                </Pulse>
            )
        }
    }

    return setInfo(check)

}

export default PriceBox;