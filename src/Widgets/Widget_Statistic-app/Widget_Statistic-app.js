import React, {Component, Fragment} from 'react';
import './Widget_Stat_Style.css';
import {Router, Route, NavLink} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import xxxx from './xxxx/xxxx';
import xxx67 from './xxx67/xxx67'

const history = createBrowserHistory();

let firstColumn = [
    {
        key: '1',
        title: 'Виджет ххх...',
        number: '67',
        href: '/xxx67'
    },
    {
        key: '2',
        title: 'Виджет ххх...',
        number: '67',
        href: '/xxx67'
    }
];
let secondColumn = [
    {
        key: '1',
        title: 'Все виджеты',
        number: '',
        href: '/xxx67'
    },
    {
        key: '2',
        title: 'Виджет ххх...',
        number: '',
        href: '/xxx67'
    },
    {
        key: '3',
        title: 'Виджет ххх...',
        number: '',
        href: '/xxx67'
    }
];
let thirdColumn =  [
    {
        key: '1',
        title: 'Виджет ххх...',
        number: '',
        href: '/xxxx',
        classname:'activeW'
    },
    {
        key: '2',
        title: 'Виджет ххх...',
        number: '',
        href: '/xxx67',
        classname:''
    },
    {
        key: '3',
        title: 'Виджет ххх...',
        number: '',
        href: '/xxx67',
        classname:''
    }
];
let widget67 = [
    {
        key: '1',
        title: 'Виджет ххх...',
        number: '67',
        href: '/xxx67'
    },
    {
        key: '2',
        title: 'Виджет ххх...',
        number: '67',
        href: '/xxx67'
    },
    {
        key: '3',
        title: 'Виджет ххх...',
        number: '67',
        href: '/xxx67'
    }
];
let widget = [
        {
            key: '1',
            title: 'Виджет хххxx',
            href: '/xxx67'
        },
        {
            key: '2',
            title: 'Виджет хххxx',
            href: '/xxx67'
        }
        ,
        {
            key: '3',
            title: 'Виджет хххxx',
            href: '/xxx67'
        }
    ];
export default class WidgetStatistic extends Component {
    constructor() {
        super();
        this.firstColumn = firstColumn.map((widget) =>
            <NavLink key={widget.key} to={widget.href}  className={'NavWidget'}><span>{widget.title}<b>{widget.number}</b></span></NavLink>);

        this.secondColumn = secondColumn.map((widget) =>
            <NavLink key={widget.key} to={widget.href}  className={'NavWidget'}><span>{widget.title}<b>{widget.number}</b></span></NavLink>
        );

        this.thirdColumn = thirdColumn.map((widget) =>
            <NavLink key={widget.key} to={widget.href} activeClassName={widget.classname} className={'NavWidget'}><span datafld={widget.href}>{widget.title}<b>{widget.number}</b></span></NavLink>
        );

        this.listWidgets67 = widget67.map((widget) =>
            <NavLink key={widget.key} to={widget.href}  className={'NavWidget'}><span>{widget.title}<b>{widget.number}</b></span></NavLink>
        );

        this.listWidgets = widget.map((widget) =>
            <NavLink key={widget.key} to={widget.href}  className={'NavWidget'}><span>{widget.title}</span></NavLink>);
    }
    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <Fragment>
                            <nav id={'widgets'}>
                                <div className={'widgetContainer'}><span
                                    id={'Static'}>Статистика</span>{this.firstColumn}</div>
                                <div className={'widgetContainer'}>{this.secondColumn}</div>
                                <div className={'widgetContainer'}>{this.thirdColumn}</div>
                                <div className={'widgetContainer'}>{this.listWidgets67}</div>
                                <div className={'widgetContainer'}>{this.listWidgets}</div>
                                <div className={'widgetContainer'}>{this.listWidgets}</div>
                                <div className={'widgetContainer'}>{this.listWidgets67}</div>
                            </nav>
                        <Route path='/xxxx' component={xxxx}/>
                        <Route path='/xxx67' component={xxx67}/>
                    </Fragment>
                </Router>
            </Fragment>
        )
    }
}