import React from "react";
import CardItem from "./CardItem";

function CardList() {
    const items = [
        { title: "Пить воду", type: "Привычка", description: "2 литра в день для энергии и здоровья" },
        { title: "Учим JS", type: "Книга", description: "Глубокое понимание JavaScript" },
        { title: "Пушистый друг", type: "Животные", description: "Погулять с собакой" },
        { title: "Прогулка", type: "Здоровье", description: "30 минут на свежем воздухе" },
        { title: "Медитация", type: "Фокус", description: "10 минут концентрации в тишине" },
        { title: "Ранний подъём", type: "Образ жизни", description: "Ежедневный вейкап в 7:00" },
    ];

    return (
        <div className="row">
        {items.map((item, index) => (
            <CardItem
            key={index}
            name={item.title}
            category={item.type}
            description={item.description}
            />
        ))}
        </div>
    );
}

export default CardList;