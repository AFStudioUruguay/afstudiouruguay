import React, {useEffect} from 'react';
import 'moment/locale/es';


const CalendarSelectInterval = (props) => {

    const onclickInterval = (event) => {
        let target = event.target
        ToggleBackground(target.title)
        props.setInterval(target.title)
    }

    const ToggleBackground = (id) => {
        props.hour.map((interval) => { 
            let element = document.getElementById(interval)
            element.className = ""
            return 0
        })
        let element = document.getElementById(id)
        element.className = "td-interval-on"   
    }

    return (
        <table className="table-calendar" cellSpacing='0'>
        {
            <tr className='tr-calendar-body' onClick={onclickInterval}>
            {   
                props.hour.map((interval) => {
                    return <td key={interval} id={interval} title={interval}>{interval}</td> 
                })
            }
            </tr>
        }
        
        </table>
    )
}

export default CalendarSelectInterval