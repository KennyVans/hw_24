import React from "react";
import "./App.css";
import "./styles.css";

import Navbar from "./components/Navbar";
import CategorySelector from "./components/CategorySelector";
import CardList from "./components/CardList";
import Pagination from "./components/Pagination";

function App() {
    return (
        <div className="container mt-4">
        <Navbar />
        <CategorySelector />
        <CardList />
        <Pagination />
        </div>
    );
}

export default App;

