"use client"
import { useState } from 'react';

// Función que determina si una palabra es reservada
const esPalabraReservada = (palabra) => {
    const palabrasReservadas = ['While', 'For', 'Int', 'True', 'Double'];
    return palabrasReservadas.includes(palabra);
};

// Componente principal
const WordRecognition = () => {
    // Estados
    const [texto, setTexto] = useState('');
    const [palabrasReservadasEncontradas, setPalabrasReservadasEncontradas] = useState([]);

    // Función que se ejecuta al cambiar el texto
    const handleChange = (event) => {
        // Se obtienen las palabras del texto
        const textoIngresado = event.target.value;
        const palabras = textoIngresado.split(/\s+/);
        const encontradas = palabras.filter((palabra) => esPalabraReservada(palabra));

        // Se actualizan los estados
        setTexto(textoIngresado);
        setPalabrasReservadasEncontradas(encontradas);
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Reconocimiento de Palabras Reservadas</h1>
            <p> Hecho por: Angel Jhonel Pesantes Romero  </p> <p>Fecha: 25/04/2024</p>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    style={{ minHeight: '100px', borderRadius: '10px' }}
                    placeholder="Ingresa un texto..."
                    value={texto}
                    onChange={handleChange}
                />
            </div>
            <div>
                {/* Se lista las palabras reservadas */}
                <h2>Palabras Reservadas Encontradas:</h2>
                <ul className="list-group">
                    {palabrasReservadasEncontradas.length > 0 ? (
                        palabrasReservadasEncontradas.map((palabra, index) => (
                            <li key={index} className="list-group-item">{palabra}</li>
                        ))
                    ) : (
                        <li className="list-group-item">Ninguna</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default WordRecognition;
