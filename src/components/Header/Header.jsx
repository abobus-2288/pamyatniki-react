import React from "react";

import {NavLink} from 'react-router-dom';

import Logo from './img/Logo.png';
import coolicon from './img/coolicon.png';
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

import classes from "./Header.module.css";


const Header = () => {

    const onClickMenu = () => {
        const button = document.getElementById('button');
        const menu = document.getElementById('main');

        // console.log(button);
        // console.log(menu);

        let buttonState;
        let menuState;

        if (button.classList.contains(classes.menu_opened))
        {
            buttonState = 'opened';
            menuState = 'opened';
        }

        if (button.classList.contains(classes.menu_closed))
        {
            buttonState = 'closed';
            menuState = 'closed';
        }

        switch (buttonState) {
            case 'closed': {
                console.log('Closed');
                button.classList.replace(classes.menu_closed,  classes.menu_opened);
                menu.classList.replace(classes.main_closed, classes.main_opened);
                break;
            }

            case 'opened': {
                console.log('Opened');
                button.classList.replace(classes.menu_opened, classes.menu_closed);
                menu.classList.replace(classes.main_opened, classes.main_closed);
                break;
            }
        }
    }

    return (
        <header>
            <div className={classes.header}>
                <button onClick={onClickMenu} className={`${classes.menu} ${classes.menu_closed}`} id="button"></button>
                <a href="#" className={classes.logo}>
                    <img className={classes.logo} src={Logo} alt="Logo"/>
                </a>
                <a className={`${classes.donateButton} ${classes.headerIcon}`} href="#">
                    <div className={classes.donateButtonText}>
                        Пожертвовать
                    </div>
                </a>
                <a href="#" className={classes.headerIcon}>
                    <img className="account__img" src={coolicon} alt="account"/>
                </a>
                <a href="#" className={classes.headerIcon}>
                    <img className="search__img" src={Search} alt="Search"/>
                </a>
            </div>

            <div className={`${classes.main} ${classes.main_closed}`} id="main">
                <div className={classes.categories}>
                    <h3>Разделы</h3>
                    <ul>
                        <li><NavLink onClick={onClickMenu} to={'/'}>Страны мира </NavLink></li>
                        <li><a href="#">Города мира</a></li>
                        <li><a href="#">Достопримечательности </a></li>
                        <li><a href="#">Борьба с вандализмом </a></li>
                        <li><NavLink onClick={onClickMenu} to={'/about'}>О нас </NavLink></li>
                    </ul>
                </div>
                <div className={classes.countries}>
                    <ul>
                        <li><a className={classes.actvie}>Страны</a></li>
                        <li><a>Города</a></li>
                        <li><a>Достопримечательности</a></li>
                    </ul>
                    <div className={classes.countries__rows}>
                        <div className={classes.countries__row}>
                            <div className={classes.countries__country}>
                                <img src={Australia} alt=""/>
                                <a href="#">Австралия</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Bulgaria} alt=""/>
                                <a href="#">Болгария</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Greece} alt=""/>
                                <a href="#">Греция</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Cube} alt=""/>
                                <a href="#">Куба</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Poland} alt=""/>
                                <a href="#">Польша</a>
                            </div>
                        </div>
                        <div className={classes.countries__row}>
                            <div className={classes.countries__country}>
                                <img src={Austria} alt=""/>
                                <a href="#">Австрия</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Brazil} alt=""/>
                                <a href="#">Бразилия</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Denmark} alt=""/>
                                <a href="#">Дания</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Spain} alt=""/>
                                <a href="#">Испания</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Portugal} alt=""/>
                                <a href="#">Португалия</a>
                            </div>
                        </div>
                        <div className={classes.countries__row}>
                            <div className={classes.countries__country}>
                                <img src={Russia} alt=""/>
                                <a href="#">Россия</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Turkey} alt=""/>
                                <a href="#">Турция</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Chech} alt=""/>
                                <a href="#">Чехия</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Hungary} alt=""/>
                                <a href="#">Венгрия</a>
                            </div>
                            <div className={classes.countries__country}>
                                <img src={Egypt} alt=""/>
                                <a href="#">Египет</a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.countries__all}>
                        <a href="#">Все страны мира ></a>
                    </div>
                </div>
            </div>
        </header>
)
}

export default Header;