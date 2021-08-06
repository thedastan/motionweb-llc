import React from 'react';
import S1 from './img/s1.png'
import S2 from './img/s2.png'


const Service1 = () => {
    return (
        <section id="service1">
            <div className="container">
                <h1 className="works__title">Наши услуги</h1>
                <div className="row">
                    <div className="row display-flex justify-content-between">
                        <div className="col-lg-4" data-aos="fade-up"
                             data-aos-duration="1000">
                            <div className="service_block">
                                <img src={S1} alt=""/>
                                    <span>Landing-page</span>
                                    <h3>С учетом поведенческих факторов разработаем рекламно-презентационную страницу
                                        побуждающую
                                        пользователя к совершению целевого действия — заказ, звонок, заявка.</h3>
                                    <div className="service-bl">
                                        <h3>Стоимость:</h3>
                                        <p className="service_bl-p">от 35 000 сом</p>
                                    </div>
                                    <div className="service_reg">
                                        <button type="button">Заказать</button>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up"
                             data-aos-duration="1000">
                            <div className="service_block">
                                <img src={S2} alt=""/>
                                    <span>Корпоративный сайт</span>
                                    <h3>Разработаем презентационный сайт компании, презентационный сайт компании,
                                        представив ваши
                                        преимущества, услуги и продукты в понятном, структурированном и визуально
                                        привлекательном
                                        виде.</h3>
                                    <div className="service-bl">
                                        <h3>Стоимость:</h3>
                                        <p className="service_bl-p">от 55 000 сом</p>
                                    </div>
                                    <div className="service_reg">
                                        <button type="button">Заказать</button>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up"
                             data-aos-duration="1000">
                            <div className="service_block">
                                <img src={S2} alt=""/>
                                    <span>Сайт-визитка</span>
                                    <h3>Создадим простой, стильный и лаконичный сайт для адекватной презестильный и
                                        лаконичный сайт
                                        для адекватной презентации вашей компании и ее возможностей в
                                        web-пространстве.</h3>
                                    <div className="service-bl">
                                        <h3>Стоимость:</h3>
                                        <p className="service_bl-p">от 15 000 сом</p>
                                    </div>
                                    <div className="service_reg">
                                        <button type="button">Заказать</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="row display-flex justify-content-between">
                        <div className="col-lg-4" data-aos="fade-up"
                             data-aos-duration="1000">
                            <div className="service_block">
                                <img src={S1} alt=""/>
                                    <span>Сайт каталог</span>
                                    <h3>Воплотим весь ваш товарный каталог в формат структурированного и единообразно
                                        заполненного
                                        сайта с широкими возможностями поиска и фильтрации.</h3>
                                    <div className="service-bl">
                                        <h3>Стоимость:</h3>
                                        <p className="service_bl-p">от 45 000 сом</p>
                                    </div>
                                    <div className="service_reg">
                                        <button type="button">Заказать</button>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up"
                             data-aos-duration="1000">
                            <div className="service_block">
                                <img src={S2} alt=""/>
                                    <span>Интернет-магазин</span>
                                    <h3>Создадим интернет-магазин, учитывающий особенности ваших товаров учитывающий
                                        особенности
                                        ваших товаров и полностью готовый к SEO-продвижению, рекламным кампаниям и
                                        онлайн-продажам.</h3>
                                    <div className="service-bl">
                                        <h3>Стоимость:</h3>
                                        <p className="service_bl-p">от 55 000 сос</p>
                                    </div>
                                    <div className="service_reg">
                                        <button type="button">Заказать</button>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up"
                             data-aos-duration="1000">
                            <div className="service_block">
                                <img src={S2} alt=""/>
                                    <span>Фирменный стиль</span>
                                    <h3>Разработаем уникальный фирменный стиль, транслирующий нужныеирменный стиль,
                                        транслирующий
                                        нужные смысловые ассоциации вашим клиентам. Цельный и единый образ компании на
                                        всех
                                        носителях.</h3>
                                    <div className="service-bl">
                                        <h3>Стоимость:</h3>
                                        <p className="service_bl-p">от 35 000 сом</p>
                                    </div>
                                    <div className="service_reg">
                                        <button type="button">Заказать</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="row display-flex justify-content-between">
                        <div className="col-lg-4" data-aos="fade-up"
                             data-aos-duration="1000">
                            <div className="service_block">
                                <img src={S2} alt=""/>
                                    <span>Поддержка сайтов</span>
                                    <h3>Внедрим на сайт новые блоки и функционал по мере его развития, поможем с
                                        обновлением
                                        контента в активных разделах, разберемся с техническими проблемами.</h3>
                                    <div className="service-bl">
                                        <h3>Стоимость:</h3>
                                        <p className="service_bl-p">от 11 100 сом</p>
                                    </div>
                                    <div className="service_reg">
                                        <button type="button">Заказать</button>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up"
                             data-aos-duration="1000">
                            <div className="service_block">
                                <img src={S2} alt=""/>
                                    <span>Продвижение сайтов</span>
                                    <h3>Создадим постоянный поток целевого трафика из Яндекспоток целевого трафика из
                                        Яндекспоток
                                        целевого трафика из Яндекс и Google, конвертирующийся в реальные заявки.</h3>
                                    <div className="service-bl">
                                        <h3>Стоимость:</h3>
                                        <p className="service_bl-p">от 25 000 сом</p>
                                    </div>
                                    <div className="service_reg">
                                        <button type="button">Заказать</button>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up"
                             data-aos-duration="1000">
                            <div className="service_block">
                                <img src={S1} alt=""/>
                                    <span>Наполнение контентом</span>
                                    <h3>Заполним все товарные карточки и таблицы в ваших каталогахи таблицы в ваших
                                        каталогах,
                                        напишем продающие тексты или вдумчивую аналитику, настроим, отредактируем,
                                        перенесем и
                                        отшлифуем.</h3>
                                    <div className="service-bl">
                                        <h3>Стоимость:</h3>
                                        <p className="service_bl-p">от 20 000 сом</p>
                                    </div>
                                    <div className="service_reg">
                                        <button type="button">Заказать</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
    export default Service1