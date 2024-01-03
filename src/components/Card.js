import React from "react";
// import cardpic from '../images/katie-zaferes.png'
import star from '../images/star.png'

export default function Card(props){
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.country === "Online"){
        badgeText = "ONLINE"
    }
        
    return(
        <div className="card">
        
        {badgeText && <div className="card--badge">{badgeText}</div>}

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