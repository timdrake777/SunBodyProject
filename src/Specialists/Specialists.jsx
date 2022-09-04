import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Specialists = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
              ,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      };

    const specList = 
    [
        {
            id: 0,
            name: 'Приметова Анастасия',
            exp: '1 год',
            description: 'Квалифицированный специалист со стажем',
            photo: '0.jpeg',
            sertificate: '',
        },
        {
            id: 1,
            name: 'Симонян Анаит',
            exp: '3 года',
            description: 'Дипломированный массажист со стажем',
            photo: '1.jpeg',
            sertificate: '',
        },
        {
            id: 2,
            name: 'Мачиев Расул',
            exp: '20 лет',
            description: 'Член ассоциации специалистов восточной медицины. Действующий сертификаты. Аккредитация.',
            photo: '2.jpg',
            sertificate: '',
        },
        {
            id: 3,
            name: 'Прибинская Юлия',
            exp: '5 лет',
            description: 'Скоро',
            photo: '4.jpg',
            sertificate: '',
        },
        {
            id: 4,
            name: 'Задорожный Вячеслав',
            exp: '6 лет',
            description: 'Высшее образование: СК Академия Государственной Службы. Среднее специальное: ГБПОУ СК Ставропольское училище олимпийского резерва. Дополнительное образование',
            photo: '8.jpg',
            sertificate: '',
        },
        {
            id: 5,
            name: 'Наценко Артем',
            exp: '3 года',
            description: 'Дипломированный массажист  с трехлетним стажем и  медицинским  образованием. Проводит комплексный массаж, который положительно воздействует как на поверхностные так и на глубокие кожные и мышечные ткани.',
            photo: '6.jpg',
            sertificate: '',
        },
        {
            id: 6,
            name: 'Ломов Станислав',
            exp: '5 лет',
            description: 'Поработал тренером по фехтованию. С 2017 года работаю массажистом и в течении всего этого времени с радостью набирался опыта и знаний чтобы эффективно помогать людям',
            photo: '3.jpg',
            sertificate: '',
        },
        {
            id: 7,
            name: 'Довголенко Елена',
            exp: '5 лет',
            description: 'Скоро',
            photo: '5.jpg',
            sertificate: '',
        },
        {
            id: 8,
            name: 'Кузнецов Евгений',
            exp: '4 года',
            description: 'Скоро',
            photo: '7.jpg',
            sertificate: '',
        },
    ]

    return (
            <section className="specialists">
                <div className="specialist-text-box">
                    <h1 className='specialists-title'>НАШИ СПЕЦИАЛИСТЫ</h1>
                    <h3 className='specialists-desc '>В зависимости от индивидуальных особенностей клиента, наши специалисты подберут для Вас специально разработанную программу, чтобы Вы получили желаемый результатю</h3>
                </div>
                <Slider {...settings}>
                {specList.map(spec => 
                <div className="specialists-info-box" key={spec.id}>
                    <img src={`/img/Specialists/${spec.photo}`} alt="" />
                    <div className="specialist-box-text">
                        <h3 className='specialists-exp'>Стаж работы {spec.exp}</h3>
                        <h1 className='specialists-name'>{spec.name}</h1>
                        <p className='specialists-description'>{spec.description}</p>
                    </div>
                </div>
            )}
            </Slider>
            </section>
            
        
    );
};

export default Specialists;