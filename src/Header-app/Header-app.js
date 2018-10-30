import React, {Component, Fragment} from 'react';
import {Router, Route, NavLink} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import  './Header_Style.css';
////////////
import Profile from '../Profile-app/Profile-app';
import Widget from '../Widgets/Widget-app';
import Operators from'../Operators-app/Operators-app';
import Statistics from '../Statistics-app/Statistics-app';
////////////

const history = createBrowserHistory();
let massNav = [
    {
        title: 'Профиль',
        href: '/Profile',
        key: '1',
        id:''
    },
    {
        title: 'Виджеты',
        href: '/Widget',
        key: '2',
        id:''
    },
    {
        title: 'Операторы',
        href: '/Operators',
        key: '3',
        id:''
    },
    {
        title: 'Статистика',
        href: '/Statistics',
        key: '4',
        id:'StaticMenu'
    }
];
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.navList = massNav.map((item) => <li key={item.key}><NavLink to={item.href} className={'navigation'} activeClassName={'active'}><span
            id={item.id} className={'navSpan'}>{item.title}</span></NavLink></li>);
        this.lastTime = `100 минут`;
        this.lastDate = `осталось до 17.04.2014`;
    }
    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <Fragment>
                        <section className={'Header'}>
                            <section className={'section_inner section_inner_header'}>
                                <nav id={'header_menu'}>
                                    {this.navList}
                                </nav>
                                <div id={'Date_Buy'}>
                                    <div id={'lastDayMessage'}>{this.lastTime} <span id={'blue'}>{this.lastDate}</span></div>
                                    <button id={'btn'}>ЗАПЛАТИТЬ</button>
                                </div>
                            </section>
                        </section>
                        <Route path='/Profile' component={Profile}/>
                        <Route path='/Widget' component={Widget}/>
                        <Route path='/Operators' component={Operators}/>
                        <Route path='/Statistics' component={Statistics}/>
                    </Fragment>
                </Router>
            </Fragment>
        )
    }
}