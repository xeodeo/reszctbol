import React, { useState } from "react";

export default function Envio() {
  {


    const [id, setId] = useState("");


    const [character, setCharacter] = useState(null);


    const [error, setError] = useState("");


    const fetchCharacter = async () => {
      // 5.1) Limpiamos errores previos
      setError("");

      // 5.2) Validamos que haya un ID y que sea un número positivo
      const parsedId = Number(id);
      if (!parsedId || parsedId <= 0) {
        setError("Por favor ingresa un ID válido (número mayor a 0).");
        setCharacter(null);
        return;
      }

      try {
        // 5.3) Construimos la URL usando el ID ingresado
        const url = `https://rickandmortyapi.com/api/character/${parsedId}`;

        // 5.4) Hacemos la petición GET a la API
        const response = await fetch(url);

        // 5.5) Si la respuesta no es OK (404, 500, etc.), lanzamos un error controlado
        if (!response.ok) {
          throw new Error(`No se encontró el personaje con ID ${parsedId}.`);
        }

        // 5.6) Convertimos la respuesta a JSON
        const data = await response.json();

        setCharacter(data);
      } catch (err) {
        // 5.8) Si ocurre cualquier error, lo mostramos y limpiamos el personaje previo
        setError(err.message || "Ocurrió un error al cargar el personaje.");
        setCharacter(null);
      }
    };


    return (
      <div style={{ maxWidth: 640, margin: "0 auto", padding: 16 }}>
        {/* 6.1) Título y breve descripción */}
        <h1>Buscar personaje por ID</h1>
        <p>Ingresa un número de ID y presiona "Buscar" para obtener un personaje.</p>

        {/* 6.2) Input controlado:
          - value está vinculado al estado "id"
          - onChange actualiza "id" con lo que escribe el usuario */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input
            type="number"
            placeholder="Ingresa un ID (ej: 1)"
            value={id}
            onChange={(e) => setId(e.target.value)}
            style={{ padding: 8, width: 200 }}
          />

          {/* 6.3) Botón que dispara la búsqueda llamando a "fetchCharacter" */}
          <button onClick={fetchCharacter} style={{ padding: "8px 12px" }}>
            Buscar
          </button>
        </div>

        {/* 6.4) Mensaje de error (se muestra solo si "error" tiene contenido) */}
        {error && (
          <p style={{ color: "crimson", marginTop: 12 }}>
            {/* Mostramos el texto de error para guiar al usuario */}
            {error}
          </p>
        )}
        {/* 6.5) Renderizado condicional del personaje:
          - Solo se muestra si "character" no es null (ya se cargó uno) */}
        {character && (
          <div
            style={{
              marginTop: 16,
              padding: 16,
              border: "1px solid #ddd",
              borderRadius: 8,
            }}
          >
            {/* 6.6) Mostramos campos relevantes del objeto devuelto por la API */}
            <h2 style={{ marginBottom: 8 }}>{character.name}</h2>
            <img
              src={character.image}
              alt={character.name}
              width={200}
              height={200}
              style={{ borderRadius: 8, objectFit: "cover" }}
            />
            <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
              <li>
                <strong>Estado:</strong> {character.status}
              </li>
              <li>
                <strong>Especie:</strong> {character.species}
              </li>
              <li>
                <strong>Género:</strong> {character.gender}
              </li>
              <li>
                <strong>Origen:</strong> {character.origin?.name}
              </li>
              <li>
                <strong>Ubicación:</strong> {character.location?.name}
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}