import React, {Component} from 'react';
import {render} from 'react-dom';

let CallOut = [
    {
        name: 'Менеджер Петя',
        icon: require('../../../img/avatar.jpeg'),
        icon2: require('../../.././img/GreenArrow.png'),
        icon3:require('../../.././img/document.png'),
        display:'block',
        key: '1',
        id: 'PetyaFirst',
        idBefore:'PetyaBefore'
    },
    {
        name: '94.158.67.210',
        icon: require('../../.././img/phone.png'),
        icon2: require('../../.././img/GreenArrow.png'),
        icon3:require('../../.././img/document.png'),
        key: '2',
        id: 'IpCode',
        idBefore:'IpCodeBefore'
    },
    {
        name: 'Менеджер Петя',
        icon: require('../../.././img/avatar.png'),
        icon2: require('../../.././img/GreenArrow.png'),
        icon3:require('../../.././img/document.png'),
        key: '3',
        id: 'PetyaSecond',
        idBefore:'Petya2Before'
    },
];
let Cannot = [
    {
        name: '+38050985654',
        icon: require('../../.././img/SmartPhone.png'),
        icon2: require('../../.././img/RedArrow.png'),
        icon3:"",
        key: '4',
        id: 'Number',
        idBefore:'NumberBefore'
    }
];
export default class xxxx extends Component {
    constructor() {
        super();
        this.callout = CallOut.map((person) => <div className={'before'} id={person.id}
                                                   key={person.key}>
            <div className={'itemContainer'}>
                <div className={'dateCall'}>
                    <span>12:45</span>
                    <span>12 апреля</span>
                </div>
                <div className={'WhoIsCall'}>
                    <img src={person.icon} alt="avatar"/>
                    <div className={'WhoIsCallIn'}>
                        <span className={'bold'}>{person.name}</span>
                        <span>Украина,Киев</span>
                    </div>
                    <img src={person.icon2} alt="arrow"/>
                </div>
                <div className={'WhoIsOperator'}>
                    <span className={'bold'}>Менеджер Вася</span>
                    <span>Украина,Киев</span>
                </div>
                <div className={'timeOfCall'}>
                    25:58
                </div>
                <div className={'downloadCall'}>
                    <img src={person.icon3} alt="img"/>
                    <div className={'round'}>
                        <img src={require('../../.././img/play.png')} alt=""/>
                    </div>
                    <span id={'downloadThisCall'}>Скачать</span>
                </div>
            </div>
        </div>);

        let [, , Vasya2] = [...CallOut];
        let [Vasya1, number,] = [...CallOut];


         this.cannot = Cannot.map((person) => <div className={'before'} id={person.id}
                                                    key={person.key}>
             <div  className={'itemContainer'}>
                 <div className={'dateCall'}>
                     <span>12:45</span>
                     <span>12 апреля</span>
                 </div>
                 <div className={'WhoIsCall'}>
                     <img src={person.icon} alt="avatar"/>
                     <div className={'WhoIsCallIn'}>
                         <span className={'bold'}>{person.name}</span>
                         <span>Украина,Киев</span>
                     </div>
                     <img src={person.icon2} alt="arrow"/>
                 </div>
                 <div className={'WhoIsOperator'}>
                     <span className={'bold'}>Менеджер Вася</span>
                     <span>Украина,Киев</span>
                 </div>
                 <div className={'timeOfCall'}>
                     25:58
                 </div>
                 <div className={'downloadCall'}>
                     <div className={'round'}>
                         <img src={require('../../.././img/play.png')} alt=""/>
                     </div>
                     <span id={'downloadThisCall'}>Скачать</span>
                 </div>
             </div>
         </div>);
        this.all = [Vasya1, number, ...Cannot, Vasya2].map((person) => <div className={'before'} id={person.id}
                                                                             key={person.key}>
            <div className={'itemContainer'}>
                <div className={'dateCall'}>
                    <span>12:45</span>
                    <span>12 апреля</span>
                </div>
                <div className={'WhoIsCall'}>
                    <img src={person.icon} alt="avatar"/>
                    <div className={'WhoIsCallIn'}>
                        <span className={'bold'}>{person.name}</span>
                        <span>Украина,Киев</span>
                    </div>
                    <img src={person.icon2} alt="arrow"/>
                </div>
                <div className={'WhoIsOperator'} id={person.idBefore}>
                    <span className={'bold'}>Менеджер Вася</span>
                    <span>Украина,Киев</span>
                </div>
                <div className={'timeOfCall'}>
                    25:58
                </div>
                <div className={'downloadCall'}>
                    <img  src={person.icon3} alt="img"/>
                    <div className={'round'}>
                        <img src={require('../../.././img/play.png')} alt=""/>
                    </div>
                    <span id={'downloadThisCall'}>Скачать</span>
                </div>
            </div>
        </div>);


        this.test = (event) => {
            let thisElement = event.target;
            console.log(thisElement.id);
            if (thisElement.id === 'CallIN') {
                thisElement.style.cssText='background:#FFD200;box-shadow:inset 0 0  2px rgb(0,0,0);';
                document.getElementById('CallOUT').style.cssText = 'background: #EBEBEB;';
                document.getElementById('CANNOT').style.cssText = 'background: #EBEBEB;';
                document.getElementById('ALL').style.cssText = 'background: #EBEBEB;';
                render(this.callIn, document.getElementById('numbersContainer'))
            }
            else if (thisElement.id === 'CallOUT') {
                thisElement.style.cssText='background:#FFD200;box-shadow:inset 0 0  2px rgb(0,0,0);';
                document.getElementById('CallIN').style.cssText = 'background: #EBEBEB;';
                document.getElementById('CANNOT').style.cssText = 'background: #EBEBEB;';
                document.getElementById('ALL').style.cssText = 'background: #EBEBEB;';
                render(this.callout, document.getElementById('numbersContainer'))
            }
            else if (thisElement.id === 'CANNOT') {
                thisElement.style.cssText='background:#FFD200;box-shadow:inset 0 0  2px rgb(0,0,0);';
                document.getElementById('CallIN').style.cssText = 'background: #EBEBEB;';
                document.getElementById('CallOUT').style.cssText = 'background: #EBEBEB;';
                document.getElementById('ALL').style.cssText = 'background: #EBEBEB;';
                render(this.cannot, document.getElementById('numbersContainer'));
            }
            else if (thisElement.id === 'ALL') {
                thisElement.style.cssText='background:#FFD200;box-shadow:inset 0 0  2px rgb(0,0,0);';
                document.getElementById('CallOUT').style.cssText = 'background: #EBEBEB;';
                document.getElementById('CANNOT').style.cssText = 'background: #EBEBEB;';
                document.getElementById('CallIN').style.cssText = 'background: #EBEBEB;';
                render(this.all, document.getElementById('numbersContainer'))
            }
        }
    }

