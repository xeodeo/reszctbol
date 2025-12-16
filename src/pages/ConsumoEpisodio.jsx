// Importamos React y useEffect/useState para manejar estado y ciclo de vida
import React, { useEffect, useState } from "react";

export default function ConsumoEpisodio() {
    const [capitulo, setcapitulo] = useState([]);

    useEffect(() => {
        // 5. Consumimos la API con fetch
        fetch("https://rickandmortyapi.com/api/episode")
            .then((response) => response.json()) // Convertimos la respuesta a JSON
            .then((data) => {

                setcapitulo(data.results);
                console.log(data.results)
            })
            .catch((error) => {
                // 7. Si ocurre un error, lo mostramos en consola
                console.error("Error al cargar pisodios:", error);
            });
    }, []); // [] asegura que se ejecute solo una vez al montar el componente

    return (
        <div>
            {/* Título principal */}
            <h1>Capitulos</h1>

            {/* Lista de personajes */}
            <ul>
                {capitulo.map((capitulo) => (
                    <li key={capitulo.id}>
                        {/* Nombre */}
                        <h2>{capitulo.name}</h2>
                        <p>Fecha de emision: {capitulo.air_date}</p>
                        <p>Codigo de capitulo: {capitulo.episode}</p>
                        {/* Estado */}
                        <p>url: {capitulo.url}</p>
                        {/* Especie */}
                        <p>Estrenado: {capitulo.created}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}