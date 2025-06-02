import React from "react";

function CategorySelector() {
    return (
        <div className="mb-3">
        <select className="form-select">
            <option value="habits">Привычки</option>
            <option value="books">Книги</option>
            <option value="dog">Животные</option>
            <option value="health">Здоровье</option>
            <option value="focus">Фокус</option>
            <option value="lifestyle">Образ жизни</option>
        </select>
        </div>
    );
}

export default CategorySelector;