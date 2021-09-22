import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Calendar from '../components/Calendar';
import SlideShow from '../components/SlideShow';
import Footer from '../components/Footer'
import Fondobarber from '../images/fondobarber.jpg'
import '../styles/Home.css'

import { firebase } from '../storage/firebase';

const storage = firebase.storage();


const Home = () => {

    const [items, setItems] = useState([])
    
    useEffect(() => {
        load('tradicional')
      }, [])
    
    const load = (type) => {
        let items = []
        storage.ref(`Imagenes/${type}`).listAll().then((result) => {
            result.items.forEach((itemRef) => {
                itemRef.getDownloadURL().then((url) => {
                    items.push({
                        src: url,
                        altText: itemRef.name,
                        caption: 'Slide 1'
                    })
                })
            })
        })
        setItems(items)
    }

    const changeImages = (type) => {
        load(type)
    }

    return (
        <div className='home'>
            <Navbar></Navbar>
            <div className='description-title'> AFStudio</div>
            <img className="img-description" src={Fondobarber}></img>
            <div className="description">          
                <div className='description-body'>               
                Somos una peluqueria con experiencia en niños jóvenes y adultos , lo cual nos ayuda a interpretar tu estilo tanto en las últimas tendencias de cortes como en un corte clásico con un buen modelado a navaja. Contamos con una gran variedad de productos para el cuidado del cabello, y por supuesto para tu barba y bigote. Reserva tu hora. Te esperamos.
                </div>
            </div>
            <Card
                head={
                    <div className="card-title">Reservar</div>
                }
                body={
                    <Calendar></Calendar>
                }
            >
            </Card>
            <Card
                head={
                    <div>
                        <div className="card-title">Galleria</div>
                        <button onClick={ () => changeImages('tradicional')}>Tradicional</button>
                        <button onClick={ () => changeImages('freestyle')}>Freestyle</button>
                        <button onClick={ () => changeImages('arte')}>Arte</button> 
                        <hr></hr>
                    </div>
                }
                body={
                    <SlideShow items={items}></SlideShow>
                }
            >
            </Card>
            <Footer />
        </div>
    )

}

export default Home;