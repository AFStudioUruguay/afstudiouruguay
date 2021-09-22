import React from 'react'
import moment from 'moment';
import 'moment/locale/es';
import IconLeft from '../images/icon_left.svg'
import IconRight from '../images/icon_right.svg'

const CalendarHeader = (props) => {

    moment.locale('es');

    const previousDay = () => {
        let previus_date = moment(props.date, 'DD MMMM YYYY').add(-1,'days');
        let today = moment()
        if (moment(props.date, 'DD MMMM YYYY') >= today) {
            props.setDate(previus_date.format('DD MMMM YYYY'))
        }
    }

    const nextDay = () => {
        let next_day = moment(props.date, 'DD MMMM YYYY').add(1,'days');
        props.setDate(next_day.format('DD MMMM YYYY'))
    }

    const previousMonth = () => {
        let previus_date = moment(props.date, 'DD MMMM YYYY').add(-1,'months');
        let today = moment()
        if (moment(props.date, 'DD MMMM YYYY') >= today) {
            props.setDate(previus_date.format('DD MMMM YYYY'))
        }
    }

    const nextMonth = () => {
        let next_day = moment(props.date, 'DD MMMM YYYY').add(1,'months');
        props.setDate(next_day.format('DD MMMM YYYY'))
    }

    return (
        <>
            { props.date &&
                <img className="icon-header-left" onClick={previousDay} src={IconLeft}></img>
            }
            { props.month && !props.date && !props.interval &&
                <div>{props.month}</div>   
            }
            { props.date && !props.hour && !props.interval &&
                <div onClick={() => props.setDate(null)}>{props.date}</div>   
            }
            { props.hour && !props.interval &&
                <div onClick={() => props.setHour(null)}>{props.date}</div>   
            }
            { props.interval &&
                <div onClick={() => props.setInterval(null)}>{props.date + " a las " + props.interval}</div>   
            }
            { props.date &&
                <img className="icon-header-right" onClick={nextDay} src={IconRight}></img>
            }
        </>
    )
}

export default CalendarHeader