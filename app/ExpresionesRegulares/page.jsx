"use client"
import { useState } from 'react';

const MultiForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setError('');
        setSuccessMessage('');
    };

    const handleValidation = (pattern, message) => {
        if (!pattern.test(inputValue)) {
            setError(message);
            setSuccessMessage('');
            return;
        }

        setSuccessMessage('¡Entrada válida!');
        setError('');
    };

    const clearMessages = () => {
        setError('');
        setSuccessMessage('');
    };

    const handleMacValidation = () => {
        handleValidation(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/, 'Por favor, ingrese una dirección MAC válida.');
    };

    const handleIPv6Validation = () => {
        handleValidation(
            /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/,
            'Por favor, ingrese una dirección IPv6 válida.'
        );
    };


    const handleCedulaValidation = () => {
        handleValidation(/^\d{10}$/, 'Por favor, ingrese un número de cédula válido (10 dígitos numéricos).');
    };

    const handleEmailValidation = () => {
        handleValidation(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Por favor, ingrese un correo electrónico válido.');
    };

    const handlePhoneValidation = () => {
        handleValidation(/^\d{10}$/, 'Por favor, ingrese un número de teléfono válido (10 dígitos numéricos).');
    };

    const handleNameValidation = () => {
        handleValidation(
            /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+$/,
            'Por favor, ingrese un nombre y apellido válido.'
        );
    };

    return (
        <div className="container">
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Ingrese aquí"
                    className={error ? 'input error' : 'input'}
                />
                {error && <p className="error-message">{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
            <div className="buttons">
                <button onClick={handleMacValidation}>Validar MAC</button>
                <button onClick={handleIPv6Validation}>Validar IPv6</button>
                <button onClick={handleCedulaValidation}>Validar Cédula</button>
                <button onClick={handleEmailValidation}>Validar Email</button>
                <button onClick={handlePhoneValidation}>Validar Teléfono</button>
                <button onClick={handleNameValidation}>Validar Nombre</button>
            </div>
            <style jsx>{`
                .container {
                    max-width: 400px;
                    margin: 0 auto;
                    text-align: center;
                }
                .input-container {
                    margin-bottom: 16px;
                }
                .input {
                    width: 70%;
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    font-size: 16px;
                }
                .input.error {
                    border-color: #ff4d4f;
                }
                .buttons {
                    display: flex;
                    justify-content: center;
                }
                button {
                    margin-right: 8px;
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0056b3;
                }
                .error-message {
                    color: #ff4d4f;
                    margin-top: 4px;
                    margin-bottom: 0;
                    font-size: 14px;
                    text-align: left;
                }
                .success-message {
                    color: #4caf50;
                    margin-top: 4px;
                    margin-bottom: 0;
                    font-size: 14px;
                    text-align: left;
                }
            `}</style>
        </div>
    );
};

export default MultiForm;
