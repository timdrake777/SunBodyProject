import React from "react";
import video from './video/video.mp4'
import video2 from './video/video2.mp4'
import play from './images/play-button.svg'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ad from './video/ad.MOV'
import {AiOutlineClose} from 'react-icons/ai'

const About = () => {
    return (
        <div className="main-container">
            <div className="about-section">
                <div className="about-video">
                    <video src={video} type="video/mp4" loop autoPlay muted width='280px' height='500px' style={{borderRadius: '80px 0 80px 0', marginTop: '40px'}}/>
                    <video src={video2} type="video/mp4" loop autoPlay muted width='280px' height='500px' style={{borderRadius: '0px 80px 0 80px', marginTop: '40px'}}/>
                </div>
                <div className="about-text">
                    <h1>О нас</h1>
                    <p>Студия массажа Sunbody оказывает широкий спектр услуг массажа и всё для того, чтобы наши клиенты были здоровыми и счастливыми</p>
                    <ul className="about-list">
                        <li>Ручной и аппаратный массаж</li>
                        <li>SPA процедуры</li>
                        <li>Комплексные программы похудения</li>
                        <li>Хиджама</li>
                        <li>Фейслифтинг лица</li>
                        <li>Детский массаж</li>
                    </ul>
                    <Popup trigger={<button className="about-btn">
                        <img src={play} alt="" />
                        <h3>Посмотрите ролик о нас</h3>
                    </button>} modal nested>
                        {close => (
                            <>
                                <button className="modal-video-close-btn" onClick={close}><AiOutlineClose /></button>
                                <video src={ad} type="video/mp4" width="100%" height="100%" controls autoPlay></video>
                            </>
                        )}
                    </Popup>
                </div>
            </div>
        </div>
    )
}

export default About