import React, { useState} from 'react';
import moment from 'moment';
import 'moment/locale/es';
import CalendarSelectDay from './CalendarSelectDay';
import CalendarSelectHour from './CalendarSelectHour';
import CalendarSelectInterval from './CalendarSelectInterval';
import CalendarHeader from './CalendarHeader';
import { firebase } from '../storage/firebase';

import Swal from 'sweetalert2'

const headers = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sáb']

const db = firebase.database();

const Calendar = () => {

    moment.locale('es');
    let month_var = moment().format('MMMM YYYY')

    const [calendar, setCalendar] = useState([])
    const month = month_var.charAt(0).toUpperCase() + month_var.slice(1)
    const [date, setDate] = useState(null)
    const [hour, setHour] = useState(null)
    const [interval, setInterval] = useState(null)

    const confirmProcess = () => {
        let dayRegisterRef = db.ref(`reservas/${date}/`) 
        dayRegisterRef.on("value", (snapshot) => {
            snapshot.forEach( snap => {
                if (snap.val()['interval'] === interval) {
                    console.log(snap.val())
                    let intervalRegisterRef = db.ref(`reservas/${date}/${snap.key}`) 
                    intervalRegisterRef.update({
                        'availabe': true,
                        'interval': interval,
                        'reserved': true,
                        'user': 'Mauri'
                    })                 
                    console.log(snap.key)
                }
                dayRegisterRef.push()
            })         
        })  

        Swal.fire({
            title: 'Reservar',
            text: 'Quieres reservar para el ' + moment(date, 'DD MMMM YYYY').format('DD') + ' de ' +  moment(date, 'DD MMMM YYYY').format('MMMM')
                 + ' a las ' + interval + ' horas?',
            icon: 'info',  
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Reserva realizada!',
                    text: 'Te esperamos el ' + moment(date, 'DD MMMM YYYY').format('DD') + ' de ' +  moment(date, 'DD MMMM YYYY').format('MMMM')
                         + ' a las ' + interval + ' horas.',
                    icon: 'success',  
                    confirmButtonText: 'Aceptar',
                })
            } else if (result.isDenied) {
            }
        })
    }

    return (
        <>
            <div className="calendar-container">
                <div className='calendar-header'>
                    <CalendarHeader
                        month={month}
                        date={date}
                        hour={hour}
                        interval={interval}
                        setDate={setDate}
                        setHour={setHour}
                        setInterval={setInterval}
                    />
                </div>
                <div className='calendar-body'>
                    { month && !date && !hour &&
                        <CalendarSelectDay calendar={calendar} setCalendar={setCalendar} 
                        setDate={setDate} headers={headers}/>
                    }
                    { date && !hour &&
                        <CalendarSelectHour setHour={setHour}/>
                    }
                    { hour &&
                        <CalendarSelectInterval setInterval={setInterval} hour={hour} day={date}/>
                    }                
                </div>            
            </div>
            {
                interval && 
                <a class="button-confirm" onClick={confirmProcess} target="_blank" rel="nofollow noopener">Reservar</a>
                // <button onClick={confirmProcessconfirmProcess}>Reservar para el {date + ' a las ' + interval + ' horas'}</button>
            }          
        </>
    )
}

export default Calendar