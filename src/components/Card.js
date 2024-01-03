import React from "react";
// import cardpic from '../images/katie-zaferes.png'
import star from '../images/star.png'

export default function Card(props){
    console.log(props.openSpots);
    return(
        <div className="card">
        <div className="card--badge">SOLD OUT</div>
        <img src={require(`../images/${props.img}`)} alt={props.img} className="card--image" />
        <div className="card--stats">
            <img src={star} className="card--star" />
            <span>{props.rating} </span>
            <span className="gray"> {props.reviewCount} . </span>
            <span className="gray">{props.country}</span>
        </div>
        <p>{props.title}</p>

        <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}