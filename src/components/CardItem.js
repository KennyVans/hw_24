import React from "react";

function CardItem({ name, category, description }) {
    return (
        <div className="col-md-4 mb-4">
        <div className="card h-100">
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
                Категория: {category}<br />
                {description}
            </p>
            </div>
        </div>
        </div>
    );
}

export default CardItem;