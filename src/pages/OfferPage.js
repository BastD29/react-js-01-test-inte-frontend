import React from 'react';
import logo from '../assets/VP_logotype_wh.svg';
import data from '../data.json';

export default function OfferPage() {
  return (
    <div className='welcome'>
        <div className='header'>
            <img src={logo} alt="img-background" />
            <h1>Nos offres Barcelone</h1>
        </div>
        <div className='articles'>
            {data.map((card, index) => (
                
                    <article className='card' key={index}>
                        <div className= {card.id} id="card-img"></div>
                        <div className='info'>
                            <div className='destination-info'>
                                <h2>{card.title}</h2>
                                <p>{card.description}</p>
                                <p>{card.hotel}</p>
                            </div>
                            <div className='discount-info'>
                                <span>Jusquà</span>
                                <h1>{card.discount}</h1>
                            </div>
                        </div>
                    </article>
                
            ))}
        </div>
    </div>
  )
}
