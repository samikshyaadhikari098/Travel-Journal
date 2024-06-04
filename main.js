import React from "react";

export default function Main(props){
    return(
        <div class="container">
        <div class="card">
            <img src={`./images/${props.item.image}`} alt="Mount Fuji"></img>
            <div class="info">
                <div class="location">
                    <span>{props.item.location}</span>
                    <a href="#">View on Google Maps</a>
                </div>
                <h2>{props.item.title}</h2>
                <p class="dates">{props.item.startDate} - {props.item.endDate}</p>
                <p class="description">
                    {props.item.description}
                </p>
            </div>
        </div>
    </div>
    )
}