import React from 'react';
import 'moment/locale/es';

const hours = [
    {
        '08:00': ['08:00', '08:30'], 
        '09:00': ['09:00', '09:30'],
        '10:00': ['10:00', '10:30'],
        '11:00': ['11:00', '11:30'],
    },
    {
        '12:00': ['12:00', '12:30'],
        '13:00': ['13:00', '13:30'],
        '14:00': ['14:00', '14:30'],
        '15:00': ['15:00', '15:30'],
    },
    {
        '16:00': ['16:00', '16:30'],
        '17:00': ['17:00', '17:30'],
        '18:00': ['18:00', '18:30'],
        '19:00': ['19:00', '19:30'],
    },
    {
        '20:00': ['20:00', '20:30'],
        '21:00': ['21:00', '21:30'],
    }
]


const CalendarSelectHour = (props) => {

    const onclickHour = (event) => {      
        let interval = []
        hours.map((e) => {
            Object.entries(e).map(([key, value]) => {
                if (key === event.target.title ) {
                    interval = value
                }
                return 0
            })
            return 0
        })
        props.setHour(interval)
    }

    return (
        <table className="table-calendar" cellSpacing='0'>
        {
            hours.map((e) => {
                return (
                    <tr className='tr-calendar-body' key={e}  onClick={onclickHour}>
                    {   
                        Object.entries(e).map( ([key, value]) => <td key={key} title={key}>{key}</td> )
                    }
                    </tr>
                )
            }) 
        }
        
        </table>
    )
}

export default CalendarSelectHour