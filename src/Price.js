import React, { useState } from 'react'
import PriceList from './PriceList';
import PriceBox from './PriceBox';
import { CSSTransition } from 'react-transition-group';



const Price = () => {

    const [title, setTitle] = useState('Ручной массаж')
    const [show, setShow] = useState(true)

    const handleNameChange = (title) => {
        setTitle(title)
        setShow(true)
    }

    return (
        <>
        <h1 className='price-title-text'>ПРАЙС ЛИСТ</h1>
        <div className='price-section'>
            <PriceList onChange={handleNameChange}></PriceList>
            <CSSTransition in={show} classNames='alert' timeout={300} unmountOnExit>
                <PriceBox title={title}></PriceBox>
            </CSSTransition>
        </div>
        </>
    )
}

export default Price;