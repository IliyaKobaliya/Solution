import React, {Component} from 'react';
import WidgetStatistic from './Widget_Statistic-app/Widget_Statistic-app'

export default class Widget extends Component {
    render() {
        return (
            <section className={'Block-info Widget'}>
                <section className={'section_inner'}>
                    <WidgetStatistic/>
                </section>
            </section>
        )
    }
}