import React, {useState} from "react";

import Logo from './img/Logo.png';
import coolicon from './img/coolicon.png';
import Menu from './img/Menu.png';
import Menu_close from './img/menu-close.png';
import Search from './img/Search.png';

import Australia from './img/countries/Australia.png';
import Austria from './img/countries/Austria.png';
import Brazil from './img/countries/Brazil.png';
import Bulgaria from './img/countries/Bulgaria.png';
import Chech from './img/countries/Chech.png';
import Cube from './img/countries/Cube.png';
import Denmark from './img/countries/Denmark.png';
import Greece from './img/countries/Greece.png';
import Egypt from './img/countries/Egypt.png';
import Hungary from './img/countries/Hungary.png';
import Poland from './img/countries/Poland.png';
import Portugal from './img/countries/Portugal.png';
import Russia from './img/countries/Russia.png';
import Spain from './img/countries/Spain.png';
import Turkey from './img/countries/Turkey.png';

import './Header.css';


const Header = () => {

    const onClickMenu = () => {
        const button = document.querySelector('.menu');
        const menu = document.querySelector('.main');

        let buttonState;
        let menuState;

        if (button.classList.contains('menu_opened'))
        {
            buttonState = 'opened';
            menuState = 'opened';
        }

        if (button.classList.contains('menu_closed'))
        {
            buttonState = 'closed';
            menuState = 'closed';
        }

        switch (buttonState) {
            case 'closed': {
                // console.log('Closed');
                button.classList.replace('menu_closed', 'menu_opened');
                menu.classList.replace('main_closed', 'main_opened');
                break;
            }

            case 'opened': {
                // console.log('Opened');
                button.classList.replace('menu_opened', 'menu_closed');
                menu.classList.replace('main_opened', 'main_closed');
                break;
            }
        }
    }

    return (
        <header>
            <div className="header">
                <button onClick={onClickMenu} className="menu menu_closed"></button>
                <a href="#" className="logo">
                    <img className="logo__img" src={Logo} alt="Logo"/>
                </a>
                <a className="donate-button header-icon" href="#">
                    <div className="donate-button__text">
                        Пожертвовать
                    </div>
                </a>
                <a href="#" className="account header-icon">
                    <img className="account__img" src={coolicon} alt="account"/>
                </a>
                <a href="#" className="search header-icon">
                    <img className="search__img" src={Search} alt="Search"/>
                </a>
            </div>

            <div className="main main_closed">
                <div className="categories">
                    <h3>Разделы</h3>
                    <ul>
                        <li><a href="#">Страны мира </a></li>
                        <li><a href="#">Города мира</a></li>
                        <li><a href="#">Достопримечательности </a></li>
                        <li><a href="#">Борьба с вандализмом </a></li>
                        <li><a href="#">О нас </a></li>
                    </ul>
                </div>
                <div className="countries">
                    <ul>
                        <li><a className="countries__tab actvie">Страны</a></li>
                        <li><a className="countries__tab">Города</a></li>
                        <li><a className="countries__tab">Достопримечательности</a></li>
                    </ul>
                    <div className="countries__rows">
                        <div className="countries__row">
                            <div className="countries__country">
                                <img src={Australia} alt=""/>
                                <a href="#">Австралия</a>
                            </div>
                            <div className="countries__country">
                                <img src={Bulgaria} alt=""/>
                                <a href="#">Болгария</a>
                            </div>
                            <div className="countries__country">
                                <img src={Greece} alt=""/>
                                <a href="#">Греция</a>
                            </div>
                            <div className="countries__country">
                                <img src={Cube} alt=""/>
                                <a href="#">Куба</a>
                            </div>
                            <div className="countries__country">
                                <img src={Poland} alt=""/>
                                <a href="#">Польша</a>
                            </div>
                        </div>
                        <div className="countries__row">
                            <div className="countries__country">
                                <img src={Austria} alt=""/>
                                <a href="#">Австрия</a>
                            </div>
                            <div className="countries__country">
                                <img src={Brazil} alt=""/>
                                <a href="#">Бразилия</a>
                            </div>
                            <div className="countries__country">
                                <img src={Denmark} alt=""/>
                                <a href="#">Дания</a>
                            </div>
                            <div className="countries__country">
                                <img src={Spain} alt=""/>
                                <a href="#">Испания</a>
                            </div>
                            <div className="countries__country">
                                <img src={Portugal} alt=""/>
                                <a href="#">Португалия</a>
                            </div>
                        </div>
                        <div className="countries__row">
                            <div className="countries__country">
                                <img src={Russia} alt=""/>
                                <a href="#">Россия</a>
                            </div>
                            <div className="countries__country">
                                <img src={Turkey} alt=""/>
                                <a href="#">Турция</a>
                            </div>
                            <div className="countries__country">
                                <img src={Chech} alt=""/>
                                <a href="#">Чехия</a>
                            </div>
                            <div className="countries__country">
                                <img src={Hungary} alt=""/>
                                <a href="#">Венгрия</a>
                            </div>
                            <div className="countries__country">
                                <img src={Egypt} alt=""/>
                                <a href="#">Египет</a>
                            </div>
                        </div>
                    </div>
                    <div className="countries__all">
                        <a href="#">Все страны мира ></a>
                    </div>
                </div>
            </div>
        </header>
)
}

export default Header;