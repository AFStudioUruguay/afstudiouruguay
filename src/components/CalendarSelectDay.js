import React, {useEffect, useState} from 'react';
import moment from 'moment';
import 'moment/locale/es';

const CalendarSelectDay = (props) => {
    moment.locale('es');

    const today = moment()
    const yesterday = moment().add(-1,'days')
    const startDay = today.clone().startOf('month').startOf('week');
    const endDay = today.clone().endOf('month').endOf('week');

    useEffect(() => {   
        let date = startDay.clone().subtract(1, 'day');
        let cal = []
        while (date.isBefore(endDay, 'day')) 
            cal.push(
                 Array(7).fill(0).map(() => date.add(1, 'day').clone())
            ); 
        props.setCalendar(cal)
    }, [])

    const onclickDay = (event) => {
        let target = event.target
        props.setDate(target.title)
    }

    return (
        <table className="table-calendar" cellSpacing='0'>
            <tr >
            {
                props.headers.map((e) =>{
                    return <th className='th-calendar-header' key={e} value={e}>{e}</th>
                })
            }
            </tr>
            {
                props.calendar.map((week) => {
                    return (
                        <tr className='tr-calendar-body' onClick={onclickDay}>
                        {
                            week.map((day) => {
                                return (
                                    <td key={day.format('DD')} 
                                        title={day.format('DD MMMM YYYY')}
                                        className={`td-calendar-body${day <= yesterday ? "-off" : ""}${
                                            day.format('DD MMMM YYYY') === today.format('DD MMMM YYYY') ? "-today" : ""}`
                                        }
                                    >
                                        {day.format('DD')}
                                    </td>
                                )
                            })
                        }
                        </tr> 
                    )
                })
            }
    </table>
    )
}

export default CalendarSelectDay