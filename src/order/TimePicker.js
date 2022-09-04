import React, { useState } from "react";

const TimePicker = ({onChange}) => {

    const timeData = [
        {
            id: 1,
            time: '8:00'
        },
        {
            id: 2,
            time: '9:00'
        },
        {
            id: 3,
            time: '10:00'
        },
        {
            id: 4,
            time: '11:00'
        },
        {
            id: 5,
            time: '12:00'
        },
        {
            id: 6,
            time: '13:00'
        },
        {
            id: 7,
            time: '14:00'
        },
        {
            id: 8,
            time: '15:00'
        },
        {
            id: 9,
            time: '16:00'
        },
        {
            id: 10,
            time: '17:00'
        },
        {
            id: 11,
            time: '18:00'
        },
        {
            id: 12,
            time: '19:00'
        },
        {
            id: 13,
            time: '20:00'
        },
        {
            id: 14,
            time: '21:00'
        }
    ]

    
    const [currentBtn, setCurrentBtn] = useState()

    const setButton = (index, time) => {
        setCurrentBtn(index)
        onChange(time)
    }

    const makeActive = (index) => {
        if (index === currentBtn){
            return "timeBlock active"
        }
        else {
            return "timeBlock"
        }
    }

    const TimeList = ({timeData}) => {
        return (timeData.map((timeBlock) => 
    <div className={makeActive(timeBlock.id)} key={timeBlock.id} onClick={() => setButton(timeBlock.id, timeBlock.time)} data-index={timeBlock.id}>
        <h4>{timeBlock.time}</h4>
    </div>
        ))
    }


    return (
        <div className="time-picker">
            <TimeList timeData={timeData}/>
        </div>
    )

}

export default TimePicker