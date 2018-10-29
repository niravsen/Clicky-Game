import React from "react";
import "./CharacterCard.css";

const Characters = props => (
    <div className="card" onClick={() => props.clickedImage(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
)

export default Characters;