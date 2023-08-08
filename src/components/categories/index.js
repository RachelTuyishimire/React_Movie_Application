import React, {useState, useEffect} from "react";
import './style.css';

const API = process.env.REACT_APP_API_KEY

const Categories = ({ category, setCategory }) => {
    const [genres, setGenres] = useState([]);

    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API}`)
        .then (response => response.json())
        .then(response => setGenres(response.genres))
        .catch(error => console.error("error fetching genres:", error));
    }, []);

    const activeCategory = {
        background: "yellow"
    };

    return (
        <div className="btn">
            <button style={category === ""? activeCategory: null}
            onClick={() => setCategory("")}>ALL</button>
            {genres.map(genre => (
                <button key={genre.id} style = {category === genre.id.toString() ? activeCategory: null}
                onClick = {() => setCategory(genre.id.toString())}>
                    {genre.name.toUpperCase()}
                </button>
            ))}
        </div>
    );
};

export default Categories

