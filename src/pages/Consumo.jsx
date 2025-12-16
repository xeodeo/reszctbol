// Importamos React y useEffect/useState para manejar estado y ciclo de vida
import React, { useEffect, useState } from "react";

export default function Consumo() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        // 5. Consumimos la API con fetch
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json()) // Convertimos la respuesta a JSON
            .then((data) => {

                setCharacters(data.results);
                console.log(data.results)
            })
            .catch((error) => {
                // 7. Si ocurre un error, lo mostramos en consola
                console.error("Error al cargar personajes:", error);
            });
    }, []); // [] asegura que se ejecute solo una vez al montar el componente

    return (
        <div>
            {/* Título principal */}
            <h1>Personajes de Rick and Morty</h1>

            {/* Lista de personajes */}
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>
                        {/* Nombre */}
                        <h2>{character.name}</h2>
                        {/* Imagen */}
                        <img src={character.image} alt={character.name} />
                        {/* Estado */}
                        <p>Estado: {character.status}</p>
                        {/* Especie */}
                        <p>Especie: {character.species}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}