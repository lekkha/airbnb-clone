import React from "react";
import hero from '../images/photo-grid.png';

export default function Hero(){
    return(
        <section className="hero">
            <img src={hero} alt="photo-grid" className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">
                Join unique interactive activity lead by one of a kind host - all without leaving home
            </p>

        </section>

    )

}