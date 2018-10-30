import React, {Component} from 'react';
import './Authorization_Style.css'
const logoPhone = require('./LogoPhone.jpg');
export  default  class Authorization extends Component{
    constructor(){
        super();
        this.person = `pupkin@mail.com`;
          this.message = `Вы вошли как Василий Пупкин (${this.person})`;
    }
    render(){
        return(
            <section className={'AuthorizationContainer'}>
                <section className={'section_inner section_inner_authorization'}>
                    <div id={'phone'}><img src={logoPhone} alt="Phone"/></div>
                    <div className={'authorizationDiv'}><span>{this.message}</span><div id={'slash'}/><a id={'GoOut'} href="https://mail.google.com/mail/u/0/?pli=1#inbox"><span>Выход</span></a></div>
                </section>
            </section>
        )
    }
}