    render() {
        const imgDownLoad=require('../../../img/downLo.png');
        return (
            <section className={'XXX67'}>
                <div className={'widgetFilter'}>
                    <h1 id={'widgetTitle'}>ВИДЖЕТ XXXXX</h1>
                    <div className={'filterMenu'}>
                        <button onClick={this.test} className={'btnTest'} id={'CallIN'}>Входящие</button>
                        <button onClick={this.test} className={'btnTest'} id={'CallOUT'}>Исходящие</button>
                        <button onClick={this.test} className={'btnTest'} id={'CANNOT'}>Пропущенные</button>
                        <button onClick={this.test} className={'btnTest'} id={'ALL'}>Все</button>
                    </div>
                    <div id={'dateFilter'}>с <img  className={'imgCalendar'} src={require('../../.././img/calendar.png')} alt="imgCalendar"/> 12.02 по <img className={'imgCalendar'} src={require('../../../img/calendar.png')} alt="imgCalendar"/> 19.02</div>
                    <div id={'downLoadStat'}><img src={imgDownLoad} alt="A"/><a className={'colorBlue'} href="/">Скачать</a> статистику</div>
                </div>
                <div id={'containerBlockCalls'}>
                    <div className={'menuCalls'}>
                        <div className={'SpanContainer div1'}><span>ДАТА</span></div>
                        <div className={'SpanContainer div2'}><span>ОТ КОГО</span></div>
                        <div className={'SpanContainer div3'}><span>КОМУ</span></div>
                        <div className={'SpanContainer div4'}><span>ДЛИТЕЛЬНОСТЬ</span></div>
                    </div>
                    <div id={'numbersContainer'}/>
                </div>
            </section>
        )
    }
}